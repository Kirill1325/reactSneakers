import React, { useEffect } from 'react'
import MyInput from './UI/MyInput'
import LikesHover from './UI/LikesHover/LikesHover'
import { Link } from 'react-router-dom'
import { IProduct } from '../types/types'
import shoeCategorie from '../imgs/navShoesCategorie.png'
import clothes from '../imgs/navClothes.png'
import accesories from '../imgs/navAccesories.png'
import styleFeed from '../imgs/navStyleFeed.png'
import home from '../imgs/navHome.png'

interface NavbarProps {

    setIsNavbarShown: React.Dispatch<React.SetStateAction<boolean>>
}

function Navbar({ setIsNavbarShown }: NavbarProps) {

    // const url = window.location.href

    // useEffect(() => {
    //     console.log(url)
    // }, [url])

    // const CheckIfCompares = (link: string) => {
    //     return url.includes(link)
    // }

    return (
        <nav onClick={() => setIsNavbarShown(false)}>
            <div className='navContent' onClick={(e) => e.stopPropagation()}>

                <div className='navContentUpper'>
                    <div className='navTop'>
                        <h2>Sneaker Street</h2>
                        <button onClick={() => setIsNavbarShown(false)}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="icon">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <hr></hr>

                    <div className='navSections'>
                        <div className='navSection'>
                            <Link to='/' className='navSectionsLink' onClick={() => setIsNavbarShown(false)} >Home</Link>
                            <img src={home} alt='shoe'></img>
                        </div>
                        <div className='navSection'>
                            <Link to='/Clothes' className='navSectionsLink' onClick={() => setIsNavbarShown(false)} >Clothes</Link>
                            <img src={clothes} alt='shoe'></img>
                        </div>
                        <div className='navSection' >
                            <Link to='/MansShoes' className='navSectionsLink' onClick={() => setIsNavbarShown(false)} >Shoes</Link>
                            <img src={shoeCategorie} alt='shoe'></img>
                        </div>
                        <div className='navSection' >
                            <Link to='/Accesories' className='navSectionsLink' onClick={() => setIsNavbarShown(false)} >Accesories</Link>
                            <img src={accesories} alt='shoe'></img>
                        </div>
                      
                        <div className='navSection'>
                            <Link to='/News' className='navSectionsLink' onClick={() => setIsNavbarShown(false)} >The Style Feed</Link>
                            <img src={styleFeed} alt='shoe'></img>
                        </div>
                    </div>
                </div>

                <div className='navLocation'>
                    <div>
                        <div className='navLocationTop'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-1">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                            </svg>
                            <p>Shipping Country</p>
                        </div>
                        <div className='navLocationBottom'>
                            <div className='navLocationBottomContent'>
                                <p>France</p>
                                <div className='navDivider'></div>
                                <p>EUR €</p>
                            </div>
                            <b> CHANGE</b>
                        </div>
                    </div>

                </div>

            </div>
        </nav>
    )
}

export default Navbar