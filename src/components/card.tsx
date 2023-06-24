import React from 'react'
import './card.css'

type Props = {}

const Card = (props: Props) => {
  return (
    <div className="card style">
  <img src="https://lovelace-media.imgix.net/uploads/249/304fa5e0-0a8c-0132-706c-0add9426c766.png" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Anaconda</h5>
    <p className="card-text"></p>
  </div>
  <ul className="bg-success list-group list-group-flush">
    <li className="list-group-item">Nicki Minaj</li>
  </ul>
</div>
  )
}

export default Card;