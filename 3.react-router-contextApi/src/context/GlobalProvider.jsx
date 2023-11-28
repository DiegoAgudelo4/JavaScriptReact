import React, { useState } from 'react'
import { GlobalContext } from './globalContext'

const GlobalProvider = ({ children }) => {
  const [user, setUser] = useState({
    id: 10,
    name: "pedro"
  }
  );
  const changeName=(newName)=>{
    setUser({...user, name:newName});
  };
  return (
    <GlobalContext.Provider value={{ message: "hola", active: true, user, changeName }}>
      {children}
    </GlobalContext.Provider>
  )
};

export default GlobalProvider