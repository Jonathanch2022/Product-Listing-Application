import { useState } from 'react'
import Header from "./Header.jsx"
import ProductList from "./ProductList.jsx";



function App() {
    
    
    const [category, setCategory] = useState("none");
    const [products, setProducts] = useState([
        ["1", "Shoe 1", "This stylish and versatile shoe features a breathable mesh upper cushioned insole and durable rubber sole offering all-day comfort and support perfect for casual wear, workouts, or everyday errands.", 25, "https://i5.walmartimages.com/seo/Mens-Air-1-Low-Sneaker-and-Breathable-Fabric-Casual-Shoes-Sports-Trainer-Men-Mesh-Warm-Men-Shoes-Shoes-Non-Slip-Men-s_85358f4f-60d6-42a6-bf45-f2480d122a44.a214b31ef388e21a68902f8e3f02527f.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF", "shoes"],
        ["2", "Shoe 2", "Step into timeless style with this lightweight sneaker designed with a soft fabric lining and shock-absorbing sole for smooth everyday wear.", 125, "https://weesqueak.com/cdn/shop/products/parker-red-tennis-shoe-by-jolly-kids-652958_650x650_crop_center.jpg?v=1693500883", "shoes"],
        ["3", "Shoe 3", "Built for speed and endurance this running shoe features responsive cushioning and a flexible outsole to keep you moving mile after mile.", 49, "https://m.media-amazon.com/images/I/71G5aQh5EFL._AC_UF1000,1000_QL80_.jpg", "shoes"],
        ["4", "Hat 1", "A timeless look with a curved brim and adjustable strap, perfect for casual outings and sun protection.", 20, "https://www.outbacktrading.com/cdn/shop/files/outback-trading-company-wool-felt-hats-bone-678-gallop-wool-hat-1107-bon-678-33365904556166.jpg?v=1726252435", "hat"],
        ["5", "Hat 2", "Soft stretchy and warm this beanie is ideal for chilly days while adding a touch of laid back style.", 19, "https://sainc2.myshopify.com/cdn/shop/products/havana-hat-tweed-front-ss21-2500px.jpg?v=1702421843", "hat"],
        ["6", "Hat 3", "Lightweight and breathable this hat offers full sun coverage and a relaxed fit for beach days or outdoor adventures.", 15, "https://www.outbacktrading.com/cdn/shop/files/outback-trading-company-wool-felt-hats-bone-678-gallop-wool-hat-1107-bon-678-33365904556166.jpg?v=1726252435", "hat"]
    ]);
    let filteredProducts = products;
    
    if (category.toUpperCase() != "NONE") {

        filteredProducts = products.filter(product => product[5].toUpperCase() == category.toUpperCase());
    }
    return (
        <>
            <Header category={category} setCategory={setCategory} productList={products} />
            <ProductList products={filteredProducts} />
            
        </>
    )
}


export default App;



