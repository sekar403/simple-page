import React from 'react'

import Timer from './Timer';



var setTime = 600;

function CountDown() {
    

  return (
    <div>  

    <div className="flex flex-row  items-center "> 
        <Timer setTime={setTime}/>   
    </div>

    </div>
  )
}
export default CountDown