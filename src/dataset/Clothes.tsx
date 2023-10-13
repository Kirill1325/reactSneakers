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

import { IProduct } from '../types/types'

const clothes: IProduct[] = [
    {
        categorie: 'Clothes',
        id: 13,
        brandName: 'Napapijri',
        model: 'B-Mataje',
        price: '100 €',
        onSale: true,
        sizes: [
            {size: 'S', inBag: false},
            {size: 'M', inBag: false},
            {size: 'L', inBag: false},
            {size: 'XL', inBag: false},
        ],
        liked: false,
        img: napapijri1,
        imgHover: napapijri2,
        sliderPics: [napapijri1, napapijri2, napapijri3, napapijri4, napapijri5]
    },
    {
        categorie: 'Clothes',
        id: 14,
        brandName: 'The North Face',
        model: 'Rmst Nuptse Jacket',
        price: '500 €',
        onSale: false,
        sizes: [
            {size: 'XS', inBag: false},
            {size: 'S', inBag: false},
            {size: 'M', inBag: false},
            {size: 'L', inBag: false},
        ],
        liked: false,
        img: tnf1,
        imgHover: tnf2,
        sliderPics: [tnf1, tnf2, tnf3, tnf4, tnf5]
    },
    {
        categorie: 'Clothes',
        id: 15,
        brandName: 'Adidas',
        model: 'Heavyweight Shmoofoil Pocket',
        price: '50 €',
        onSale: false,
        sizes: [
            {size: 'XS', inBag: false},
            {size: 'S', inBag: false},
            {size: 'L', inBag: false},
            {size: 'XL', inBag: false},
        ],
        liked: false,
        img: heavyweight1,
        imgHover: heavyweight2,
        sliderPics: [heavyweight1, heavyweight2, heavyweight3, heavyweight4, heavyweight5]
    },
    {
        categorie: 'Clothes',
        id: 16,
        brandName: 'Adidas',
        model: 'Football Photo',
        price: '50 €',
        onSale: true,
        sizes: [
            {size: 'XS', inBag: false},
            {size: 'S', inBag: false},
            {size: 'M', inBag: false},
            {size: 'XL', inBag: false},
        ],
        liked: false,
        img: football1,
        imgHover: football2,
        sliderPics: [football1, football2, football3, football4, football5]
    },
]

export default clothes