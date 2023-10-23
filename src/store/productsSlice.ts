import { createSlice, current } from "@reduxjs/toolkit"
import dunk1 from '../imgs/dunk1.png'
import dunk2 from '../imgs/dunk2.png'
import dunk3 from '../imgs/dunk3.png'

import nb1906_1 from '../imgs/nb1906_1.png'
import nb1906_2 from '../imgs/nb1906_2.png'
import nb1906_3 from '../imgs/nb1906_3.png'
import nb1906_4 from '../imgs/nb1906_4.png'
import nb1906_5 from '../imgs/nb1906_5.png'

import nb550_1 from '../imgs/nb550_1.png'
import nb550_2 from '../imgs/nb550_2.png'
import nb550_3 from '../imgs/nb550_3.png'

import yzy380_1 from '../imgs/yzy380_1.png'
import yzy380_2 from '../imgs/yzy380_2.png'

import ozweego1 from '../imgs/ozweego1.png'
import ozweego2 from '../imgs/ozweego2.png'
import ozweego3 from '../imgs/ozweego3.png'

import slipstream1 from '../imgs/slipstream1.png'
import slipstream2 from '../imgs/slipstream2.png'
import slipstream3 from '../imgs/slipstream3.png'

import rsx1 from '../imgs/rsx1.png'
import rsx2 from '../imgs/rsx2.png'
import rsx3 from '../imgs/rsx3.png'

import classic1 from '../imgs/classic1.png'
import classic2 from '../imgs/classic2.png'
import classic3 from '../imgs/classic3.png'

import cali1 from '../imgs/cali1.png'
import cali2 from '../imgs/cali2.png'
import cali3 from '../imgs/cali3.png'
import cali4 from '../imgs/cali4.png'
import cali5 from '../imgs/cali5.png'

import blazer1 from '../imgs/blazer1.png'
import blazer2 from '../imgs/blazer2.png'
import blazer3 from '../imgs/blazer3.png'
import blazer4 from '../imgs/blazer4.png'
import blazer5 from '../imgs/blazer5.png'

import nitro1 from '../imgs/nitro1.png'
import nitro2 from '../imgs/nitro2.png'
import nitro3 from '../imgs/nitro3.png'
import nitro4 from '../imgs/nitro4.png'
import nitro5 from '../imgs/nitro5.png'

import napapijri1 from '../imgs/napapijri1.png'
import napapijri2 from '../imgs/napapijri2.png'
import napapijri3 from '../imgs/napapijri3.png'
import napapijri4 from '../imgs/napapijri4.png'
import napapijri5 from '../imgs/napapijri5.png'

import tnf1 from '../imgs/tnf1.png'
import tnf2 from '../imgs/tnf2.png'
import tnf3 from '../imgs/tnf3.png'
import tnf4 from '../imgs/tnf4.png'
import tnf5 from '../imgs/tnf5.png'

import heavyweight1 from '../imgs/heavyweight1.png'
import heavyweight2 from '../imgs/heavyweight2.png'
import heavyweight3 from '../imgs/heavyweight3.png'
import heavyweight4 from '../imgs/heavyweight4.png'
import heavyweight5 from '../imgs/heavyweight5.png'

import football1 from '../imgs/football1.png'
import football2 from '../imgs/football2.png'
import football3 from '../imgs/football3.png'
import football4 from '../imgs/football4.png'
import football5 from '../imgs/football5.png'

import vansBag1 from '../imgs/vansBag1.png'
import vansBag2 from '../imgs/vansBag2.png'
import vansBag3 from '../imgs/vansBag3.png'
import vansBag4 from '../imgs/vansBag4.png'
import vansBag5 from '../imgs/vansBag5.png'
import { IProduct, ISize } from "../types/types"

