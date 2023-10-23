import React, { useEffect } from 'react'
import '../styles/App.css';
import { IProduct, ISize } from '../types/types'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toggleCart } from '../store/productsSlice';

interface ProductItemInBagProps {
    product: IProduct,
    size: ISize,
    setOrderPrice: React.Dispatch<React.SetStateAction<number>>,
}

function ProductItemInBag({ product, size, setOrderPrice }: ProductItemInBagProps) {

    const dispatch = useDispatch()

    const deleteFromBag = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.stopPropagation()
        dispatch(toggleCart({ product: product, size: size }))
        setOrderPrice(prevPrice => product.onSale ? prevPrice - parseInt(product.price) * 0.9 : prevPrice - parseInt(product.price))
    }

    useEffect(() => {
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

        <div className='bagProductOutside'>
            <div className='bagProduct' onClick={handleProductClick} >
                <div className='bagProductContent'>
                    <img src={product.img} alt='shoe' />
                    <div className='productDescription'>
                        <p>{`${product.brandName} ${product.model}`}</p>
                        <p>ID: {product.id}</p>
                        <p>Size: {size.size}</p>
                        <button className='desktopDeleteFromCart' onClick={(e) => deleteFromBag(e)} >Delete</button>

                        <button className='mobileDeleteFromCart' onClick={(e) => deleteFromBag(e)} >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-7  ">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                            </svg>
                        </button>
                    </div>
                </div>
                {product.onSale
                    ?
                    <div className='salePriceP'>
                        <p className='oldPrice'>{product.price}</p>
                        <p className='newPrice'>{`${parseInt(product.price) * 0.9} €`}</p>
                    </div>
                    : <p className='price'>{product.price}</p>
                }
            </div>
            <hr></hr>
        </div>
    )
}

export default ProductItemInBag