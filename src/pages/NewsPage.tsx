import React from 'react'
import { useParams } from 'react-router-dom'
import News from '../dataset/News'


function NewsPage() {

    const param = useParams()

    const currentNew = News.filter(n => n.id === Number(param.id))[0]

    return (
        <div className='NewsContainer'>
            <h3>{currentNew.header}</h3>
            <h1>{currentNew.header2}</h1>
            <p style={{color: 'rgb(176, 176, 176)'}}>By {currentNew.author}, {currentNew.date}</p>
            <p>{currentNew.topic}</p>

            <div className='NewsContent'>
                {currentNew.paragraphs.map(p =>
                    <div className='NewsContentInner' key={p.imgDescription}>
                        <img src={p.img} alt='content'></img>
                        <b>{p.imgDescription}</b>
                        <p>{p.content}</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default NewsPage