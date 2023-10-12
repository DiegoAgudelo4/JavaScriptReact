import style from "./Boton.module.css";
import numeral from 'numeral';

const Boton = ({reintentar}) => {

    
    return (
        <>
        <button className={style.Boton} onClick={()=>reintentar()}>
            Fallaste- Reintentar
        </button>
        </>
            
    )
};
export default Boton;