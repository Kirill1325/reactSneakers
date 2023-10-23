import React, { useState, useEffect } from 'react'
import '../styles/App.css';
import { useParams } from 'react-router-dom'
import ShoePageSlider from '../components/UI/ShoePageSlider';
import MobileShoePageSlider from '../components/UI/MobileShoePageSlider';
import SizeGuide from '../components/SizeGuide';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../hooks/redux';
import { toggleCart } from '../store/productsSlice';
import { setChosenSize } from '../store/productsSlice';
import { toggleVisiblility } from '../store/sizeGuideSlice';

interface ProductPageProps {
    isMobile: boolean,
}

function ProductPage({ isMobile }: ProductPageProps) {

    const param = useParams()

    const dispatch = useDispatch()
    const { chosenSize } = useAppSelector(state => state.productsReducer)
    const { isSizeGuidevisible } = useAppSelector(state => state.sizeGuideReducer)
    const { products } = useAppSelector(state => state.productsReducer)
    const [product] = products.filter(p => p.id === Number(param.id))

    useEffect(() => {
        if (product.sizes.length === 1) {
            setChosenSize(product.sizes[0])
        }
        dispatch(setChosenSize(null))
    }, [])

    console.log(chosenSize)

    const handleSizeChoice = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        const s = (e.target as HTMLButtonElement).value
        dispatch(setChosenSize(product.sizes.find(size => size.size == s)))
    }

    const handleAddToBag = () => {
        dispatch(toggleCart({ product: product, size: chosenSize }))
        dispatch(setChosenSize(null))
    }


    const handleSizeGuideClick = () => {
        dispatch(toggleVisiblility())
    }

    useEffect(() => {
        document.body.classList.toggle("sizeGuideShown", isSizeGuidevisible);
    }, [isSizeGuidevisible])

    return (
        (isMobile
            ?
            <div className='mobileShoePage'>
                {isSizeGuidevisible &&
                    <SizeGuide product={product} />
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
                                    style={{
                                        borderColor: size.size === chosenSize?.size ? 'black' : '',
                                        // color: size.inBag && size.size === chosenSize?.size ? 'rgb(62, 142, 255)' : '',
                                        // backgroundColor: size.inBag && size.size === chosenSize?.size ? 'rgb(62, 142, 255)' : '',
                                    }}
                                    onClick={(e) => handleSizeChoice(e)}
                                >{size.size}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
                <button
                    className='addToCartButton'
                    style={{
                        backgroundColor: chosenSize?.inBag ? 'rgb(62, 142, 255)' : '',
                        border: chosenSize?.inBag ? '1px solid black' : '',
                        color: chosenSize?.inBag ? 'black' : '',
                    }}
                    onClick={handleAddToBag}
                >
                    {chosenSize?.inBag ? 'In A Cart' : 'Add To Cart'}
                </button>

            </div>
            :
            <div className='shoePageProduct'>
                {isSizeGuidevisible &&
                    <SizeGuide product={product} />
                }
                <div className='shoePageLeft'>
                    <ShoePageSlider slides={product.sliderPics} />
                    <div className='shoePageDescription'>
                        <h2>Description</h2>
                        <p>The {product.brandName} {product.model} is a classic and iconic sneaker. It is known for its distinct design and comfortable cushioning, making it a favorite among sneaker enthusiasts and athletes alike.<br /> The {product.brandName} {product.model} features a combination of synthetic and leather materials in its upper, providing durability and a stylish look. <br />Whether you're using them for casual everyday wear or engaging in sports activities, the {product.brandName} {product.model} offers a blend of style, comfort, and performance that has made it a beloved sneaker for generations. </p>
                    </div>
                </div>
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
                                    style={{
                                        borderColor: size.size === chosenSize?.size ? 'black' : '',
                                        // color: size.inBag && size.size === chosenSize?.size ? 'rgb(62, 142, 255)' : '',
                                        // backgroundColor: size.inBag && size.size === chosenSize?.size ? 'rgb(62, 142, 255)' : '',
                                    }}
                                    onClick={(e) => handleSizeChoice(e)}
                                >{size.size}
                                </button>
                            </li>
                        ))}
                    </ul>
                    <button
                        className='addToCartButton'
                        style={{
                            backgroundColor: chosenSize?.inBag ? 'rgb(62, 142, 255)' : '',
                            border: chosenSize?.inBag ? '1px solid black' : '',
                            color: chosenSize?.inBag ? 'black' : '',
                        }}
                        onClick={handleAddToBag}
                    >
                        {chosenSize?.inBag ? 'In A Cart' : 'Add To Cart'}
                    </button>
                </div>
            </div>
        )
    )
}

export default ProductPage