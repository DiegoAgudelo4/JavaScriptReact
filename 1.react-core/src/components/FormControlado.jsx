import { useState } from "react";

const formControlado= () =>{
   //se crea un estado para guardar la informacion del formulario
   //en un objeto
    const [form, setForm]=useState(
        {
            email:"",
            password:""        
        });
    //almacena la informacion ingresada, caracter por caracter
    //porque es invocada en la funcion onchange de un input
    const handlerInputEmail=(e)=>{
        setForm({...form, email: e.target.value})
    }
    const handlerInputPassword=(e)=>{
        setForm({...form, password: e.target.value})
    }
    return (
    <>
        <input type="text" 
                name="email"
                placeholder="Ingrese Email" 
                autoComplete="off"
                value={form.email} onChange={handlerInputEmail}
        />
        
        <input type="password" 
                name="password"
                placeholder="Ingrese ingrese password" 
                autoComplete="off"
                value={form.password} onChange={handlerInputPassword}
        />        
    </>
    );
}

export default formControlado;
