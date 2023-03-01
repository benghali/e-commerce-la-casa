
import React from 'react'
import './catCard.scss'

const CatCard = ({item}) => {
  return (
    <Link to="/gigs?cat=design">
    <div className='catCard'>
        <img src={item.img}/>
        <span className='desc'>{item.desc}</span>
        <span className='title'>{item.title}</span>
    </div>
    </Link>
  )
}

export default CatCard