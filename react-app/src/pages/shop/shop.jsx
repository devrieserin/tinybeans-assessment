import React from 'react';
import { PRODUCTS } from '../../products';
import { Product } from '../../components/product';

export const Shop = () => {
    return <div className="shop">
        <div className="shopTitle">
            <h1> React App Shop </h1>
            <div className="products">
                {PRODUCTS.map((product) => (
                    <Product data={product}/>
                ))}
            </div>
        </div>
    </div>;
};