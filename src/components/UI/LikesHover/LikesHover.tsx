import React from 'react';
import '../../../styles/App.css'; import LikedProduct from './LikedProduct';
import { useAppSelector } from '../../../hooks/redux';

function LikesHover() {

    const { products } = useAppSelector(state => state.productsReducer)
    const likedProducts = products.filter(product => product.liked)

    let classNameToggle = likedProducts.length > 0

    return (
        <div className='likesHover'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={classNameToggle ? "icon notEmpty" : 'icon'}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
            </svg>
            {likedProducts.length > 0 &&
                <div className='likesHoverContent'>
                    <div className='likesTop'>
                        <p>My Likes{likedProducts.length !== 0 ? (likedProducts.length > 1 ? `, ${likedProducts.length} items` : `, ${likedProducts.length} item`) : ''}</p>
                    </div>
                    <ul>
                        {likedProducts.map((product) => (
                            <div key={product.id}>
                                <hr></hr>
                                <li>
                                    <LikedProduct
                                        product={product}
                                    />
                                </li>
                            </div>
                        ))}

                    </ul>
                </div>
            }
        </div>
    )
}

export default LikesHover