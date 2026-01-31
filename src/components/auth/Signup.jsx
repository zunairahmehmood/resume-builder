import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../../firebase/firebaseConfig";
import Input from "../ui/Input";
import { useNavigate, Link } from "react-router-dom";
import Swal from "sweetalert2";
import "../../auth.css";

function Signup() {
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agree, setAgree] = useState(false);
  const navigate = useNavigate();

  const handleSignup = async () => {
    // ✅ Validation
    if (!agree) {
      Swal.fire({ icon: "warning", title: "You must agree to Terms of Use" });
      return;
    }
    if (password !== confirmPassword) {
      Swal.fire({ icon: "error", title: "Passwords do not match" });
      return;
    }

    // 🔹 Show loading popup
    const loadingPopup = Swal.fire({
      title: "Signed up",
      icon: "success",
      draggable: true
    });


    
      // 1️⃣ Firebase Auth signup
      const userCred = await createUserWithEmailAndPassword(auth, email, password);

      // 2️⃣ Firestore data save
      await setDoc(doc(db, "students", userCred.user.uid), {
        fullName,
        username,
        email,
        rollNo: "12345",
        semester: "1st",
        course: "Web Development",
        createdAt: new Date()
      });

      // 3️⃣ Close loading manually
      loadingPopup(false);
      Swal.close();

      // 4️⃣ Show success popup
      await Swal.fire({
        icon: "success",
        title: "Signup Successful!",
        showConfirmButton: false,
        timer: 1500
      });

      // 5️⃣ Navigate after popup
      navigate("/dashboard");
      
    
      // ❌ Close loading if error
      Swal.close();

      // ❌ Show error popup
      Swal.fire({
        icon: "error",
        title: "Signup Failed",
        text: error.message
      });
    
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-image"></div>
      <div className="auth-form">
        <h1>Sign Up</h1>
        
        <Input
          label="Full Name"
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
        />
        <Input
          label="Email Address"
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
        <Input
          label="Confirm Password"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <div className="checkbox">
          <input type="checkbox" id="terms" checked={agree} onChange={(e) => setAgree(e.target.checked)} />
          <label htmlFor="terms">I agree to the <span>Terms of Use</span></label>
        </div>
        <button onClick={handleSignup}>Sign Up</button>
        <p>Already have an account? <Link to="/">Sign In</Link></p>
      </div>
    </div>
  );
}

export default Signup;