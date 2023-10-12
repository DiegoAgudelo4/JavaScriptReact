import { useEffect, useState } from 'react'
import { data } from './data/data';
import Pregunta from './components/Pregunta';


function App() {
  const [index, setIndex]= useState(0);
  
  return (
    <>
     {
        <Pregunta
          key={data[index].id}
          pregunta={data[index]}
          index={index}
          setIndex={setIndex}
        />
     }
    </>
  )
}

export default App
