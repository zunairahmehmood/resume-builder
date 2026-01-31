import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebaseConfig";
import { useState } from "react";
import Input from "../ui/Input";
import { useNavigate, Link } from "react-router-dom";
import Swal from "sweetalert2";
import "../../auth.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    // 🔹 Show loading popup
    Swal.fire({
      title: "Logging in...",
      allowOutsideClick: false,
      didOpen: () => Swal.showLoading()
    });

    // Swal.fire({
    //   title: "Logging in...",
    //   allowOutsideClick: false
    // }).then(() => Swal.showLoading());



    try {
      await signInWithEmailAndPassword(auth, email, password);

      // ✅ Close loading & show success
      Swal.fire({
        icon: "success",
        title: "Login Successful!",
        showConfirmButton: false,
        timer: 1500
      });

      // Navigate after popup
      setTimeout(() => navigate("/dashboard"), 1500);
    } catch (error) {
      // ❌ Close loading & show error
      Swal.fire({ icon: "error", title: "Login Failed", text: error.message });
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-image"></div>
      <div className="auth-form">
        <h2>Login</h2>
        <Input
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <Input
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button onClick={handleLogin}>Login</button>
        <p>Don’t have an account? <Link to="/signup">Sign Up</Link></p>
      </div>
    </div>
  );
}

export default Login;