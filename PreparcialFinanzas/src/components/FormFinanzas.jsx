import { useEffect, useState } from 'react';
import uuid4 from 'uuid4';
import style from './FormFinanzas.module.css';
import numeral from 'numeral';

const FormFinanzas = ({ cuenta, setCuenta, edit, setEdit, saldoFinal }) => {

  const formatearNumero = (numero) => {
    return numeral(numero).format('0,0.00');
  };

  const [values, setValues] = useState({
    tipo: "",
    nombre: "",
    cantidad: "",
  });


  const handlerSubmit = (e) => {
    e.preventDefault();//evita que sea enviado a otra pagina
    if (edit) {
      editCuenta(edit);
    } else {
      if(values.cantidad>saldoFinal && values.tipo=="Gasto"){
        console.log("Saldo insuficiente");  
        limpiarForm();
      }else{
        const newCuenta = {
          id: uuid4(),
          tipo: values.tipo
          , nombre: values.nombre
          , cantidad: values.cantidad
        }
        setCuenta([...cuenta, newCuenta]);
        limpiarForm();
      }
      
    };
  };
  const editCuenta = (edit) => {
    const newCuentas = cuenta.map(item => (
      item.id === edit.id ? //condicion
        { ...item, tipo: values.tipo, nombre: values.nombre, cantidad: values.cantidad } //verdadero
        : item //falso
    ));
    setCuenta(newCuentas);
    setEdit(null);
  };
  useEffect(() => {
    if (edit) {
      setValues({
        tipo: edit.tipo,
        nombre: edit.nombre,
        cantidad: edit.cantidad,
      })
    } else {
      limpiarForm();
    }
  }, [edit])
  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;
    const newValues = {
      ...values,
      [name]: value,
    };
    setValues(newValues);
  }
  const cancelar = () => {
    limpiarForm();
    setEdit(null);
  };
  const limpiarForm = () => {
    setValues({
      tipo: "",
      nombre: "",
      cantidad: "",
    });
  }
  return (
    <>
      <div className={style.title}>
        Registro
      </div>
      <div className={style.containForm}>
        <form onSubmit={handlerSubmit} className={style.form}>
          <table className={style.formContent}>
            <tr>
              <td>
                <label for="name">Tipo movimiento:</label>
              </td>
              <td>
                <select name="tipo" id="tp" value={values.tipo} onChange={handleChange} required>
                  <option value=""></option>
                  <option value="Gasto">Gasto</option>
                  <option value="Ingreso">Ingreso</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>
                <label for="name">Nombre:</label>
              </td>
              <td>
                <input
                  type="text"
                  id="nombre"
                  name='nombre'
                  value={values.nombre}
                  onChange={handleChange}
                  required
                />
              </td>
            </tr>
            <tr>
              <td>
                <label for="name">Cantidad</label>
              </td>
              <td>
                <input
                  type="number"
                  id="cantidad"
                  name='cantidad'
                  value={values.cantidad}
                  onChange={handleChange}
                  required
                />

              </td>

            </tr>
            <tr>
              <td>

              </td>
              <td>
                {values.cantidad ? formatearNumero(values.cantidad):''}
              </td>
            </tr>
          </table>
          <button className={style.btnsecondary} onClick={() => cancelar()}>Cancelar</button>
          <button type="submit" className={style.btnprimary}>{edit ? "Finalizar" : "Agregar"}</button>
        </form >
      </div>
    </>
  )
};
export default FormFinanzas;