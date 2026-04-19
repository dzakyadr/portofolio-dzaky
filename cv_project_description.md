# Peach Cat Club Shop — Project Description

---

## Overview (for PDF Portfolio)

**Peach Cat Club Shop** is a fully functional e-commerce web application I built for my own clothing brand, **Peach Cat Club** — a streetwear brand rooted in internet culture. The platform handles everything from product discovery to order management, designed to be production-ready from day one.

The project was built end-to-end as both a real business tool and a technical showcase — covering backend architecture, relational database design, frontend state management, and UI/UX polish.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Backend | Laravel 11 (PHP) |
| Frontend | React + TypeScript (via Inertia.js) |
| Styling | Tailwind CSS |
| Animation | Framer Motion |
| Database | PostgreSQL |
| Auth | Laravel Breeze (session-based) |
| Email | SMTP (Gmail) for transactional mail |
| Asset Bundling | Vite |

---

## What It Can Do

### Customer Side
- Browse products by category with a responsive storefront
- View individual product detail including images, sizes, and stock availability
- Add to cart with real-time stock validation (prevents overselling)
- Checkout with full shipping form
- Receive order confirmation email automatically
- Track order status (Pending → Processing → Shipped → Delivered) via "My Orders"
- User-isolated cart — switching accounts does not bleed cart data

### Admin Side
- Manage products: create, edit, delete with image uploads and variant (size/color) management
- Manage categories and banners (homepage carousel)
- View and update all customer orders with status control
- Role-based access: custom middleware restricts all `/admin` routes to admin accounts only

---

## Key Technical Highlights

1. Built a full-stack e-commerce platform with **Laravel, Inertia.js, and React (TypeScript)** — complete with storefront, admin dashboard, cart, checkout, and order tracking.

2. Engineered a session-isolated cart system with per-user `localStorage` key-binding and real-time stock validation to prevent cross-account data bleeding and overselling.

3. Designed an 8-table **PostgreSQL** relational schema and secured admin routes with a custom role-based middleware, separating customer and admin access layers.

---

---

## AI Agent Prompt (for Web Portfolio)

Use this prompt when embedding this project in a portfolio site with an AI assistant:

---

```
You are a portfolio assistant for Dzaky Adrian's project called "Peach Cat Club Shop."

Here is everything you need to know about this project:

PROJECT OVERVIEW:
Peach Cat Club Shop is a full-stack e-commerce web application built by Dzaky Adrian for his own clothing brand, Peach Cat Club — a streetwear brand inspired by internet culture. This is a production-ready platform covering the entire shopping experience from product browsing to order management.

TECH STACK:
- Backend: Laravel 11 (PHP)
- Frontend: React + TypeScript, connected via Inertia.js (no separate API needed)
- Styling: Tailwind CSS with Framer Motion animations
- Database: PostgreSQL with an 8-table relational schema
- Authentication: Laravel Breeze (session-based)
- Email: SMTP Gmail for automated transactional emails
- Build Tool: Vite

WHAT THE APP CAN DO:

Customer Features:
- Browse products filtered by category
- View product detail with images, sizes, available stock
- Add to cart with stock enforcement (can't add more than available stock)
- Full checkout flow with shipping form
- Automatic order confirmation email after checkout
- Track order history and status updates in "My Orders"
- User-isolated cart (switching accounts won't mix cart data)

Admin Features:
- Create, edit, delete products with image upload and variant management
- Manage product categories and homepage banner carousel
- View all customer orders and update order status (Pending → Processing → Shipped → Delivered)
- Protected by custom role-based middleware — only admin accounts can access /admin routes

KEY ENGINEERING DECISIONS:
1. Used Inertia.js to build a SPA-like experience without a separate REST API, keeping all server logic in Laravel while rendering UI in React.
2. Implemented per-user localStorage key-binding for cart isolation, so cart data never bleeds between different logged-in accounts.
3. Built custom EnsureAdminRole middleware to enforce strict access separation between customer and admin panels.
4. Designed a normalized PostgreSQL schema covering: users, products, product_variants, product_images, categories, orders, order_items, and banners.

When answering questions about this project, be specific, technical but approachable, and highlight that this was built for Dzaky's real-world brand — not just a tutorial clone.
```
