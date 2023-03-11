import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BookList from "../pagination/index";

const Admin = () => {
  const navigate = useNavigate();
  useEffect(() => {
    let email = sessionStorage.getItem("email");
    if (email === "" || email === null) {
      navigate("/login");
    }
  }, []);

  return (
    <div>
      <BookList />
    </div>
  );
};

export default Admin;
