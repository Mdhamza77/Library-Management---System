import React  from 'react';
import {  Route, Routes } from 'react-router-dom';
import AddBooks from '../Admin/AddBooks';
import Login from '../MainComponents/Login';
import Register from '../MainComponents/Register';
import Home from '../User/home';
import EditBooks from '../Admin/EditBooks';
import Logout from '../MainComponents/Logout';
import Admin from '../Admin/Admin';
import Rent from '../User/Rent';
import RentList from '../User/RentList';
import NoMatch from '../../assets/NoMatch';
import Homepage from '../MainComponents/Homepage';
import User from '../Admin/User'
import Feedback from '../User/Feedback';
import EditUser from '../Admin/EditUser';
import Books from '../Category/Books';
import Category from '../Category/Category';
import { useEffect } from 'react';
import { useState } from 'react';
import Myprofile from '../User/Myprofile';
const Routing = () => {
    
    const isUserLoggedin =  sessionStorage.getItem('isUserLoggedin') ? sessionStorage.getItem('isUserLoggedin') : false
    const isAdmin =  sessionStorage.getItem('isAdmin') ? sessionStorage.getItem('isAdmin') : false
  
     
    return (
        <div>
            <Routes>
                {isUserLoggedin && isAdmin && <Route path='/addBooks' element={<AddBooks />}></Route>}
                { !isUserLoggedin && <Route path='/login' element={<Login  />}></Route>}
                { !isUserLoggedin && <Route path='/register' element={<Register />}></Route>}
                 {isUserLoggedin && <Route path='/profile' element={<Myprofile/>}></Route>}
                <Route path='/home' element={<Home />}></Route>
                <Route path='/admin' element={<Admin />}></Route>
                {isUserLoggedin && isAdmin && <Route path='/editBooks' element={<EditBooks />}></Route>}
                {isUserLoggedin && isAdmin && <Route path='/EditBooks/:id' element={<EditBooks />}></Route>}
                {isUserLoggedin && !isAdmin && <Route path='/Rent/:id' element={<Rent />}></Route>}
                <Route path='*' element={<NoMatch />}></Route>
                {isUserLoggedin && !isAdmin && <Route path='/RentList' element={<RentList />}></Route>}
                { <Route path='' element={<Homepage />}></Route>}
                {isUserLoggedin && isAdmin && <Route path='/user' element={<User />}></Route>}
                {isUserLoggedin && !isAdmin && <Route path='feedback' element={<Feedback />}></Route>}
                {isUserLoggedin && isAdmin && <Route path='/EditUser/:id' element={<EditUser />}></Route>}
                {<Route path='/Books/:category' element={<Books />}></Route>}
                {<Route path='/Category' element={<Category />}></Route>}

            </Routes>

        </div>
    );
}

export default Routing;
