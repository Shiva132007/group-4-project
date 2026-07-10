import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { registerUser } from "../api/auth";


export default function Register() {
  const [form, setForm] = useState({ email: "", password: "", role: "Researcher" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await registerUser(form);
      navigate("/login");
    } catch (err) {
      const detail = err.response?.data?.detail;
      setError(typeof detail === "string" ? detail : "Registration failed. Please check your details.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="register-container">
      <h2>Create Account</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
          className="register-input"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
          minLength={6}
          className="register-input"
        />
        <select name="role" value={form.role} onChange={handleChange} className="register-input">
          <option value="Researcher">Researcher</option>
          <option value="InstitutionAdmin">InstitutionAdmin</option>
          <option value="Reviewer">Reviewer</option>
          <option value="SystemAdmin">SystemAdmin</option>
        </select>
        {error && <p className="register-error">{error}</p>}
        <button type="submit" disabled={loading} className="register-button">
          {loading ? "Creating account ..." : "Register"}
        </button>
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
}