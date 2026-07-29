# InviteCraft — Digital Invite Shop Demo

A rough, working demo of a payment-gated personalized digital invite site: pick an occasion, fill in event details, preview a locked invite, pay via Razorpay, unlock the shareable link. Meant as a starting point, not a finished product — see `BUSINESS_GUIDE.md` for the zero-investment earning plan behind it.

## What's here

- `public/index.html` — the storefront: occasion picker (birthday/wedding/baby shower/housewarming), event-detail form, live preview, tier selector (base/premium), Razorpay Checkout button
- `server.js` — Express backend with two endpoints: creates a Razorpay order (price validated server-side per tier), and verifies the payment signature after checkout
- `.env.example` — copy to `.env` and fill in your own keys

## 1. Get Razorpay test keys (free, no KYC needed for test mode)

1. Sign up at [dashboard.razorpay.com](https://dashboard.razorpay.com/signup)
2. Go to **Settings → API Keys → Generate Test Key**
3. Copy the Key ID and Key Secret into a `.env` file (based on `.env.example`)

Test mode runs the entire flow with fake cards — nothing charges real money. Real (live) payments require completing Razorpay KYC (PAN, bank account, address proof), which is worth starting once you've validated the idea.

## 2. Run it locally

```bash
cd einvite-shop
npm install
cp .env.example .env   # then edit .env with your test keys
npm start
```

Open `http://localhost:3000`. Use Razorpay's test card `4111 1111 1111 1111`, any future expiry date, any CVV, to simulate a successful payment.

## 3. Deploy it for free

**Render.com** is the simplest option for a plain Express app like this:

1. Push this folder to a GitHub repo
2. On Render, create a new **Web Service**, connect the repo
3. Build command: `npm install` · Start command: `npm start`
4. Add `RAZORPAY_KEY_ID`, `RAZORPAY_KEY_SECRET`, `BASE_PRICE_PAISE`, `PREMIUM_PRICE_PAISE` as environment variables in Render's dashboard (don't commit `.env`)

Railway.app works the same way. Vercel/Netlify are great for pure static sites, but this app needs a persistent Node server, so Render/Railway is the better fit unless you adapt `server.js` into serverless API routes.

## Important before charging real people

Switch from `rzp_test_` keys to live keys only after Razorpay approves your KYC. Store keys as environment variables, never in code or a public repo. The signature verification in `/api/verify-payment` is what actually protects you from fake "payment succeeded" requests — don't skip it or trust the frontend alone. Once a payment is verified, in a real product you'd save the order to a database and generate/host the actual shareable invite page — this demo just unlocks the preview in the browser to keep things simple.
