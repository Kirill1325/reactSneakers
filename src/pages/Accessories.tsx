import React, { useState } from 'react'
import { useAppSelector } from '../hooks/redux';
import ProductList from '../components/ProductList';
import MainSlider from '../components/UI/MainSlider';

function Accessories() {

    const { products } = useAppSelector(state => state.productsReducer)
    const { searchQuerry } = useAppSelector(state => state.searchQuerryReducer)

    const accessories = products.filter(product => product.categorie === 'Accessories')


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
                    products={accessories}
                    categorie={'Accessories'}
                    sizesOptions={sizesOptions}
                />

            </main>


        </div>
    );
}

export default Accessories