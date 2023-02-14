import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import Converttotemp from './Converttotemp'

function Celcius() {
   const a = useContext(Converttotemp)

  const[values ,setvalues] =useState('')
   function convertf(){

        let  F =  a*9/5+32

        console.log(F)
   }


   function valuechange(e){
          setvalues( e.target.value)
   
   }

  return (
<>
    {/* <Converttotemp.Consumer  value={values}>
                       
    </Converttotemp.Consumer> */}
    <div>
      <input type="number" placeholder='Celcius'  value={values} onChange={valuechange}></input>
      <button onClick={convertf}>Convert to farehenite</button>
    </div>
    </>
  )
}

export default Celcius