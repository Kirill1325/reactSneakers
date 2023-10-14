import React from 'react'
import '../styles/App.css';
import img1 from '../imgs/main3.png'
import img2 from '../imgs/main4.png'
import img3 from '../imgs/main5.png'
import news1 from '../imgs/news/new1.png'
import news2 from '../imgs/news/new2.png'
import news3 from '../imgs/news/new3.png'
import news4 from '../imgs/news/new4.png'
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <img src={img2} alt='img' className='homeImg'></img>
      <img src={img1} alt='img' className='homeImg'></img>
      <img src={img3} alt='img' className='homeImg'></img>
      <Link to='/News' className='homeLink'>The style cdfeed</Link>
      <div className='mainNews'>
        <img src={news1} alt='news' className='new'></img>
        <img src={news2} alt='news' className='new'></img>
        <img src={news3} alt='news' className='new'></img>
        <img src={news4} alt='news' className='new'></img>
      </div>
    </div>
  )
}

export default Home