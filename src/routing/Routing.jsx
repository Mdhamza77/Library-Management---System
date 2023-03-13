import React from "react";
import { Route, Routes } from "react-router-dom";
import AddBooks from "../components/admin/pages/books/AddBooks";
import Login from "../components/mainComponents/login/Login";
import Register from "../components/mainComponents/register/Register";
import Home from "../components/user/UHome";
import EditBooks from "../components/admin/pages/books/EditBooks";
import Admin from "../components/admin/Admin";
import Rent from "../components/user/pages/rentList/Rent";
import RentList from "../components/user/pages/rentList/RentList";
import NoMatch from "../components/mainComponents/NoMatch";
import Homepage from "../components/layouts/footer/Homepage";
import User from "../components/admin/pages/user/User";
import Feedback from "../components/user/pages/feedBack/Feedback";
import EditUser from "../components/admin/pages/user/EditUser";
import EditMyProfile from "../components/user/pages/myProfile/EditMyProfile";
import Myprofile from "../components/user/pages/myProfile/Myprofile";
import BookList from "../components/admin/pages/bookList/BookList";
import UBook from "../components/user/pages/bookList/UBook";
import Category from "../components/category/Category";
import Books from "../components/category/Books";
const Routing = () => {
  const isUserLoggedin = sessionStorage.getItem("isUserLoggedin")
    ? sessionStorage.getItem("isUserLoggedin")
    : false;
  const isAdmin = sessionStorage.getItem("isAdmin")
    ? sessionStorage.getItem("isAdmin")
    : false;

  return (
    <div>
      <Routes>
        {isUserLoggedin && isAdmin && (
          <Route path="/addBooks" element={<AddBooks />}></Route>
        )}
        {!isUserLoggedin && <Route path="/login" element={<Login />}></Route>}
        {!isUserLoggedin && (
          <Route path="/register" element={<Register />}></Route>
        )}
        {isUserLoggedin && (
          <Route path="/profile" element={<Myprofile />}></Route>
        )}
        <Route path="/home" element={<Home />}></Route>
        <Route path="/admin" element={<Admin />}></Route>
        {isUserLoggedin && isAdmin && (
          <Route path="/editBooks" element={<EditBooks />}></Route>
        )}
        {isUserLoggedin && isAdmin && (
          <Route path="/EditBooks/:id" element={<EditBooks />}></Route>
        )}
        {isUserLoggedin && !isAdmin && (
          <Route path="/Rent/:id" element={<Rent />}></Route>
        )}
        <Route path="*" element={<NoMatch />}></Route>
        {isUserLoggedin && !isAdmin && (
          <Route path="/RentList" element={<RentList />}></Route>
        )}
        {<Route path="" element={<Homepage />}></Route>}
        {isUserLoggedin && isAdmin && (
          <Route path="/user" element={<User />}></Route>
        )}
        {isUserLoggedin && !isAdmin && (
          <Route path="feedback" element={<Feedback />}></Route>
        )}
        {isUserLoggedin && isAdmin && (
          <Route path="/EditUser/:id" element={<EditUser />}></Route>
        )}
        {isUserLoggedin && !isAdmin && (
          <Route path="/EditMyProfile/:id" element={<EditMyProfile />}></Route>
        )}
        {isUserLoggedin && isAdmin && (
          <Route path="/BookList/:id" element={<BookList />}></Route>
        )}
        {isUserLoggedin && !isAdmin && (
          <Route path="/UBook/:id" element={<UBook />}></Route>
        )}

        {isUserLoggedin && (
          <Route path="/Category" element={<Category />}></Route>
        )}

        {isUserLoggedin && (
          <Route path="/books/:category" element={<Books />}></Route>
        )}
      </Routes>
    </div>
  );
};

export default Routing;
