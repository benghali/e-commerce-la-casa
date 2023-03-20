
import React from 'react'
import './catCard.scss'
import {Link} from 'react-router-dom'

const CatCard = ({card}) => {
  return (
    <Link  className="link" to="/gigs?cat=design">
    <div className='catCard'>
        <span className='title'>{card.title}</span>
        <img src={card.img}/>
        {/* <span className='desc'>{card.desc}</span> */}
    </div>
    </Link>
  )
}

export default CatCard