import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Ap from "../Pagination/Ap";

const Home = () => {
  const isUserLoggedin = sessionStorage.getItem("isUserLoggedin")
    ? sessionStorage.getItem("isUserLoggedin")
    : false;
  const isAdmin = sessionStorage.getItem("isAdmin")
    ? sessionStorage.getItem("isAdmin")
    : false;

  const navigate = useNavigate();

  useEffect(() => {
    let email = sessionStorage.getItem("email");
    if (email === "" || email === null) {
      navigate("/login");
    }
  }, []);

  return <div>{isUserLoggedin && !isAdmin && <Ap />}</div>;
};

export default Home;
