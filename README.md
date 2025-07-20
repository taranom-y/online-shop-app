
# Online Shop App

An online shopping application built with Next.js and TypeScript, designed to display products, support search and category filtering, allow users to manage a shopping cart and using state management for cart system.

## Features
- Follows the App Router structure introduced in Next.js
- React Query for server state (API data)
- Fetches product list via `GET /products`using React Query, from https://fakestoreapi.com
- Fetch user profile via `GET /users/1` using React Query, from https://fakestoreapi.com
 - All product images are fetched dynamically from the API
- Handles loading and error states during fetching user profile and product list
- Search and filter products by product title and category in state
- State Management with Zustand for client cart state 
 - Add items to cart
 - Increase/decrease item quantity
 - Remove items from cart
 - Calculate unit price and total price

---
- **Framework**: Next.js (App Router)
- **Language**: TypeScript
- **Server State**: React Query
- **Global State**: Zustand
- **Styling**: Tailwind CSS + Shadcn UI
- **Routing**: File-based App Router
