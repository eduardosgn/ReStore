import { useState, useEffect } from "react";
import { Product } from "../../app/models/product";
import ProductList from "./ProductList";
import { motion } from "framer-motion";

export default function Catalog() {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
      fetch('http://localhost:5000/api/products')
        .then(response => response.json())
        .then(data => setProducts(data))
    }, []);

    const variants = {
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
    };

    return (
        <>
            <motion.div
                initial='hidden'
                animate='visible'
                exit='hidden'
                transition={{duration: .5}}
                variants={variants}
            >
                <ProductList products={products} />
            </motion.div>
        </>
    );
};