import style from './CuentasItem.module.css';
import numeral from 'numeral';

const CuentasItem = ({ cuenta, deleteCuenta, edit, setEdit }) => {
    const formatearNumero = (numero) => {
        return numeral(numero).format('0,0.00');
    };
    return (
        <tr className={style.tabletr}>
            <td>
                <img
                    src="/trash-can.png"
                    alt=""
                    className={style.btnsIcon}
                    onClick={() => deleteCuenta(cuenta)}
                />
                <img
                    src="/pencil.png"
                    alt=""
                    className={style.btnsIcon}
                    onClick={() => setEdit(cuenta)}
                />
            </td>
            <td>
                <div className={style.nombre}>
                    {cuenta.nombre}
                </div>
            </td>
            <td>
                <div className={`${style.cantidad} ${cuenta.tipo == 'Gasto' ? style.gasto : style.ingreso}`}>
                    {formatearNumero(cuenta.cantidad)}
                </div>
            </td>
        </tr>

    )
};

export default CuentasItem;
