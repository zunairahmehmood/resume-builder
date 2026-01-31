import { Routes, Route } from "react-router-dom";
import Login from "./components/auth/Login";
import Dashboard from "./pages/Dashboard";
import CreateResume from "./pages/CreateResume";
import PreviewResume from "./pages/PreviewResume";
import ProtectedRoute from "./components/auth/ProtectedRoute";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/create-resume"
        element={
          <ProtectedRoute>
            <CreateResume />
          </ProtectedRoute>
        }
      />

      <Route
        path="/preview/:id"
        element={
          <ProtectedRoute>
            <PreviewResume />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default App;