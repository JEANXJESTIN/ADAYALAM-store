# ADAYALAM Clothing Store

## Project Structure

```
ADAYALAM-store/
├── app/
│   ├── layout.tsx                # Main layout component
│   ├── page.tsx                  # Home page
│   ├── shop/
│   │   ├── page.tsx              # Shop page
│   │   └── [productId]/
│   │       └── page.tsx          # Product detail page
│   ├── cart/
│   │   └── page.tsx              # Cart page
│   ├── checkout/
│   │   ├── page.tsx              # Checkout page
│   │   ├── address/
│   │   │   └── page.tsx          # Address page
│   │   ├── payment/
│   │   │   └── page.tsx          # Payment page
│   │   └── confirmation/
│   │       └── page.tsx          # Order confirmation page
│   ├── dashboard/
│   │   └── page.tsx              # User dashboard page
│   └── login/
│       └── page.tsx              # Login page
├── components/
│   ├── Header.tsx                # Header component
│   ├── Footer.tsx                 # Footer component
│   ├── ProductCard.tsx            # Individual product card component
│   ├── CartItem.tsx               # Cart item component
│   ├── CheckoutForm.tsx           # Checkout form component
│   ├── AddressForm.tsx            # Address form component
│   ├── PaymentForm.tsx            # Payment form component
│   └── UserDashboard.tsx           # User dashboard component
├── styles/
│   ├── globals.css                # Global styles
│   └── Home.module.css             # Styles specific to Home
├── utils/
│   ├── api.ts                     # API utility functions
│   └── auth.ts                    # Authentication utilities
├── public/
│   └── images/                    # Images folder
├── .gitignore                     # Git ignore file
├── package.json                   # NPM package file
├── tsconfig.json                  # TypeScript configuration file
└── next.config.js                 # Next.js configuration file
```