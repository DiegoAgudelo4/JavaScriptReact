import React, { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { GlobalContext } from '../context/globalContext';

const UserPage = () => {
  const {id}= useParams();
  const navigate=useNavigate();
  const handler=()=>{
    navigate("/",{replace:true});
  };
  const handlerChangeName=()=>{
    changeName("Ana");
  }
  const{message, user, changeName}=useContext(GlobalContext);
  return (
    <div>Info User
      <h1>user Info</h1>
      <br />
      <h3>user id: {id}</h3>
      <br />
      <h3>user name: {user.name}</h3>
      <button onClick={handlerChangeName}>Cambiar nombre</button>
      <br />
      <h3>message: {message}</h3>
      <button onClick={handler}>Volver</button>
    <br />
    </div>
    
  )
}

export default UserPage