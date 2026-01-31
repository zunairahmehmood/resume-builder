import { signOut } from "firebase/auth";
import { auth } from "../../firebase/firebaseConfig";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const isDark = localStorage.getItem("theme") === "dark";
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  const toggleDark = () => {
    const newDark = !dark;
    setDark(newDark);
    document.documentElement.classList.toggle("dark", newDark);
    localStorage.setItem("theme", newDark ? "dark" : "light");
  };

  const logout = async () => {
    await signOut(auth);

    // 🔥 force redirect
    navigate("/login", { replace: true });
  };

  return (
    <nav className="navbar">
      <button onClick={toggleDark} className="navbar-btn dark-toggle">
        {dark ? "☀️" : "🌙"}
      </button>

      <h1 className="navbar-title">Resume Builder</h1>

      <button onClick={logout} className="navbar-btn logout-btn">
        Logout
      </button>
    </nav>
  );
};

export default Navbar;