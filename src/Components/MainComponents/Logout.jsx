import React ,{useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
const Logout = () => {

   const isUserLoggedin = sessionStorage.getItem('isUserLoggedin') ? sessionStorage.getItem('isUserLoggedin') : false
   const    navigate =useNavigate();
    useEffect(() => { isUserLoggedin &&
        sessionStorage.clear();
             logout() ;
    }, []);

      const logout = () => {
           sessionStorage.clear() ; 
           toast('Logged out successfully')
           navigate('/login')
      }
    return (
        <div>
            <button onClick={logout}></button>
        </div>
    );
}

export default Logout;
