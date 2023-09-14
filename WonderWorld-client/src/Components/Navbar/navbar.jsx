// Navbar.jsx
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/context.auth";
import WonderCard from "../../Pages/WonderCard/wonderCard";
import './navbar.css';

function Navbar() {
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  return (
    <div className="header">
      <div className="navbarContainer">
        <div className="navbarLeft">
          <Link to="/">
            <button className="navbarBtn border border-blue-700 rounded bg-blue-700 hover:bg-blue-950 hover:border-blue-950 text-neutral-50 me-12 font-bold">Home</button>
          </Link>
        </div>
        <div className="mainTitle">
          <h2>Welcome to 7 Wonders of the World!</h2>
        </div>
        <div className="navbarRight">
          {isLoggedIn ? (
            <div className="flex gap-x-4">
              <Link to="/wonder/card" element={<WonderCard />} className="navbarBtn border border-blue-700 rounded bg-blue-700 hover:bg-blue-950 hover:border-blue-950 text-neutral-50">
                <p className="font-bold pt-1">Wonder List</p>
              </Link>
              <p className="font-bold text-xl name">{user && user.name}</p>
              <Link to="/" >
                <button className="navbarBtn border border-blue-700 rounded bg-blue-700 hover:bg-blue-950 hover:border-blue-950 text-neutral-50 font-bold" onClick={logOutUser}>Logout</button>
              </Link>
            </div>
          ) : (
            <div className="flex gap-x-4">
              <Link to="/signup">
                  <button className="navbarBtn border border-blue-700 rounded bg-blue-700 hover:bg-blue-950 hover:border-blue-950 text-neutral-50 font-bold ">Signup</button>
              </Link>
              <Link to="/login">
                  <button className="navbarBtn border border-blue-700 rounded bg-blue-700 hover:bg-blue-950 hover:border-blue-950 text-neutral-50 font-bold ">Login</button>
              </Link>
            </div>
          )}
        </div>
      </div>
      
    </div>
  );
}

export default Navbar;
