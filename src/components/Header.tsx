import React, { useEffect, useState } from 'react'
import '../styles/App.css';
import { Link } from 'react-router-dom';
import MyHover from './UI/MyHover';
import LikesHover from './UI/LikesHover/LikesHover';
import { IProduct } from '../types/types';
import MyInput from './UI/MyInput';
import logo from '../imgs/logo2.png'

interface HeaderProps {
  shoes: IProduct[],
  setShoes: React.Dispatch<React.SetStateAction<IProduct[]>>,
  allClothes: IProduct[],
  setAllClothes: React.Dispatch<React.SetStateAction<IProduct[]>>,
  allAccesories: IProduct[],
  setAllAccesories: React.Dispatch<React.SetStateAction<IProduct[]>>,
  searchQuerry: string,
  setSearchQuerry: React.Dispatch<React.SetStateAction<string>>,
  isMobile: boolean,
  setIsNavbarShown: React.Dispatch<React.SetStateAction<boolean>>,
  setIsSearchWindowShown: React.Dispatch<React.SetStateAction<boolean>>,
  productsInBag: IProduct[],

}

function Header(
  { shoes,
    setShoes,
    allClothes,
    setAllClothes,
    allAccesories,
    setAllAccesories,
    searchQuerry,
    setSearchQuerry,
    isMobile,
    setIsNavbarShown,
    setIsSearchWindowShown,
    productsInBag
  }: HeaderProps) {

  const likedProducts = shoes.filter(product => product.liked).concat(allClothes.filter(product => product.liked)).concat(allAccesories.filter(product => product.liked))

  const [count, setCount] = useState(0)

  useEffect(() => {
    let counter = 0
    productsInBag.map(product => (
      product.sizes.map(size => (
        size.inBag
          ? counter++
          : counter += 0
      ))
    ))
    setCount(counter)
  }, [productsInBag])

  return (

    <header>

      <div className='headerFirst'>
        <svg onClick={() => setIsNavbarShown(true)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-3">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
        <Link to='/'>Sneaker Street</Link>
      </div>

      <div className='headerSecond'>
        <Link to='/Clothes' className='downHeaderP'>Clothes</Link>
        <Link to='/MansShoes' className='downHeaderP'>Shoes</Link>
        <Link to='/Accesories' className='downHeaderP'>Accesories</Link>
        <Link to='/News' className='headerLink'>News</Link>
      </div>

      <div className='headerThird'>
        <MyInput
          placeholder='search'
          value={searchQuerry}
          setState={setSearchQuerry}
          isMobile={isMobile}
          setIsSearchWindowShown={setIsSearchWindowShown}
        />
        <LikesHover
          name='likes'
          values={likedProducts}
          likes={likedProducts.length}
          setShoes={setShoes}
          setAllClothes={setAllClothes}
          setAllAccesories={setAllAccesories}
          isMobile={isMobile}
        />
        <div className='headerBag'>
          <Link to='/Bag'></Link>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="icon">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
          </svg>
          <p>({count})</p>
        </div>
      </div>

    </header>

  )
}

export default Header