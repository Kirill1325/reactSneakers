import React from 'react';
import '../../../styles/App.css'; import LikedProduct from './LikedProduct';
import { IProduct } from '../../../types/types';

interface likesHoverProps {
    name: string,
    values: IProduct[],
    likes: number,
    setShoes: React.Dispatch<React.SetStateAction<IProduct[]>>,
    setAllClothes: React.Dispatch<React.SetStateAction<IProduct[]>>,
    setAllAccesories: React.Dispatch<React.SetStateAction<IProduct[]>>,
    isMobile: boolean
}

function likesHover({ name, values, likes, setShoes, setAllClothes, setAllAccesories, isMobile }: likesHoverProps) {

    return (
        <div className='likesHover'>
            {/* {isMobile
                ?
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
                : <p className='likesHoverCategorieName'>{name} {likes !== 0 ? likes : ''}</p>
            } */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="icon">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
            </svg>
            {values.length > 0 &&
                <div className='likesHoverContent'>
                    <div className='likesTop'>
                        <p>My Likes{likes !== 0 ? (likes > 1 ? `, ${likes} items` : `, ${likes} item`) : ''}</p>
                    </div>
                    <ul>
                        {values.map((product) => (
                            <div key={product.id}>
                                <hr></hr>
                                <li>
                                    <LikedProduct
                                        product={product}
                                        setShoes={setShoes}
                                        setAllClothes={setAllClothes}
                                        setAllAccesories={setAllAccesories}
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

export default likesHover