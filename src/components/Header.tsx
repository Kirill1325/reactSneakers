import React, { useEffect, useState } from 'react'
import '../styles/App.css';
import { Link } from 'react-router-dom';
import LikesHover from './UI/LikesHover/LikesHover';
import { IProduct } from '../types/types';
import MyInput from './UI/MyInput';
import { useAppSelector } from '../hooks/redux';
import { useDispatch } from 'react-redux';
import { toggleVisibility } from '../store/navbarSlice'


function Header() {

  const { products } = useAppSelector(state => state.productsReducer)
  const { isHeaderVisible } = useAppSelector(state => state.headerReducer)

  const productsInBag = products.filter(product =>
    product.sizes.some(size => size.inBag)
  )

  const dispatch = useDispatch()

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
    <header className={isHeaderVisible ? '' : 'hidden'} >

      <div className='headerFirst'>
        <svg onClick={() => dispatch(toggleVisibility())} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-3">
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
        <MyInput />
        <LikesHover />
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