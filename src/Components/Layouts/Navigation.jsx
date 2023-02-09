import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import "../MainComponents/style.css";
const Navigation = () => {
  const isUserLoggedin = sessionStorage.getItem("isUserLoggedin")
    ? sessionStorage.getItem("isUserLoggedin")
    : false;
  const isAdmin = sessionStorage.getItem("isAdmin")
    ? sessionStorage.getItem("isAdmin")
    : false;

  const navigate = useNavigate();

  const home = () => {
    navigate("/");
  };

  const logout = () => {
    toast("Logging out");
    sessionStorage.clear();
    navigate("/login");
    window.location.reload(true);
  };

  return (
    <div>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
      />
      <header className="head">
        <h1 className="bookicon">
          <button onClick={home}>
            <i className="book icon "></i>Library-Management-System
          </button>
        </h1>

        <nav className="navbar">
          {!isUserLoggedin && (
            <Link to="/">
              <i className="home icon"></i>Home
            </Link>
          )}
          {isUserLoggedin && isAdmin && (
            <Link to="/Admin">
              <i className="home icon"></i>Home
            </Link>
          )}
          {isUserLoggedin && !isAdmin && (
            <Link to="/home">
              <i className="home icon"></i>Home
            </Link>
          )}

          {isUserLoggedin && isAdmin && <Link to="/addbooks">Add Books</Link>}
          {isUserLoggedin && isAdmin && <Link to="/User">user details</Link>}
          {isUserLoggedin && !isAdmin && <Link to="/RentList">My Books</Link>}
        </nav>

        <div className="icons">
          {isUserLoggedin && (
            <Link className="fas fa-user" to="/profile">
              MyProfile
            </Link>
          )}
          {!isUserLoggedin && (
            <Link to="/login">
              <i className="sign in icon"></i>Login
            </Link>
          )}
          {!isUserLoggedin && (
            <Link to="/register">
              <i className="add user icon"></i>Signup
            </Link>
          )}

          {isUserLoggedin && <Link onClick={logout}>Logout</Link>}
          {isUserLoggedin && !isAdmin && <Link to="/feedback">FeedBack</Link>}
        </div>
      </header>
    </div>
  );
};

export default Navigation;
