import React from 'react'
import news1 from '../imgs/news/new1.png'
import news2 from '../imgs/news/new2.png'
import news3 from '../imgs/news/new3.png'
import news4 from '../imgs/news/new4.png'
import news from '../dataset/News'
import { useNavigate } from 'react-router-dom'

function News() {

  const navigate = useNavigate()

  return (
    <div className='newsWrapper'>
      <h1 >News</h1>
      <div className='news' >       
        {news.map(n =>
          <div className='nnn' key={n.id} onClick={() => navigate(`/News/${n.id}`)}>
            <p>{n.date}</p>
            <img src={n.previewImg} alt='img'></img>
          </div>
        )}
      </div>
    </div>
  )
}

export default News