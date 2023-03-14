import React from 'react'
import './orders.scss'
import message from '../../img/message.png'
import {Link} from 'react-router-dom'
const Orders = () => {
  const currentUser={
    id:1,
    username:"John Doe",
    isSeller:true
  }
  return (
    <div className='orders'>
      <div className="container">
        <div className="title">
          <h1> Mes Commandes</h1>
        </div>
        <table>
  <thead>
    <tr>
      <th>Titre</th>
      <th>Image</th>
      <th>Prix</th>
      <th>{currentUser?.isSeller ? "Achteur": "Vendeur"}</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <img  className='delete' src="https://www.lepetitvapoteur.com/34123-large_default/kit-aegis-legend-2-geek-vape.jpg" />
      </td>
      <td>commande 1</td>
      <td>45 TND</td>
      <td>123</td>
      <td>
        <img className='img' src={message} alt="" />
      </td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <td>
        <img  className='delete' src="https://www.lepetitvapoteur.com/34123-large_default/kit-aegis-legend-2-geek-vape.jpg" />
      </td>
      <td>commande 1</td>
      <td>45 TND</td>
      <td>123</td>
      <td>
        <img className='img' src={message} alt="" />
      </td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <td>
        <img  className='delete' src="https://www.lepetitvapoteur.com/34123-large_default/kit-aegis-legend-2-geek-vape.jpg" />
      </td>
      <td>commande 1</td>
      <td>45 TND</td>
      <td>123</td>
      <td>
        <img className='img' src={message} alt="" />
      </td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <td>
        <img  className='delete' src="https://www.lepetitvapoteur.com/34123-large_default/kit-aegis-legend-2-geek-vape.jpg" />
      </td>
      <td>commande 1</td>
      <td>45 TND</td>
      <td>123</td>
      <td>
        <img className='img' src={message} alt="" />
      </td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <td>
        <img  className='delete' src="https://www.lepetitvapoteur.com/34123-large_default/kit-aegis-legend-2-geek-vape.jpg" />
      </td>
      <td>commande 1</td>
      <td>45 TND</td>
      <td>123</td>
      <td>
        <img className='img' src={message} alt="" />
      </td>
    </tr>
  </tbody>
</table>

      </div>
    </div>
  )
}

export default Orders