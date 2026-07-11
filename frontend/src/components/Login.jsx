import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function Login({ setIsLogin, setPage }) {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {

    if (username === "admin" && password === "123kitasemuabisa") {

      setIsLogin(true);
      setPage("dashboard");
      setError("");

    } else {

      setError("Username atau Password salah");

    }

  };

  return (

    <div className="login-page">

        <div className="login-card">

            <div className="login-logo">
            🌿
            </div>

            <h1>Login</h1>

            <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            />
            
            <div className="password-wrapper">

                <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <span
                    type="button"
                    className="eye-btn"
                    onClick={() => setShowPassword(!showPassword)}
                >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
            </div>

            {error && <p className="error">{error}</p>}

            <button onClick={handleLogin}>
            Login
            </button>

            <button
            className="back-button"
            onClick={() => setPage("landing")}
            >
            ← Kembali
            </button>

        </div>

    </div>

  );

}

export default Login;