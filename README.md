# Points Xchange

Production-ready Next.js 15 website for Points Xchange, a premium brokerage for selling hotel points, airline miles, and credit card rewards.

## Stack

- Next.js 15 App Router
- TypeScript
- Tailwind CSS
- ShadCN-style UI primitives
- Prisma with PostgreSQL
- Server Actions
- Resend email integration
- Vercel-ready deployment

## Setup

1. Copy `.env.example` to `.env`.
2. Set `DATABASE_URL`, `ADMIN_PASSWORD`, `ADMIN_SESSION_SECRET`, and optional `RESEND_API_KEY`.
3. Run `npm install`.
4. Run `npm run db:push`.
5. Run `npm run db:seed`.
6. Run `npm run dev`.

## Admin

Visit `/admin` and sign in with `ADMIN_PASSWORD`.

The dashboard manages leads, statuses, program rates, spreads, minimums, active status, blog posts, FAQs, testimonials, supported programs, contact requests, and calculator settings.
