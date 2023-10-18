import React from 'react'
import '../styles/App.css';
import img1 from '../imgs/main3.png'
import img2 from '../imgs/main4.png'
import img3 from '../imgs/main5.png'
import news1 from '../imgs/news/new1.png'
import news2 from '../imgs/news/new2.png'
import news3 from '../imgs/news/new3.png'
import news4 from '../imgs/news/new4.png'
import bunch from '../imgs/bunchOfShoes.png'
import clothes from '../imgs/clothes.png';
import { Link, useNavigate } from 'react-router-dom';
import News from '../dataset/News'

function Home() {

  const navigate = useNavigate()

  return (

    <div className='home'>
      <img src={img2} alt='img' className='homeImg'></img>
      <img src={img1} alt='img' className='homeImg'></img>
      <img src={img3} alt='img' className='homeImg'></img>
      <div className='styleFeed'>
        <Link to='/News' className='homeLink'>The style feed</Link>
        <div className='mainNews'>
          {News.map(n =>
            <div key={n.id} className='imgWrappper' onClick={() => navigate(`/News/${n.id}`)}>
              <img src={n.previewImg} alt='news' className='new'></img>
            </div>
          )}
        </div>
      </div>
    </div>


  )

}

export default Home;