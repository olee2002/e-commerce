import React, { useState }  from 'react'

import './HomePage.scss'

const list = [
   { title: 'HATS', subtitle: 'SHOP NOW'},
   { title: 'JACKETS', subtitle: 'SHOP NOW'},
   { title: 'SHOES', subtitle: 'SHOP NOW'},
   { title: 'WOMENS', subtitle: 'SHOP NOW'},
   { title: 'MENS', subtitle: 'SHOP NOW'},
] 

export default function HomePage() {

   const [ cards, setCards ] = useState(list);

   return (
      <div className='homepage'>
        <h1>Welcome to my Homepage</h1>
         <div className='directory-menu'>
             {cards.map((card)=>
             <div className='menu-item'>
                <div className='content'>
               <div className='title'>{card.title}</div>
               <div className='subtitle'>{card.subtitle}</div>
               </div>
         </div>)}
         </div>
      </div>
   )
}
