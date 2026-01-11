import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Navbar = ({ user, setUser }) => {
  const navigate = useNavigate();
  const handleLogout = async () => {
    await axios.post('/api/auth/logout');
    setUser(null);
    navigate("/");
  };


  return (
  <nav className="bg-gray-800 text-white">
    <div className="max-w-6xl mx-auto p-4 flex justify-between items-center">
      <Link to="/" className="font-bold">PERN Auth </Link>
      <div>
        {user ? (
          <button onClick={handleLogout} className="bg-red-500 px-4 py-2 rounded">
            Logout
          </button>
        ) : (
          <>
            <Link to="/login" className="mx-4">Login</Link>
            <Link to="/register" className="mx-4">Register</Link>
          </>
        )}

      </div>
    </div>
  </nav>
  )
};

export default Navbar;
