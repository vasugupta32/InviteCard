require('dotenv').config();
const express = require('express');
const cors = require('cors');
const crypto = require('crypto');
const Razorpay = require('razorpay');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// Two tiers, validated server-side so a client can never pay less than a real price.
const PRICES_PAISE = {
  base: parseInt(process.env.BASE_PRICE_PAISE || '4900', 10), // text + template
  premium: parseInt(process.env.PREMIUM_PRICE_PAISE || '9900', 10), // + photo/logo
};
const MIN_AMOUNT_PAISE = 100; // Razorpay's own minimum order amount

// 1. Frontend asks us to create an order before opening Razorpay Checkout.
app.post('/api/create-order', async (req, res) => {
  const tier = req.body?.tier === 'premium' ? 'premium' : 'base';
  const amount = PRICES_PAISE[tier];

  if (!Number.isInteger(amount) || amount < MIN_AMOUNT_PAISE) {
    return res.status(400).json({ error: `Amount must be an integer >= ${MIN_AMOUNT_PAISE} paise` });
  }

  try {
    const order = await razorpay.orders.create({
      amount,
      currency: 'INR',
      receipt: 'invite_' + Date.now(),
      notes: { tier },
    });
    res.json({
      orderId: order.id,
      amount: order.amount,
      currency: order.currency,
      keyId: process.env.RAZORPAY_KEY_ID, // public key, safe to expose
    });
  } catch (err) {
    console.error('create-order failed', err);
    // Razorpay's SDK surfaces auth failures (bad key_id/key_secret) as 401.
    const status = err?.statusCode === 401 ? 401 : 500;
    const message = status === 401 ? 'Razorpay authentication failed — check API keys' : 'Could not create order';
    res.status(status).json({ error: message });
  }
});

// 2. After Checkout succeeds, the frontend sends back the payment details.
//    We MUST verify the signature server-side — never trust "success" from the browser alone.
app.post('/api/verify-payment', (req, res) => {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body || {};

  if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
    return res.status(400).json({ success: false, error: 'Missing required payment fields' });
  }

  const expectedSignature = crypto
    .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
    .update(razorpay_order_id + '|' + razorpay_payment_id)
    .digest('hex');

  const isValid = expectedSignature === razorpay_signature;

  if (isValid) {
    // In a real product: mark this order as paid in your database here,
    // then generate/store the actual shareable invite link for the buyer.
    res.json({ success: true });
  } else {
    // Do NOT mark as paid — signature mismatch means this request can't be trusted.
    res.status(400).json({ success: false, error: 'Signature mismatch' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Running on http://localhost:${PORT}`));
