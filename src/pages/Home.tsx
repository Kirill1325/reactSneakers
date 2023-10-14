import React from 'react'
import '../styles/App.css';
import img1 from '../imgs/main3.png'
import img2 from '../imgs/main4.png'
import img3 from '../imgs/main5.png'
import news1 from '../imgs/news/new1.png'
import news2 from '../imgs/news/new2.png'
import news3 from '../imgs/news/new3.png'
import news4 from '../imgs/news/new4.png'
// import bunch from '../imgs/'
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className='home'>
      <div className='homeTop'>
        <h1>Step into Style, Step into Sneaker Bliss!</h1>
        <div className='ShopNow'>
          <Link to='/MansShoes'>Shop Now</Link>
        </div>
      </div>
      <img src={img2} alt='img' className='homeImg'></img>
      <img src={img1} alt='img' className='homeImg'></img>
      <img src={img3} alt='img' className='homeImg'></img>

      <div className='mainGrid'>
        <div className='mainGridShoes'>
          <img></img>
          <p>Shoes</p>
          <Link to='/MansShoes'></Link>
        </div>
        <div className='mainGridClothes'></div>
        <div className='mainGridAccesories'></div>
      </div>

      <div className='styleFeed'>
        <Link to='/News' className='homeLink'>The style feed</Link>
        <div className='mainNews'>
          <div className='imgWrappper'>
            <img src={news1} alt='news' className='new'></img>
          </div>
          <div className='imgWrappper'>
            <img src={news2} alt='news' className='new'></img>
          </div>
          <div className='imgWrappper'>
            <img src={news3} alt='news' className='new'></img>
          </div>
          <div className='imgWrappper'>
            <img src={news4} alt='news' className='new'></img>
          </div>
         
        </div>
      </div>
    </div>
  )
}

export default Home