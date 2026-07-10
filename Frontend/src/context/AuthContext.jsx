import { createContext, useContext, useState, useEffect } from "react";
import { getCurrentUser, logoutUser } from "../api/auth";

const AuthContext = createContext();

export function AuthProvider({ children }){
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        const token = localStorage.getItem("token");
        if(!token){
            setLoading(false);
            return;
        }
        getCurrentUser()
        .then((res)=>setUser(res.data))
        .catch(()=> setUser(null))
        .finally(()=> setLoading(false));
    },[]);

    const logout = () =>{
        logoutUser();
        setUser(null);
    };
    return (
    <AuthContext.Provider value={{ user, setUser, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}

