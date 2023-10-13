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

import { IProduct } from '../types/types';


const mansShoes: IProduct[] = [
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
]

export default mansShoes

