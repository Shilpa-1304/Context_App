//Using context api

import React from 'react'
import { FirstName ,LastName} from '../App'
function C3() {
  return (<><div>Hello World from c3</div>
    <FirstName.Consumer>{
      (fname)=>{
        return (
          <LastName.Consumer>
            {
              (lname)=>{
                return (<h1>Hey from {fname}  {lname} from element C3</h1>)
              }
            }
          </LastName.Consumer>
      )
       }
    }</FirstName.Consumer></>
  )
}

export default C3

