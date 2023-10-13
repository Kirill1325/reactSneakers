import React from 'react';
import '../../styles/App.css';

interface MyHoverProps {
  name: string,
  values: string[]
}

function MyHover({name, values}: MyHoverProps) {
  return (
    <div className='myHover'>
        <p className='myHoverCategorieName'>{name}</p>
        <ul className='myHoverContent'>
            {values.map((value) => (
                <li key={value}>{value}</li>
            ))}
        </ul>
    </div>
  )
}

export default MyHover