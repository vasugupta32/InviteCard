# Digital Invite Shop — Zero-Investment Earning Guide

## The model

Same shape as the personalized-love-card niche, applied to a bigger market: sell a one-time personalized digital invite (birthday, wedding, baby shower, housewarming) for ₹49–99, delivered as a link people forward on WhatsApp. One template, swapped names/date/venue/message per order — marginal cost per sale is zero. E-invites are already a normal, expected purchase in India (people already pay graphic designers ₹200–2000+ on Instagram/Fiverr for exactly this), so you're not creating demand, you're undercutting an existing market with something faster and cheaper.

## Why this is genuinely zero-investment

- **No inventory, no stock, no upfront purchase.** The product is code + a template, not a physical good.
- **Free hosting at low volume.** Render/Railway/Vercel free tiers handle this easily until you have real paying traffic.
- **No payment gateway setup fee.** Razorpay (or any Indian PSP) takes a cut only from money that already came in — nothing charged to you to turn it on.
- **No domain required to start.** You can sell from a free `*.onrender.com` or `*.vercel.app` subdomain; buy a ₹700–1000/year domain only after you've made a few real sales and want to look more legitimate.
- **No paid marketing required to start.** WhatsApp status, Instagram Reels, and college/local WhatsApp groups are free distribution — the product is the marketing, since every invite sent carries your brand and link.

The only "cost" is your time building the template and doing the first round of outreach.

## Why this niche specifically (vs. the love-card one)

- Bigger buyer base: everyone hosts *something* — birthdays, housewarmings, baby showers, farewells, engagements — not just couples.
- Higher willingness to pay: event hosts already spend money on the event itself, so ₹49–99 for an invite is a rounding error, unlike a novelty gift.
- Existing paid market to undercut: Instagram/Etsy "customized e-invite" sellers already charge ₹150–500+ per design and are slow (1–3 day turnaround); you can deliver instantly.

## Revenue ideas, in order of effort

1. **Validate with zero code.** Before building anything, message 10–15 people you know who have an event coming up and offer to make them a free/discounted invite by hand (Canva + a PDF). If they'd have paid ₹49–99 for it, you have a real market.
2. **This demo: templated storefront.** Occasion picker → form → locked preview → Razorpay → unlocked shareable link. Already built in this folder.
3. **More occasions/themes.** Add anniversary, engagement, farewell, retirement, pet birthday, Rakhi — same tech, new copy and color theme, no new engineering.
4. **Tiering.** Base (text + template) at ₹49, Premium (custom photo, colors, or a short welcome audio note) at ₹99–149. This roughly doubles average order value for almost no extra cost — already wired into this demo's `tier` field.
5. **Affiliate/referral program.** Give 5–10 people a tracked link (`?source=name`) and 20–30% commission per sale once you have a working product. Wedding planners, local event decorators, and college fest organizers are natural partners since they're already talking to people with upcoming events.
6. **RSVP/guest-list add-on.** A ₹20–30 add-on that turns the invite into a simple RSVP form (name + "attending?" + optional guest count), emailed to the host. This is the single most-requested feature for real e-invites and something free Canva templates can't do.

## Costs to expect (once you're making real sales)

Razorpay charges ~2% domestic transaction fee (~2.36% after GST), no setup fee, no AMC. UPI is typically fee-free for the merchant under current RBI rules — price for UPI-heavy traffic to keep margin near the sticker price. A domain, once you want one, is ₹700–1000/year. None of this is owed until money has already come in.

To accept **live** payments (not test mode) you need Razorpay KYC — PAN, bank account, address proof. This takes a few days to approve, so start it once you've validated demand, not before.

## Suggested first 2 weeks (still zero spend)

**Week 1:** Build/polish this demo in test mode. Manually offer invites to 10–15 people with real upcoming events (friends' birthdays, a cousin's baby shower, a housewarming in your building) — even a hand-made one via WhatsApp — to confirm people will actually pay before you push for scale.

**Week 2:** Start Razorpay KYC in parallel. Post 2–3 finished invite examples on your own Instagram/WhatsApp status with a "DM to get yours" CTA. Once you have a handful of real paid orders, reach out to 3–5 people who are already in the "planning events for others" business (local decorators, mehendi artists, DJs) for the affiliate angle — they already have a stream of customers who need exactly this.

Sources:
- [Razorpay Payment Gateway Charges 2026: Pricing Breakdown](https://www.softwaresuggest.com/blog/razorpay-payment-gateway-charges/)
- [Convenience Fee, TDR, MDR, Platform Fee, AMC, Setup Fee and Technology Fee: A Complete Guide to Payment Gateway Charges in 2026](https://razorpay.com/blog/convenience-fee-tdr-mdr-platform-fee-amc-setup-fee-technology-fee-of-payment-gateway/)
