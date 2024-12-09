import React from 'react'
import "./user_card.css"

export default function UserCard({name="Noobie",image,desc}) {
  return (
    <div id="user-container">
      <p id="user-name" style={{ fontSize: "20px" }}>{name}</p>
      <img id='user-image' src={image}></img>
      <p id='user-desc'>{desc}</p>
    </div>
  )
}


