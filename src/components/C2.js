//Using useContext Hook 

import React, { useContext } from 'react'
import C3 from './C3';
import {FirstName,LastName} from '../App.js'
function C2() {
  let fname=useContext(FirstName);
  let lname=useContext(LastName);
  return (
    <div><>Inside C2 and calling C3 . Saying hey to {fname}  {lname} </>
    <C3></C3>
    </div>
  )
}

export default C2