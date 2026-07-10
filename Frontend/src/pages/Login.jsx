import { useState } from "react";
import { useNavigate,Link } from "react-router-dom";
import { login } from "../api/auth";

export default function Login() {
    const [form, setForm] = useState({email:"",password:""});
    const [error,setError] = useState("");
    const [loading,setLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) =>{
        setForm({
            ...form,
            [e.target.name] : e.target.value
        });
    };

    const handleSubmit = async (e) =>{
        e.preventDefault();
        setError("");
        setLoading(true);

        try{
            const response = await login(form.email, form.password);
            localStorage.setItem("token", response.data.access_token);
            navigate("/dashboard");
        }catch(err){
            const detail = err.response?.data?.detail;
            setError(typeof detail === "string" ? detail : "Login failed. Please check your details.");
            } finally {
                setLoading(false);
            }
    };
    return(
        <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    name="email"
                    placeholder="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="login-input"
                />
                <input
                    type="password"
                    name="password"
                    placeholder="password"
                    value={form.password}
                    onChange={handleChange}
                    required
                    className="login-input"
                />
                { error && <p className="login-error" >{error}</p>}
                <button type="submit" disabled={loading} className="login-button">
                    {loading? "Logging in..." : "Login"}
                </button>
                <p>
                    Don't have an Account?<Link to="/register">Register</Link>
                </p>
            </form>

        </div>
    );
}