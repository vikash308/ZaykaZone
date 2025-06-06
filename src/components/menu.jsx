import React from 'react'


const Menu = ({menudata}) => {
  return (
    menudata.map((curent) =>{
        return(
<div key={curent.id}>
        <div  className="main">
        <img src={curent.image} alt={curent.name} />
        <h3>{curent.name} </h3>
        <p className='category'>({curent.category})</p>
        <p>{curent.discription}</p>
        <div id="btn">
          <p>&#x20B9;{curent.price}</p>
        <button>Buy Now</button>
        </div>
    </div>
    </div>
        )
    })
    
  )
}

export default Menu