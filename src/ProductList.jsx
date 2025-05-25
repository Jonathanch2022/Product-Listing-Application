import { useState } from "react"
import ProductItem from "./ProductItem.jsx";

function ProductList(props) {

    const [products, setProducts] = useState(props.products);
    
    
    
  

    return (
        <div id="container" className="container">
            {
                props.products.map((value) => <ProductItem key={value[0]} id={value[0]} name={value[1]} description={value[2] + value[5]} price={value[3]} image={value[4]} category={value[5]} />)
            }
        </div>
        

    );
}
export default ProductList;

