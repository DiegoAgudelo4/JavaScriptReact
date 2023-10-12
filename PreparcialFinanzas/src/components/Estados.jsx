import style from "./Estados.module.css";
import numeral from 'numeral';

const Estados = ({ saldoInicial, setsaldoInicial, saldoFinal, setsaldoFinal }) => {
    const formatearNumero = (numero) => {
        return numeral(numero).format('0,0.00');
      };
    
    return (
        <>
            <div className={style.header}>
                <div className={style.header_title}>
                    <img src="/calculator.png" alt=""className={style.logo}/>
                    <h2>Cuentas con react</h2>
                </div>

                <div className={style.header_estados}>
                    <div className={style.estado}>
                        Saldo Inicial
                        <input
                            name="inicial"
                            type="number"
                            placeholder="0"
                            onChange={(e) => { setsaldoFinal(e.target.value); setsaldoInicial(e.target.value) }}
                        />
                    </div>
                    <div className={style.estado}>
                        saldo Final
                        <input
                            name="final"
                            value={formatearNumero(saldoFinal)}
                            readOnly
                        />
                    </div>
                </div>
            </div>
        </>
    )
};
export default Estados;