const productsState: IProduct[] = [
    {
        categorie: 'Shoes',
        id: 1,
        brandName: 'Nike',
        model: 'Dunk High',
        price: '1000 €',
        onSale: false,
        sizes: [
            { size: 35, inBag: false },
            { size: 35.5, inBag: false },
            { size: 36, inBag: false },
            { size: 36.5, inBag: false },
            { size: 37, inBag: false },
            { size: 37.5, inBag: false },
            { size: 38, inBag: false },
            { size: 39, inBag: false },
            { size: 40, inBag: false },
            { size: 40.5, inBag: false },
            { size: 41, inBag: false },
            { size: 42, inBag: false },
            { size: 43, inBag: false },
            { size: 44, inBag: false },
            { size: 45, inBag: false },
            { size: 46, inBag: false },
        ],
        liked: false,
        img: dunk1,
        imgHover: dunk2,
        sliderPics: [dunk1, dunk2, dunk3]
    },
    {
        categorie: 'Shoes',
        id: 2,
        brandName: 'Adidas',
        model: 'Ozweego',
        price: '300 €',
        onSale: true,
        sizes: [
            { size: 35, inBag: false },
            { size: 35.5, inBag: false },
            { size: 36, inBag: false },
            { size: 36.5, inBag: false },
            { size: 37, inBag: false },
            { size: 37.5, inBag: false },
            { size: 38, inBag: false },
            { size: 41, inBag: false },
            { size: 42, inBag: false },
            { size: 42.5, inBag: false },
            { size: 43, inBag: false },
        ],
        liked: false,
        img: ozweego1,
        imgHover: ozweego2,
        sliderPics: [ozweego1, ozweego2, ozweego3]
    },
    {
        categorie: 'Shoes',
        id: 3,
        brandName: 'Adidas',
        model: 'Yeezy boost 380',
        price: '800 €',
        onSale: false,
        sizes: [
            { size: 35, inBag: false },
            { size: 37, inBag: false },
            { size: 37.5, inBag: false },
            { size: 38, inBag: false },
            { size: 39, inBag: false },
            { size: 42, inBag: false },
            { size: 44, inBag: false },
            { size: 46, inBag: false },
        ],
        liked: false,
        img: yzy380_1,
        imgHover: yzy380_2,
        sliderPics: [yzy380_1, yzy380_2]

    },
    {
        categorie: 'Shoes',
        id: 4,
        brandName: 'New Balance',
        model: '1906R',
        price: '900 €',
        onSale: true,
        sizes: [
            { size: 35, inBag: false },
            { size: 35.5, inBag: false },
            { size: 36, inBag: false },
            { size: 36.5, inBag: false },
            { size: 37, inBag: false },
            { size: 37.5, inBag: false },
            { size: 38, inBag: false },
            { size: 39, inBag: false },
            { size: 40, inBag: false },
            { size: 40.5, inBag: false },
            { size: 41, inBag: false },
            { size: 42, inBag: false },
            { size: 42.5, inBag: false },
            { size: 43, inBag: false },
            { size: 44, inBag: false },
        ],
        liked: false,
        img: nb1906_1,
        imgHover: nb1906_2,
        sliderPics: [nb1906_4, nb1906_5, nb1906_1, nb1906_2, nb1906_3]

    },
    {
        categorie: 'Shoes',
        id: 5,
        brandName: 'Puma',
        model: 'Slipstream Hi',
        price: '500 €',
        onSale: false,
        sizes: [
            { size: 35, inBag: false },
            { size: 35.5, inBag: false },
            { size: 36, inBag: false },
            { size: 40, inBag: false },
            { size: 40.5, inBag: false },
            { size: 41, inBag: false },
            { size: 42, inBag: false },
            { size: 43, inBag: false },
            { size: 43.5, inBag: false },
            { size: 45, inBag: false },
            { size: 46, inBag: false },
        ],
        liked: false,
        img: slipstream1,
        imgHover: slipstream2,
        sliderPics: [slipstream1, slipstream2, slipstream3]

    },

    {
        categorie: 'Shoes',
        id: 6,
        brandName: 'Puma',
        model: 'RS-X',
        price: '600 €',
        onSale: false,
        sizes: [
            { size: 35, inBag: false },
            { size: 35.5, inBag: false },
            { size: 36, inBag: false },
            { size: 36.5, inBag: false },
            { size: 37, inBag: false },
            { size: 37.5, inBag: false },
            { size: 38, inBag: false },
            { size: 39, inBag: false },
            { size: 40, inBag: false },
            { size: 40.5, inBag: false },
            { size: 41, inBag: false },
            { size: 42, inBag: false },
        ],
        liked: false,
        img: rsx1,
        imgHover: rsx2,
        sliderPics: [rsx1, rsx2, rsx3]

    },
    {
        categorie: 'Shoes',
        id: 7,
        brandName: 'Reebook',
        model: 'Classic',
        price: '430 €',
        onSale: true,
        sizes: [
            { size: 35, inBag: false },
            { size: 35.5, inBag: false },
            { size: 36, inBag: false },
            { size: 36.5, inBag: false },
            { size: 37, inBag: false },
            { size: 37.5, inBag: false },
            { size: 38, inBag: false },
            { size: 39, inBag: false },
            { size: 40, inBag: false },
            { size: 40.5, inBag: false },
            { size: 41, inBag: false },
            { size: 42, inBag: false },
        ],
        liked: false,
        img: classic1,
        imgHover: classic2,
        sliderPics: [classic1, classic2, classic3]

    },
    {
        categorie: 'Shoes',
        id: 8,
        brandName: 'New Balance',
        model: '550',
        price: '750 €',
        onSale: false,
        sizes: [
            { size: 35, inBag: false },
            { size: 35.5, inBag: false },
            { size: 36, inBag: false },
            { size: 36.5, inBag: false },
            { size: 37, inBag: false },
            { size: 37.5, inBag: false },
            { size: 38, inBag: false },
            { size: 39, inBag: false },
            { size: 40, inBag: false },
            { size: 40.5, inBag: false },
            { size: 41, inBag: false },
            { size: 42, inBag: false },
        ],
        liked: false,
        img: nb550_1,
        imgHover: nb550_2,
        sliderPics: [nb550_1, nb550_2, nb550_3]

    },
    {
        categorie: 'Shoes',
        id: 9,
        brandName: 'Puma',
        model: 'Teveris Nitro',
        price: '600 €',
        onSale: false,
        sizes: [
            { size: 35, inBag: false },
            { size: 35.5, inBag: false },
            { size: 36, inBag: false },
            { size: 36.5, inBag: false },
            { size: 37, inBag: false },
            { size: 37.5, inBag: false },
            { size: 38, inBag: false },
            { size: 39, inBag: false },
            { size: 40, inBag: false },
            { size: 40.5, inBag: false },
            { size: 41, inBag: false },
            { size: 42, inBag: false },
        ],
        liked: false,
        img: nitro1,
        imgHover: nitro2,
        sliderPics: [nitro1, nitro2, nitro3, nitro4, nitro5]

    },
    {
        categorie: 'Shoes',
        id: 10,
        brandName: 'Nike',
        model: 'Blazer low',
        price: '600 €',
        onSale: true,
        sizes: [
            { size: 35, inBag: false },
            { size: 35.5, inBag: false },
            { size: 36, inBag: false },
            { size: 36.5, inBag: false },
            { size: 37, inBag: false },
            { size: 37.5, inBag: false },
            { size: 38, inBag: false },
            { size: 41, inBag: false },
            { size: 42, inBag: false },
            { size: 42.5, inBag: false },
            { size: 43, inBag: false },
        ],
        liked: false,
        img: blazer1,
        imgHover: blazer2,
        sliderPics: [blazer1, blazer2, blazer3, blazer4, blazer5]
    },
    {
        categorie: 'Shoes',
        id: 11,
        brandName: 'Puma',
        model: 'Cali dream',
        price: '800 €',
        onSale: false,
        sizes: [
            { size: 35, inBag: false },
            { size: 35.5, inBag: false },
            { size: 36, inBag: false },
            { size: 36.5, inBag: false },
            { size: 37, inBag: false },
            { size: 37.5, inBag: false },
            { size: 38, inBag: false },
            { size: 39, inBag: false },
        ],
        liked: false,
        img: cali1,
        imgHover: cali2,
        sliderPics: [cali1, cali2, cali3, cali4, cali5]

    },
    {
        categorie: 'Clothes',
        id: 12,
        brandName: 'Napapijri',
        model: 'B-Mataje',
        price: '100 €',
        onSale: true,
        sizes: [
            { size: 'S', inBag: false },
            { size: 'M', inBag: false },
            { size: 'L', inBag: false },
            { size: 'XL', inBag: false },
        ],
        liked: false,
        img: napapijri1,
        imgHover: napapijri2,
        sliderPics: [napapijri1, napapijri2, napapijri3, napapijri4, napapijri5]
    },
    {
        categorie: 'Clothes',
        id: 13,
        brandName: 'The North Face',
        model: 'Rmst Nuptse Jacket',
        price: '500 €',
        onSale: false,
        sizes: [
            { size: 'XS', inBag: false },
            { size: 'S', inBag: false },
            { size: 'M', inBag: false },
            { size: 'L', inBag: false },
        ],
        liked: false,
        img: tnf1,
        imgHover: tnf2,
        sliderPics: [tnf1, tnf2, tnf3, tnf4, tnf5]
    },
    {
        categorie: 'Clothes',
        id: 14,
        brandName: 'Adidas',
        model: 'Heavyweight Shmoofoil Pocket',
        price: '50 €',
        onSale: false,
        sizes: [
            { size: 'XS', inBag: false },
            { size: 'S', inBag: false },
            { size: 'L', inBag: false },
            { size: 'XL', inBag: false },
        ],
        liked: false,
        img: heavyweight1,
        imgHover: heavyweight2,
        sliderPics: [heavyweight1, heavyweight2, heavyweight3, heavyweight4, heavyweight5]
    },
    {
        categorie: 'Clothes',
        id: 15,
        brandName: 'Adidas',
        model: 'Football Photo',
        price: '50 €',
        onSale: true,
        sizes: [
            { size: 'XS', inBag: false },
            { size: 'S', inBag: false },
            { size: 'M', inBag: false },
            { size: 'XL', inBag: false },
        ],
        liked: false,
        img: football1,
        imgHover: football2,
        sliderPics: [football1, football2, football3, football4, football5]
    },
    {
        categorie: 'Accessories',
        id: 16,
        brandName: 'Vans',
        model: 'Old Skool Boxed Backpac',
        price: '30 €',
        onSale: true,
        sizes: [
            { size: 'One Size', inBag: false },
        ],
        liked: false,
        img: vansBag1,
        imgHover: vansBag2,
        sliderPics: [vansBag1, vansBag2, vansBag3, vansBag4, vansBag5]
    },
]

let chosenSizeState: any = null

const productsSlice = createSlice({
    name: 'products',
    initialState: {
        products: productsState,
        chosenSize: chosenSizeState
    },
    reducers: {
        toggleLike(state, action) {
            console.log(action.payload)
            const likedProduct = state.products.find(product => product.id === action.payload.id)
            if (typeof likedProduct !== 'undefined') {
                likedProduct.liked = !likedProduct.liked
            }
            // console.log(current(state))
        },
        toggleCart(state, action) {
            // console.log(action.payload)
            const product = state.products.find(p => p.id === action.payload.product.id)
            if (typeof product !== 'undefined') {
                product.sizes.map(size =>
                    size.size === action.payload.size.size
                        ? size.inBag = !size.inBag
                        : size.inBag = size.inBag
                )
            }
        },
        setChosenSize(state, action) {
            state.chosenSize = action.payload
        }
    }
})

export const { toggleLike, toggleCart, setChosenSize } = productsSlice.actions
export default productsSlice.reducer