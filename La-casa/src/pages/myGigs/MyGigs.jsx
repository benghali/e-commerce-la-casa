import React from 'react'
import './myGigs.scss'
import deleted from '../../img/delete.png'
import {Link} from 'react-router-dom'
const MyGigs = () => {
  return (
    <div className='myGigs'>
      <div className="container">
        <div className="title">
          <h1>Produit</h1>
          <Link to="/add"> 
          <button>Ajouter Nouveau Produit</button> 
          </Link>
        </div>
        <table>
  <thead>
    <tr>
      <th>Titre</th>
      <th>Image</th>
      <th>Prix</th>
      <th>Ventes</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <img  className='delete' src="https://www.lepetitvapoteur.com/34123-large_default/kit-aegis-legend-2-geek-vape.jpg" />
      </td>
      <td>produit 1</td>
      <td>45 TND</td>
      <td>123</td>
      <td>
        <img className='img' src={deleted} alt="" />
      </td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <td>
        <img  className='delete' src="https://www.lepetitvapoteur.com/34123-large_default/kit-aegis-legend-2-geek-vape.jpg" />
      </td>
      <td>produit 1</td>
      <td>45 TND</td>
      <td>123</td>
      <td>
        <img className='img' src={deleted} alt="" />
      </td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <td>
        <img  className='delete' src="https://www.lepetitvapoteur.com/34123-large_default/kit-aegis-legend-2-geek-vape.jpg" />
      </td>
      <td>produit 1</td>
      <td>45 TND</td>
      <td>123</td>
      <td>
        <img className='img' src={deleted} alt="" />
      </td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <td>
        <img  className='delete' src="https://www.lepetitvapoteur.com/34123-large_default/kit-aegis-legend-2-geek-vape.jpg" />
      </td>
      <td>produit 1</td>
      <td>45 TND</td>
      <td>123</td>
      <td>
        <img className='img' src={deleted} alt="" />
      </td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <td>
        <img  className='delete' src="https://www.lepetitvapoteur.com/34123-large_default/kit-aegis-legend-2-geek-vape.jpg" />
      </td>
      <td>produit 1</td>
      <td>45 TND</td>
      <td>123</td>
      <td>
        <img className='img' src={deleted} alt="" />
      </td>
    </tr>
  </tbody>
</table>

      </div>
    </div>
  )
}

export default MyGigs