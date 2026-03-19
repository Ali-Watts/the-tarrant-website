---
Date Created: 2026-03-18T21:30:00Z
Date Updated: 2026-03-18T21:30:00Z
---

# E-Commerce Platform Options — The Tarrant Collective

## Context

The Tarrant Collective is launching with a single product (The Origin) in three colourways, priced at $450–$600 AUD. The site is currently built as static HTML/CSS/JS with an Aesop-inspired editorial design. This document compares platform options for adding commerce functionality.

---

## Option 1: Snipcart + Netlify (Recommended)

**What it is:** A JavaScript-based cart layer that sits on top of the existing static site. Netlify provides free hosting.

### Monthly cost

| Item | Cost |
|------|------|
| Snipcart | ~$30 AUD/month |
| Hosting (Netlify free tier) | $0 |
| Domain (thetarrantcollective.com) | ~$2 AUD/month (~$25/year) |
| Stripe transaction fees | 1.7% + 30c per sale |
| **Total (before sales)** | **~$32 AUD/month** |

### Benefits

- Keep the exact site design as-is — no migration, no templates
- Full CSS control over the cart to match brand aesthetic
- Slide-out cart drawer, proper checkout flow, shipping, tax calculation
- Supports Stripe, PayPal, Apple Pay
- Minimal implementation — a script tag and data attributes on buttons
- Site stays fast (static HTML, CDN-hosted)
- No platform lock-in — easy to switch later

### Limitations

- No built-in inventory management dashboard (basic order dashboard only)
- No built-in email marketing (use Klaviyo separately)
- No built-in fulfilment workflows
- Less ecosystem of apps/plugins than Shopify
- If order volume grows significantly, the operational tooling may feel thin

### Best for

Single-product launch where design control matters and order volume is low-to-moderate.

---

## Option 2: Shopify Basic

**What it is:** Full e-commerce platform with hosting, admin dashboard, payment processing, and theme system included.

### Monthly cost

| Item | Cost |
|------|------|
| Shopify Basic | $39 AUD/month |
| Hosting | Included |
| Domain | ~$2 AUD/month (~$25/year) |
| Shopify Payments | 1.75% per sale |
| **Total (before sales)** | **~$41 AUD/month** |

### Benefits

- Complete e-commerce operations: inventory, orders, fulfilment, customer management
- Unlimited products — scales as the Collective adds products
- Built-in Afterpay/Zip support
- Klaviyo integrates natively
- App ecosystem for reviews, upsells, analytics, shipping
- Shopify CLI allows theme editing the same way we work now (edit files, push to preview)
- Handles tax compliance, shipping rates, discount codes out of the box
- Strong SEO and performance

### Limitations

- The current site design would need to be rebuilt as a Shopify Liquid theme
- Less design freedom than a fully custom static site (though Dawn theme is flexible)
- Monthly cost is slightly higher than Snipcart for a single product
- Some lock-in to the Shopify ecosystem

### Best for

When the Collective is ready to scale beyond one product, needs proper inventory/order management, or wants Afterpay and a full operational dashboard from day one.

---

## Option 3: Big Cartel

**What it is:** Simple, maker-focused e-commerce platform built for artists and small brands selling a small number of products.

### Monthly cost

| Item | Cost |
|------|------|
| Big Cartel (up to 5 products) | $0 |
| Big Cartel (custom domain + more features) | ~$15 USD (~$23 AUD)/month |
| Hosting | Included |
| Domain | ~$2 AUD/month (~$25/year) |
| Stripe transaction fees | 1.7% + 30c per sale |
| **Total (free tier)** | **~$2 AUD/month** |
| **Total (paid tier)** | **~$25 AUD/month** |

### Benefits

- Free tier supports up to 5 products — enough for launch
- Very simple admin, designed for makers
- Clean, minimal templates
- Stripe and PayPal support
- Low barrier to entry

### Limitations

- Very limited design customisation compared to the current site
- No Afterpay/Zip
- Minimal app ecosystem
- Limited reporting and analytics
- The editorial design we've built would be difficult to replicate
- Feels small — may not match the premium positioning of the brand

### Best for

Testing the waters with minimal financial commitment. Less suitable if brand presentation is a priority.

