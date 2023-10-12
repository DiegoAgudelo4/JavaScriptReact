import { useEffect, useState } from 'react';
import uuid4 from 'uuid4';
import Boton from './Boton';
import style from './Pregunta.module.css'

const Pregunta = ({ pregunta, index, setIndex }) => {
  const [answered, setAnswered] = useState(false);
  const [seleccionada, setSeleccionada] = useState(null);
  const [failure, setFailure] = useState(false);

  const reintentar=()=>{
    setAnswered(false);
    setSeleccionada(null);
    setFailure(false);
  }
  const handleAnswerClick = (index, correct) => {
    console.log(index, correct);
    setAnswered(true)
    setFailure(correct)
    setSeleccionada(index)
  }
  useEffect(() => {
    if(failure=='true'){
      setIndex(index+1);
    }
  }, [answered])

  return (
    <>
      <div>
        {pregunta.question}
      </div>
      <div>
        <div className={style.opciones}>
          {pregunta.answers.map((answer, answerIndex) => (
            <button
              key={uuid4()  }
              value={answer.correct}
              onClick={(e) => handleAnswerClick(answerIndex,e.currentTarget.getAttribute("value"))}
              className={`${style.opcion} ${seleccionada === answerIndex && !pregunta.answers[answerIndex].correct ?  style.incorrect:''}`}
            >
              {answer.text}
            </button>
          ))}
        </div>
        <div className={style.boton}>
          {
            failure=='false' ? <Boton reintentar={reintentar}/>:''
          }
        </div>
      </div>
    </>
  )
};
export default Pregunta;