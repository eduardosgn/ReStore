import { useEffect, useState } from "react";
import { Product } from "./product";


export default function App() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/products')
      .then(response => response.json())
      .then(data => setProducts(data))
  }, []);

  function addProduct() {
    setProducts([...products, {name: 'Product 03', price: 300.99}])
  };

  return (
    <div>
      <h1>ReStore</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - {product.brand} - {product.price}
          </li>
        ))}
      </ul>
      <button onClick={addProduct}>Add product</button>
    </div>
  );
};
