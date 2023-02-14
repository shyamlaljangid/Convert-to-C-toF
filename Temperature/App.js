import React ,{useState}from 'react'
import Celcius from './Celcius'
import Farehenite from './Farehenite'
import Converttotemp from './Converttotemp'

function App() {


  const [valuef, setvalue] = useState('')
  function convertc() {

    let C = (valuef - 32) * 5 / 9

    console.log(C)
  }


  function valuechange(e) {
    setvalue(e.target.value)

  }
  return (
    <div>




      <Converttotemp.Provider value={{valuef,setvalue ,convertc ,valuechange ,C}}>
        <Celcius />
        <Farehenite />
      </Converttotemp.Provider>
    </div>
  )
}

export default App