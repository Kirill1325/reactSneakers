import { IProduct } from "../types/types";
import vansBag1 from '../imgs/vansBag1.png'
import vansBag2 from '../imgs/vansBag2.png'
import vansBag3 from '../imgs/vansBag3.png'
import vansBag4 from '../imgs/vansBag4.png'
import vansBag5 from '../imgs/vansBag5.png'

const Accesories: IProduct[] = [
    {
        categorie: 'Accesories',
        id: 17,
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

export default Accesories