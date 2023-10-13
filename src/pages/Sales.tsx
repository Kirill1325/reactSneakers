import React, { useState, useEffect } from 'react';
import '../styles/App.css';
import ProductList from '../components/ProductList';
import { IProduct } from '../types/types';
import MainSlider from '../components/UI/MainSlider';

interface SalesProps {
    products: IProduct[],
    setProducts: React.Dispatch<React.SetStateAction<IProduct[]>>,
    searchQuerry: string,
    isMobile: boolean,
}

function Sales({ products, setProducts, searchQuerry, isMobile }: SalesProps) {

    // const [salesProducts, setSalesProducts] = useState<IProduct[]>([])

    // useEffect(() => {
    //     shoes.map(shoe => {
    //         if (shoe.onSale) {
    //             setSalesProducts(prevProducts => [...prevProducts, shoe])
    //         }
    //     })

    //     clothes.map(item => {
    //         if (item.onSale) {
    //             setSalesProducts(prevProducts => [...prevProducts, item])
    //         }
    //     })

    //     accesories.map(accesorie => {
    //         if (accesorie.onSale) {
    //             setSalesProducts(prevProducts => [...prevProducts, accesorie])
    //         }
    //     })
    // }, [])

    const sizesOptions = [
        { name: 'Size', value: 'Size' },
        { name: '35', value: '35' },
        { name: '35.5', value: '35.5' },
        { name: '36', value: '36' },
        { name: '36.5', value: '36.5' },
        { name: '37', value: '37' },
        { name: '37.5', value: '37.5' },
        { name: '38', value: '38' },
        { name: '38.5', value: '38.5' },
        { name: '39', value: '39' },
        { name: '39.5', value: '39.5' },
        { name: '40', value: '40' },
        { name: '40.5', value: '40.5' },
        { name: '41', value: '41' },
        { name: '41.5', value: '41.5' },
        { name: '42', value: '42' },
        { name: '42.5', value: '42.5' },
        { name: '43', value: '43' },
        { name: '43.5', value: '43.5' },
        { name: '44', value: '44' },
        { name: '44.5', value: '44.5' },
        { name: '45', value: '45' },
        { name: '45.5', value: '45.5' },
        { name: '46', value: '46' },
        { name: '46.5', value: '46.5' },
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
                    // setClothes={setClothes}
                    // setAccesories={setAccesories}
                    searchQuerry={searchQuerry}
                    categorie={'Sale'}
                    isMobile={isMobile}
                    sizesOptions={sizesOptions}
                />

            </main>


        </div>
    );
}

export default Sales