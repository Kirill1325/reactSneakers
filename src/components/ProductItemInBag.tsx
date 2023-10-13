import React, { useEffect } from 'react'
import '../styles/App.css';
import { IProduct } from '../types/types'
import { useNavigate } from 'react-router-dom';

interface ProductItemInBagProps {
    product: IProduct,
    size: number | string,
    setOrderPrice: React.Dispatch<React.SetStateAction<number>>,
    setShoes: React.Dispatch<React.SetStateAction<IProduct[]>>,
    setAllClothes: React.Dispatch<React.SetStateAction<IProduct[]>>,
    setAllAccesories: React.Dispatch<React.SetStateAction<IProduct[]>>,
    isMobile: boolean
}

function ProductItemInBag({ product, size, setOrderPrice, setShoes, setAllClothes, setAllAccesories, isMobile }: ProductItemInBagProps) {

    const deleteFromBag = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.stopPropagation()
        setShoes((prevProducts: IProduct[]) => (
            prevProducts.map((shoe: IProduct) =>
                shoe.id === product.id
                    ? {
                        ...shoe, sizes: shoe.sizes.map(s =>
                            s.size === size
                                ? { ...s, inBag: !s.inBag }
                                : s
                        )
                    }
                    : shoe
            )
        ))
        setAllClothes((prevProducts: IProduct[]) => (
            prevProducts.map((shoe: IProduct) =>
                shoe.id === product.id
                    ? {
                        ...shoe, sizes: shoe.sizes.map(s =>
                            s.size === size
                                ? { ...s, inBag: !s.inBag }
                                : s
                        )
                    }
                    : shoe
            )
        ))
        setAllAccesories((prevProducts: IProduct[]) => (
            prevProducts.map((shoe: IProduct) =>
                shoe.id === product.id
                    ? {
                        ...shoe, sizes: shoe.sizes.map(s =>
                            s.size === size
                                ? { ...s, inBag: !s.inBag }
                                : s
                        )
                    }
                    : shoe
            )
        ))
        setOrderPrice(prevPrice => product.onSale ? prevPrice - parseInt(product.price) * 0.9 : prevPrice - parseInt(product.price))
        // setOrderPrice(prevPrice => prevPrice - parseInt(product.price))
    }

    useEffect(() => {
        // setOrderPrice(prevPrice => prevPrice + parseInt(product.price))
        setOrderPrice(prevPrice => product.onSale ? prevPrice + parseInt(product.price) * 0.9 : prevPrice + parseInt(product.price))
    }, [])

    const navigate = useNavigate()

    const handleProductClick = () => {
        if (product.categorie === 'Shoes') {
            navigate(`/MansShoes/${product.id}`)
        } else if (product.categorie === 'Clothes') {
            navigate(`/Clothes/${product.id}`)
        } else if (product.categorie === 'Accesories') {
            navigate(`/Accesories/${product.id}`)
        }
    }

    return (
        <>
            <hr style={{ margin: '20px' }} />
            {isMobile
                ?
                <div className='mobileBagProduct' onClick={handleProductClick} >
                    <div className='mobileBagProductContent'>
                        <img src={product.img} alt='shoe' />
                        <div className='productDescription'>
                            <p>{`${product.brandName} ${product.model}`}</p>
                            <p>ID: {product.id}</p>
                            <p>Size: {size}</p>
                            {/* <b className='price'>{product.price}</b> */}
                            {product.onSale
                                ?
                                <div className='salePriceP'>
                                    <p className='oldPrice'>{product.price}</p>
                                    <p className='newPrice'>{`${parseInt(product.price) * 0.9} €`}</p>
                                </div>
                                : <b className='price'>{product.price}</b>
                            }
                        </div>
                    </div>
                    <button onClick={(e) => deleteFromBag(e)} >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-7  ">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                        </svg>
                    </button>
                </div>
                :
                <div className='bagProduct' onClick={handleProductClick} >
                    <div className='bagProductContent'>
                        <img src={product.img} alt='shoe' />
                        <div className='productDescription'>
                            <p>{`${product.brandName} ${product.model}`}</p>
                            <p>ID: {product.id}</p>
                            <p>Size: {size}</p>
                            <button onClick={(e) => deleteFromBag(e)} >Delete</button>
                        </div>
                    </div>
                    {/* <b className='price'>{product.price}</b> */}
                    {product.onSale
                        ?
                        <div className='salePriceP'>
                            <p className='oldPrice'>{product.price}</p>
                            <p className='newPrice'>{`${parseInt(product.price) * 0.9} €`}</p>
                        </div>
                        : <b className='price'>{product.price}</b>
                    }
                </div>
            }
        </>
    )
}

export default ProductItemInBag