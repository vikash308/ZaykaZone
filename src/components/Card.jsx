import React from 'react';
import './Card.css';
import Menu from './menu';


function Card({menudata}) {

  return (
    <>
    <Menu menudata={menudata}/>
    </>
  )
}


export default Card