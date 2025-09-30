Mini E-commerce Product Catalog
A simple e-commerce product catalog built with Next.js, TypeScript, and Tailwind CSS. The application allows users to browse products, filter by category, search by name, view product details, and manage a cart. It features a responsive design, animations, and notifications for user actions.
Setup & Run Steps
Prerequisites

Node.js: Version 18.x or higher.
npm: Version 8.x or higher (comes with Node.js).
Git: For cloning the repository.

Installation

Clone the Repository:
git clone <repository-url>
cd mini-ecommerce


Install Dependencies:
npm install

This installs Next.js, TypeScript, Tailwind CSS, and other dependencies defined in package.json.

Run the Development Server:
npm run dev

The app will be available at http://localhost:3000.

Build for Production (optional):
npm run build
npm start

Builds the app and starts a production server.


Project Structure

src/app/: Next.js App Router pages (products, cart, layout).
src/components/: Reusable components (ProductCard, ProductDetails, CategoryFilter, SearchBar, CartNotification, Navbar).
src/context/: React Context for cart state (CartContext.tsx).
src/data/: Static product data (products.ts).
src/types/: TypeScript interfaces (types.ts).
src/app/globals.css: Global styles with Tailwind CSS.
next.config.js: Next.js configuration for image domains.

Assumptions

Static Data: Products are stored in src/data/products.ts as a static array. No backend or database is used.
SearchBar Implementation: Assumed to update the search query param in the URL, triggering filtering in products/page.tsx.
Cart Persistence: Cart state is managed in memory using React Context (CartContext). It resets on page refresh.
Image Hosting: Uses via.placeholder.com for placeholder images, configured in next.config.js.
Styling: Tailwind CSS is used for all styling, with custom animations in globals.css.
Browser Support: Modern browsers (Chrome, Safari, Firefox) are supported. Limited styling for <option> elements in Firefox due to browser restrictions.
Accessibility: Basic accessibility is implemented (e.g., focus rings, disabled states), but further improvements are needed for full compliance.
No Authentication: The app doesn’t require user login or authentication.

Tech Choices & Trade-offs
Tech Stack

Next.js (App Router):
Why: Provides server-side rendering, static site generation, and a simple routing system. The App Router is modern and supports React Server Components.
Trade-offs: The App Router is newer and has less community content than the Pages Router, but it’s more future-proof.


TypeScript:
Why: Adds type safety, improving maintainability and reducing bugs in a growing codebase.
Trade-offs: Increases initial setup time and complexity but pays off with better developer experience and fewer runtime errors.


Tailwind CSS:
Why: Enables rapid styling with utility classes, keeping the codebase clean and avoiding separate CSS files for most components.
Trade-offs: Large class strings can reduce readability, and custom animations require raw CSS in globals.css.


React Context:
Why: Manages cart and notification state globally without introducing external state libraries (e.g., Redux).
Trade-offs: Suitable for small apps but may not scale well for complex state management compared to Redux or Zustand.


Placeholder Images:
Why: Using via.placeholder.com avoids the need for local image assets or external hosting during development.
Trade-offs: Placeholder images are not realistic. Real images would require hosting and additional configuration.



Design Choices

Blue-Black Theme: Chosen for a modern, sleek look (bg-blue-950, bg-gray-900). Light text (text-gray-100) ensures readability.
Animations: Used transform and opacity for smooth, GPU-accelerated effects (e.g., animate-fade-in, animate-notification).
Notifications: Implemented via CartContext and CartNotification for reusability across cart and search actions.
Responsive Design: Leveraged Tailwind’s responsive utilities (e.g., sm:, md:) for mobile and desktop compatibility.

Next Steps
With more time, the following improvements could enhance the application:

Backend Integration:
Replace static products.ts with a database (e.g., MongoDB, PostgreSQL) and API (e.g., Next.js API routes or a separate backend).
Enable dynamic product updates and persistence.


Cart Persistence:
Store cart data in localStorage or a backend to persist across sessions.
Add user authentication to save carts per user.


Enhanced Search:
Implement fuzzy search or server-side search for better performance with large datasets.
Add search suggestions or autocomplete.


Accessibility:
Improve ARIA attributes for screen readers (e.g., aria-label on buttons, aria-live for notifications).
Ensure keyboard navigation for all interactive elements.
Validate contrast ratios for full WCAG compliance.


Custom Dropdown:
Replace <select> in CategoryFilter with a custom dropdown (div/ul) for better styling control, especially for <option> hover effects in Firefox.


Real Images:
Host product images locally (public/images/) or on a CDN (e.g., Cloudinary) for a realistic UI.
Optimize images with Next.js Image component’s features (e.g., lazy loading).


Advanced Animations:
Add more complex animations (e.g., stagger effects for product cards) using libraries like Framer Motion.
Allow users to disable animations for accessibility.


Testing:
Add unit tests (e.g., Jest, React Testing Library) for components and context logic.
Implement end-to-end tests (e.g., Cypress) for user flows.


Checkout Process:
Add a checkout page with payment integration (e.g., Stripe).
Include order summary and confirmation.


Performance Optimization:
Use Next.js static generation (getStaticProps) for product pages if data is static.
Implement pagination or infinite scroll for large product lists.



Usage

Browse Products: Visit /products to view all products, filter by category, or search by name.
View Details: Click "Details" on a product card to see more information.
Add to Cart: Click "Add to Cart" to add items (notifies when added or if item is not in cart).
Search Notification: Search for a non-existent item to see "This item is not available. It will be added soon!".
Cart: View and manage items at /cart.

Known Limitations

Cart Persistence: Resets on page refresh (no localStorage or backend).
Option Styling: Limited styling for <select> options in some browsers (e.g., Firefox).
Static Data: Products are hardcoded, limiting scalability.
Accessibility: Basic focus states are implemented, but full ARIA support is incomplete.
