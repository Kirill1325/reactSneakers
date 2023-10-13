import React from 'react'
import news1 from '../imgs/news/new1.png'
import news2 from '../imgs/news/new2.png'
import news3 from '../imgs/news/new3.png'
import news4 from '../imgs/news/new4.png'

function News() {
  return (
    <div className='news' >
        <h1 >News</h1>
        <p>September 9th, 2022</p>
        <img src={news1} alt='news'></img>
        <p>October 24th, 2022</p>
        <img src={news2} alt='news'></img>
        <p>January 13th, 2023</p>
        <img src={news3} alt='news'></img>
        <p>Match 13, 2023</p>
        <img src={news4} alt='news'></img>
    </div>
  )
}

export default News