import style from './ParkingOption.module.css'
const ParkingOption = ({carros,motos}) => {
  
  return (
    <div className={style.container}>
      <h2>Visualizacion de parqueaderos</h2>
      <h5>Parqueadero de motos Mofles</h5>
      <div>
        <p>Disponibles: {motos.disponibles}</p>
        <p>Ocupados: {motos.ocupadas}</p>
      </div>

      <h5>Parqueadero de carros los Almendros</h5>
      <div>
        <p>Disponibles: {carros.disponibles}</p>
        <p>Ocupados: {carros.ocupadas}</p>
      </div>
    </div>
  );
};

export default ParkingOption;