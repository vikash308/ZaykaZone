import React from 'react'
import './Header.css'


const Header = ({ filter}) => {
  return (
    <div className='div'>
        <ul>
            <li onClick={()=>filter("breakfast")}>Breakfast</li>
            <li onClick={()=>filter("lunch")}>Lunch</li>
            <li onClick={()=>filter("snacks")}>Snacks</li>
            <li onClick={()=>filter("dinner")}>Dinner</li>
            <li onClick={()=> filter()}>All</li>
        </ul>
    </div>
  )
}

export default Header;