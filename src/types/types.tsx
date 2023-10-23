export type ISize = {
    size: number | string,
    inBag: boolean
}

export type IOption = {
    name: string | number,
    value: string
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

export type IParagraph = {
    img: string,
    content: string,
    imgDescription: string
}

export type INew = {
    id: number,
    header: string,
    header2: string,
    topic: string,
    author: string,
    date: string,
    paragraphs: IParagraph[],
    previewImg: string,
}