import React, { useState } from 'react'

import MenuItem from '../menu-items/MenuItem'
import './Directory.scss'


const list = [
   { title: 'HATS', subtitle: 'SHOP NOW'},
   { title: 'JACKETS', subtitle: 'SHOP NOW'},
   { title: 'SHOES', subtitle: 'SHOP NOW'},
   { title: 'WOMENS', subtitle: 'SHOP NOW'},
   { title: 'MENS', subtitle: 'SHOP NOW'},
]

export default function Directory() {

   const [ cards, setCards ] = useState(list);

   return (
      <div className='directory-menu'>
      {cards.map((card)=>
      <div className='menu-item'>
        <MenuItem  card={card}/>
  </div>)}
  </div>
   )
}
