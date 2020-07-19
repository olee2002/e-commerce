import React from 'react'

import './MenuItem.scss'

export default function MenuItem({ card }) {
   return (
      <div className='content'>
      <div className='title'>{card.title}</div>
      <div className='subtitle'>{card.subtitle}</div>
      </div>
   )
}
