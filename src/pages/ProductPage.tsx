import React, { useState, useEffect, useRef } from 'react'
import '../styles/App.css';
import { useParams } from 'react-router-dom'
import mansShoes from '../dataset/Shoes'
import Clothes from '../dataset/Clothes';
import Accesories from '../dataset/Accesories';
import { IProduct, ISize } from '../types/types';
import ShoePageSlider from '../components/UI/ShoePageSlider';
import MobileShoePageSlider from '../components/UI/MobileShoePageSlider';
import SizeGuide from '../components/SizeGuide';

interface ProductPageProps {
    setShoes: React.Dispatch<React.SetStateAction<IProduct[]>>,
    setAllClothes: React.Dispatch<React.SetStateAction<IProduct[]>>,
    setAllAccesories: React.Dispatch<React.SetStateAction<IProduct[]>>,
    isMobile: boolean,
    isSizeGuideShown: boolean,
    setIsSizeGuideShown: React.Dispatch<React.SetStateAction<boolean>>
}

let product: IProduct

function ProductPage({ setShoes, setAllClothes, setAllAccesories, isMobile, isSizeGuideShown, setIsSizeGuideShown }: ProductPageProps) {

    const url = window.location.href

    const param = useParams()

    const allShoes = mansShoes.filter(shoe => shoe.id === Number(param.id))
    const allAccesories = Accesories.filter(shoe => shoe.id === Number(param.id))
    const allClothes = Clothes.filter(shoe => shoe.id === Number(param.id))

    if (url.includes('MansShoes')) {
        product = allShoes[0]
    } else if (url.includes('Clothes')) {
        product = allClothes[0]
    } else if (url.includes('Accesories')) {
        product = allAccesories[0]
    }

    const [chosenSize, setChosenSize] = useState<ISize>()

    useEffect(() => {
        if (product.sizes.length === 1) {
            setChosenSize(product.sizes[0])
        }
    }, [])

    const handleSizeChoice = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        const s = Number((e.target as HTMLButtonElement).value)
        setChosenSize(product.sizes.find(size => size.size == s)) 
    }

    const handleAddToBag = () => {
        setShoes((prevProducts: IProduct[]) => (
            prevProducts.map((shoe: IProduct) =>
                shoe.id === product.id
                    ? {
                        ...shoe, sizes: shoe.sizes.map(size =>
                            size.size === chosenSize?.size
                                ? { ...size, inBag: !size.inBag }
                                : size
                        )
                    }
                    : shoe
            )
        ))
        setAllClothes((prevProducts: IProduct[]) => (
            prevProducts.map((shoe: IProduct) =>
                shoe.id === product.id
                    ? {
                        ...shoe, sizes: shoe.sizes.map(size =>
                            size.size === chosenSize?.size
                                ? { ...size, inBag: !size.inBag }
                                : size
                        )
                    }
                    : shoe
            )
        ))
        setAllAccesories((prevProducts: IProduct[]) => (
            prevProducts.map((shoe: IProduct) =>
                shoe.id === product.id
                    ? {
                        ...shoe, sizes: shoe.sizes.map(size =>
                            size.size === chosenSize?.size
                                ? { ...size, inBag: !size.inBag }
                                : size
                        )
                    }
                    : shoe
            )
        ))
    }

    const handleSizeGuideClick = () => {
        setIsSizeGuideShown(prevShown => !prevShown)
    }

    useEffect(() => {
        document.body.classList.toggle("sizeGuideShown", isSizeGuideShown);
    }, [isSizeGuideShown])

    return (
        (isMobile
            ?
            <div className='mobileShoePage'>
                {isSizeGuideShown &&
                    <SizeGuide product={product} setIsSizeGuideShown={setIsSizeGuideShown} />
                }
                <h2 style={{ marginLeft: '10px' }}>{product.brandName} {product.model}</h2>
                <MobileShoePageSlider slides={product.sliderPics} />
                {product.onSale
                    ?
                    <div className='sizeGuide'>
                        <div className='salePriceP'>
                            <p className='oldPrice'>{product.price}</p>
                            <p className='newPrice'>{`${parseInt(product.price) * 0.9} €`}</p>
                        </div>
                        <p onClick={handleSizeGuideClick}>Size Guide</p>
                    </div>

                    :
                    <div className='sizeGuide'>
                        <b className='price'>{product.price}</b>
                        <p onClick={handleSizeGuideClick}>Size Guide</p>
                    </div>
                }
                <div className='mobileSizesContainer'>
                    <ul className={'sizes' + (isMobile ? ' mobile' : '')}>
                        {product.sizes.map(size => (
                            <li key={size.size}>
                                <button
                                    value={size.size}
                                    onClick={(e) => handleSizeChoice(e)}
                                >{size.size}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
                <button className='addToCartButton' onClick={handleAddToBag} >Add To Cart</button>
            </div>
            :
            <div className='shoePageProduct'>
                {isSizeGuideShown &&
                    <SizeGuide product={product} setIsSizeGuideShown={setIsSizeGuideShown} />
                }
                <ShoePageSlider slides={product.sliderPics} />
                <div className='shoePageProductContent'>
                    <h1 style={{ margin: '10px' }}>{product.brandName} {product.model}</h1>
                    {product.onSale
                        ?
                        <div className='salePriceP'>
                            <p className='oldPrice'>{product.price}</p>
                            <p className='newPrice'>{`${parseInt(product.price) * 0.9} €`}</p>
                        </div>
                        : <b className='price'>{product.price}</b>
                    }
                    <div className='sizeGuide'>
                        <h2 style={{ margin: '10px' }}>Sizes:</h2>
                        <p onClick={handleSizeGuideClick}>Size Guide</p>
                    </div>
                    <ul className='sizes'>
                        {product.sizes.map(size => (
                            <li key={size.size}>
                                <button
                                    value={size.size}
                                    onClick={(e) => handleSizeChoice(e)}
                                >{size.size}
                                </button>
                            </li>
                        ))}
                    </ul>
                    <button className='addToCartButton' onClick={handleAddToBag}>Add To Cart</button>
                </div>
            </div>
        )
    )
}

export default ProductPage

