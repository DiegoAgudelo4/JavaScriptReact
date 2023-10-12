import { useEffect, useState } from 'react'
import Estados from './components/Estados';
import FormFinanzas from './components/FormFinanzas';
import CuentasList from './components/CuentasList';
import style from './App.module.css';

function App() {
  const [cuenta, setCuenta] = useState([]);
  const [saldoFinal, setsaldoFinal] = useState(0);
  const [saldoInicial, setsaldoInicial] = useState(0);
  const [edit,setEdit]=useState(null);

  const calcularSaldoFinal = cuenta.reduce((total, c) => {

    if (c.tipo == "Ingreso" && cuenta) {
      return parseFloat(total) + parseFloat(c.cantidad);
    } else {
      return parseFloat(total) - parseFloat(c.cantidad);
    }
  }, saldoInicial)

  useEffect(() => {
    setsaldoFinal(calcularSaldoFinal)
  }, [cuenta, saldoInicial])


  return (
    <>
      <div className={style.body}>
        <div>
          <Estados
            saldoInicial={saldoInicial}
            setsaldoInicial={setsaldoInicial}
            saldoFinal={saldoFinal}
            setsaldoFinal={setsaldoFinal}
          />
        </div>
        <div className={style.content}>
          <div className={style.formFinanzas}>
            <FormFinanzas
              cuenta={cuenta}
              setCuenta={setCuenta}
              edit={edit}
              setEdit={setEdit}
              
            />
          </div>
          <div className={style.cuentasList}>
            <CuentasList
              cuenta={cuenta}
              setCuenta={setCuenta}
              edit={edit}
              setEdit={setEdit}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