---

## Option 4: Square Online

**What it is:** E-commerce platform from Square, with a free tier that includes hosting and basic store functionality.

### Monthly cost

| Item | Cost |
|------|------|
| Square Online (free tier, Square branding) | $0 |
| Square Online (paid, no branding) | ~$29 AUD/month |
| Hosting | Included |
| Domain | ~$2 AUD/month (~$25/year) |
| Square transaction fees | 1.6% per sale |
| **Total (free tier)** | **~$2 AUD/month** |
| **Total (paid tier)** | **~$31 AUD/month** |

### Benefits

- Free tier available
- Afterpay built in
- Competitive transaction fees (1.6%)
- Good if already using Square POS for markets or pop-ups
- Handles Australian tax natively

### Limitations

- Template design is limited — would lose the current editorial aesthetic
- Free tier includes Square branding
- Smaller ecosystem than Shopify
- Less LLM/CLI tooling for theme editing

### Best for

Brands already in the Square ecosystem, or those who want Afterpay on a budget.

---

## Option 5: Gumroad

**What it is:** Simple product selling platform. No monthly fee — takes a percentage of each sale.

### Monthly cost

| Item | Cost |
|------|------|
| Gumroad | $0/month |
| Transaction fee | 10% per sale |
| Hosting (for the main site, via Netlify) | $0 |
| Domain | ~$2 AUD/month (~$25/year) |
| **Total (before sales)** | **~$2 AUD/month** |

### Benefits

- Zero monthly cost
- Instant setup
- Can embed checkout widget on the existing site
- Good for pre-launch / waitlist phase

### Limitations

- 10% transaction fee is steep at the $450–$600 price point ($45–$60 per sale)
- Very limited branding and customisation
- No inventory management
- No Afterpay
- Doesn't match the premium brand positioning

### Best for

Pre-launch email capture or very early validation. Not suitable as a long-term commerce platform at this price point.

---

## Option 6: Lemonsqueezy

**What it is:** Modern alternative to Gumroad with better branding options and lower fees.

### Monthly cost

| Item | Cost |
|------|------|
| Lemonsqueezy (free tier) | $0/month |
| Transaction fee | 5% + 50c per sale |
| Hosting (for the main site, via Netlify) | $0 |
| Domain | ~$2 AUD/month (~$25/year) |
| **Total (before sales)** | **~$2 AUD/month** |

### Benefits

- No monthly fee
- Lower transaction fee than Gumroad (5% vs 10%)
- Handles Australian tax compliance
- Embeddable checkout overlay
- Cleaner branding than Gumroad

### Limitations

- 5% transaction fee still adds up at $450–$600 ($22–$30 per sale)
- Limited design customisation
- No Afterpay
- No inventory or fulfilment tools

### Best for

Early-stage sales with zero upfront cost. Better than Gumroad but same fundamental trade-offs.

---

## Recommendation

### Now (launch phase): Snipcart + Netlify

The current site is already built with the correct brand aesthetic, copy, and structure. Snipcart layers commerce on top with minimal changes — a script tag and data attributes on the existing "Add to Cart" buttons. Total cost ~$32/month. Design stays exactly as intended. No platform migration required.

### Later (growth phase): Shopify

When The Tarrant Collective expands beyond The Origin — new products, higher order volume, need for Afterpay, proper inventory management, email marketing integration — migrate to Shopify Basic. The site design, copy, and brand system we've built here becomes the spec for the Shopify theme. Cost ~$41/month with significantly more operational capability.

### Avoid

Gumroad and Lemonsqueezy charge percentage-based fees that are disproportionate at the $450–$600 price point. Big Cartel's design limitations don't match the brand's premium positioning. These are better suited to lower-priced products or very early validation.

---

## Transaction fee comparison at $550 AUD per sale

| Platform | Fee per sale | Annual cost (100 sales) |
|----------|-------------|------------------------|
| Stripe (via Snipcart) | $9.65 | $965 |
| Shopify Payments | $9.63 | $963 |
| Square | $8.80 | $880 |
| Lemonsqueezy | $28.00 | $2,800 |
| Gumroad | $55.00 | $5,500 |
