import React, { useState } from 'react';
import '../styles/App.css';
import ProductList from '../components/ProductList';
import { useAppSelector } from '../hooks/redux';
import MainSlider from '../components/UI/MainSlider';

function Clothes() {

    const { products } = useAppSelector(state => state.productsReducer)
    const { searchQuerry } = useAppSelector(state => state.searchQuerryReducer)

    const clothes = products.filter(product => product.categorie === 'Clothes')

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
                    products={clothes}
                    categorie={'Clothes'}
                    sizesOptions={sizesOptions}
                />

            </main>


        </div>
    );
}

export default Clothes

