import React, { useState } from 'react'
import { IProduct } from '../types/types';
import ProductList from '../components/ProductList';
import MainSlider from '../components/UI/MainSlider';

interface AccesoriesProps {
    products: IProduct[],
    setProducts: React.Dispatch<React.SetStateAction<IProduct[]>>,
    searchQuerry: string,
    isMobile: boolean,
}

function Accesories({ products, setProducts, searchQuerry, isMobile }: AccesoriesProps) {

    const salesProducts = [products[0]]

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
                    categorie={'Accessories'}
                    isMobile={isMobile}
                    sizesOptions={sizesOptions}
                />

            </main>


        </div>
    );
}

export default Accesories