import React, { useState } from 'react';
import '../styles/App.css';
import ProductList from '../components/ProductList';
import { IProduct } from '../types/types';
import MainSlider from '../components/UI/MainSlider';

interface ClothesProps {
    products: IProduct[],
    setProducts: React.Dispatch<React.SetStateAction<IProduct[]>>,
    searchQuerry: string,
    isMobile: boolean,
}

function Clothes({ products, setProducts, searchQuerry, isMobile }: ClothesProps) {

    const salesProducts = [products[0], products[2]]

    const sizesOptions = [
        { name: 'Size', value: 'Size' },
        { name: 'XS', value: 'XS' },
        { name: 'S', value: 'S' },
        { name: 'M', value: 'M' },
        { name: 'L', value: 'L' },
        { name: 'XL', value: 'XL' },
    ]

    return (
        <div className="mansShoes">

            <main>
                <MainSlider />
                <ProductList
                    products={products}
                    setProducts={setProducts}
                    searchQuerry={searchQuerry}
                    categorie={'Clothes'}
                    isMobile={isMobile}
                    sizesOptions={sizesOptions}
                />

            </main>


        </div>
    );
}

export default Clothes

