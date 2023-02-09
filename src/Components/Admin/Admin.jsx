import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import Ap from '../Pagination/Ap';


const Admin = () => {
    const navigate = useNavigate();
    useEffect(() => {
        let email = sessionStorage.getItem('email');
        if (email === '' || email === null) {
            navigate('/login') 
        } 
        <Ap/>
    }, [])


    return (
        <div>
            <Ap />
        </div>
    );
}

export default Admin;
