import VideoList from "./components/VideoList";
import { playListM,playListP } from "./data/data";
import style from"./App.module.css";
import FormControlado from "./components/FormControlado";
import LifeCicle from "./components/LifeCicle";
import { useState } from "react";

    //class es una palabra reservada de javascript, entonces se usa}
    //className
const App = () => {
  //para mostrar u ocultar un componente
  const [showLifeCicle, setLifeCicle]=useState(false);
  //operador ternario condicion ? sí : sino
  return (

    <div className={style.container}>
      <VideoList title="PROGRAMACION" playList={playListP} />
      <VideoList title="MUSIC" playList={playListM} />
      <FormControlado/>
      
      
      <button onClick={()=>setLifeCicle(!showLifeCicle)}>{showLifeCicle ?  "Ocultar": "Mostrar" }</button>
      {showLifeCicle && <LifeCicle/>}
    </div>
  );
};

export default App;