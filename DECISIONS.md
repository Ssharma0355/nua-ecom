# DECISIONS.md

## Architectural Decision

One decision I spent some time thinking about was how to manage the cart state across the application. The two options I considered were passing state through props or using React Context API.

Passing props would have worked for a small application, but components like the Navbar, Product Card, Product Detail page, and Cart Drawer all need access to the cart. As the application grows, passing props through multiple levels would become difficult to maintain.

I chose React Context API with useReducer because it keeps the cart logic in one place and makes it easier for any component to read or update the cart without unnecessary prop drilling. Using a reducer also made actions like adding items, removing items, and updating quantities more predictable. Since the assignment required the cart to persist after a page refresh, I integrated localStorage with the context so the state is restored automatically.

## What I Would Improve With More Time

If I had more time, I would focus on improving the overall architecture and user experience rather than adding more features.

First, I would move all API requests to a dedicated service layer using React Query. This would provide caching, background refetching, better loading states, and simpler data management.

I would also improve the cart by supporting multiple variants of the same product more cleanly, instead of relying only on the product ID. Better validation around stock availability and quantity limits would also be useful.

On the performance side, I would implement proper image optimization with responsive image sizes instead of relying only on lazy loading. I'd also add route prefetching and further reduce the initial bundle size.

Finally, I would increase the test coverage. At the moment I have basic unit tests, but with more time I would add integration tests for the cart flow and end-to-end tests covering the complete user journey from browsing products to checkout.

Overall, I focused on delivering a clean, responsive, and maintainable implementation that satisfies the assignment requirements while keeping the code easy to extend.