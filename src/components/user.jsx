import React from 'react'


export default function User(props) {
  return (
    <div className='user'>
        <img src={props.image} alt="profile picture" />
        <div>
            <div className='nom complet'>{props.nom}</div>
            <button onClick={props.details}>Detail User</button>
            <button onClick={props.listeTaches}>Liste des taches</button>
        </div>
    </div>
  )
}