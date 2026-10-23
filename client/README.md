# Prince Patel | Architecture & Building Design: client

Phase 1: foundation (design system, layout, nav, footer, WhatsApp button, routing).

    cp .env.example .env   # add WhatsApp number (digits only, with country code), email, phone
    npm install
    npm run dev

Deploy on Vercel: root directory `client`, build `npm run build`, output `dist`. `vercel.json` handles SPA routing.
