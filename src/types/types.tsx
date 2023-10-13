export type ISize = {
    size: number | string ,
    inBag: boolean
}

export type IOption = {
    name: string | number,
    value: string
}

export type globalShoe = {
    categorie: string,
    shoes: IProduct[]
}

export type IProduct = {
    categorie: string,
    id: number,
    brandName: string,
    model: string,
    price: string,
    onSale: boolean,
    sizes: ISize[],
    liked: boolean,
    img: string,
    imgHover: string,
    sliderPics: string[]
}