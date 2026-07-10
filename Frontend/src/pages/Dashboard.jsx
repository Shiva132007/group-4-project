import { useAuth } from "../context/AuthContext";

export default function Dashboard(){
    const{user,logout} = useAuth();

    return(
        <div style={{maxWidth:400,margin:"80px auto",fontFamily:"sans-serif"}}>
            <h2>Welcome {user.email}</h2>
            <p>Role: {user.role}</p>
            <button onClick={logout}>Logout</button>
        </div>
    );
}