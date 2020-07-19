import React, { useState }  from 'react'

import Directory from '../directory/Directory'
import './HomePage.scss' 

export default function HomePage() {

   return (
      <div className='homepage'>
        <h1>Welcome to my Homepage</h1>
         <Directory />
      </div>
   )
}
