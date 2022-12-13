import React,{useContext} from 'react'
import {Data} from '../App.js';
function C4() {
const data=useContext(Data);
  return (
    <div>
        Fruit:{data.fruit},
        Color: {data.color} ,
        Veg: {data.veg} ,
        Place : {data.place}
        </div>
  )
}

export default C4