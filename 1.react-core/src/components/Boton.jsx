
const Boton=({setCantidad, cantidad, titulo})=>{

    return <button onClick={()=>setCantidad(cantidad+1)}>
                {titulo} {cantidad}
            </button>
}
export default Boton;