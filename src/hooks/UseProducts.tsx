import { useEffect } from "react";
import { IProduct } from "../types/types";
import { IOption } from '../types/types';

const compare = (a: number, b: number, ascendingOrder: boolean) => {
    if (a < b) {
        return ascendingOrder ? -1 : 1;
    }
    if (a > b) {
        return ascendingOrder ? 1 : -1;
    }
    return 0;
}

export const search = (products: IProduct[], searchQuerry: string) => {
    return (searchQuerry.length > 0
        ? products.filter((product) => (`${product.brandName.toLowerCase()} ${product.model.toLowerCase()}`.match(searchQuerry.toLowerCase())))
        : []
    )
}

export const useProducts =
    (
        products: IProduct[],
        sortMethod: IOption,
        brandNameSort: IOption[],
        sizeSort: IOption[],
        categorieSort: IOption[],
        searchQuerry: string
    ) => {

        let sortedProducts: IProduct[]

        if (sortMethod.name === 'Sort by') {
            sortedProducts = [...products]
        } else {
            let toAscending: boolean;
            switch (sortMethod.name) {
                case 'Cheap First': toAscending = true; break;
                case 'Expensive First': toAscending = false; break;
                default: sortedProducts = [...products];
            }
            sortedProducts = [...products].sort((a, b) => compare(parseInt(a.price), parseInt(b.price), toAscending))
        }

        if (brandNameSort.length > 0) {
            sortedProducts = sortedProducts.filter(product => (
                brandNameSort.some(brand => (
                    product.brandName === brand.name
                ))
            ))
        }

        if (sizeSort.length > 0) {
            sortedProducts = sortedProducts.filter(product => (
                sizeSort.some(size => (
                    product.sizes.some(s => (
                        s.size == size.name
                    ))
                ))
            ))
        }

        if (categorieSort.length > 0) {
            sortedProducts = sortedProducts.filter(product => (
                categorieSort.some(categorie => (
                    product.categorie === categorie.name
                ))
            ))
        }

        return (searchQuerry.length > 0
            ? sortedProducts.filter((product) => (`${product.brandName.toLowerCase()} ${product.model.toLowerCase()}`.match(searchQuerry.toLowerCase())))
            : sortedProducts
        )

    }