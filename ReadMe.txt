🛍️ Product Catalog Filter App
This is a simple React-based product catalog application that displays a list of products and allows users to filter them by category (e.g., shoes, hats). It showcases component-based design, dynamic rendering, and state management using React hooks.

📦 Features
✅ Display a list of products with images, names, prices, and descriptions

✅ Filter products by category using a dropdown menu

✅ Dynamic category generation from the product data

✅ Modular, reusable components (ProductItem, ProductList, Header)

🧱 Component Overview
App.jsx
The main component that manages global state:

products: Full list of all available products

category: Current selected category for filtering

Filters the product list based on the selected category before passing it to the ProductList component.

Passes the product data and filtering handler to the Header.

Header.jsx
Displays a banner image and category filter dropdown.

Dynamically generates <option> items from available categories in the product list.

When the dropdown value changes, it updates the category state in App.jsx via props.setCategory.

ProductList.jsx
Accepts a filtered product array as props.products.

Maps through each product and renders a ProductItem for display.

ProductItem.jsx
Displays individual product details including:

Name

Image

Price

ID

Description (with appended category)

🧪 Example Products
Shoes

Shoe 1: Breathable mesh and durable rubber sole

Shoe 2: Lightweight sneaker with shock-absorbing sole

Shoe 3: Performance running shoe with responsive cushioning

Hats

Hat 1: Classic curved brim baseball cap

Hat 2: Soft knit beanie for cold weather

Hat 3: Wide-brim sun hat for outdoor use

🛠️ Tech Stack
React 18+

JavaScript (ES6)

HTML/CSS (assumed)

▶️ Running the App
Clone the repo:

bash
Copy
Edit
git clone https://your-repo-url.git
cd product-catalog
Install dependencies:

bash
Copy
Edit
npm install
Start the development server:

bash
Copy
Edit
npm run dev
📂 Folder Structure
css
Copy
Edit
src/
├── App.jsx
├── Header.jsx
├── ProductList.jsx
├── ProductItem.jsx
├── images/
│   └── StockingHeaders.png
