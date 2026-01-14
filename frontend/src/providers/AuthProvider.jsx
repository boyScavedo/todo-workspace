import { useState } from "react";
import AuthContext from "../context/AuthContext";

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);

    const signin =(userData)=> setUser(userData);
    const signout =()=> setUser(null);

    const isAuthenticated = true;
    

  return (
    <>
        <AuthContext.Provider value={{user, signin, signout, isAuthenticated}}>
            {children}
        </AuthContext.Provider>
    </>
  )
}

export default AuthProvider 