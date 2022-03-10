import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Catalog from "../../feature/catalog/Catalog";
import { Product } from "../models/product";


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
    <>
      <Typography variant='h1'>ReStore</Typography>
      <Catalog products={products} addProduct={addProduct} />
    </>
  );
};
