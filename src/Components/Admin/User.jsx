import React, { useState, useEffect } from 'react';
import { Button, Form } from 'semantic-ui-react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getAll , deleteUser } from '../../services/User/user.service';
const User = () => {

    const isUserLoggedin = sessionStorage.getItem('isUserLoggedin') ? sessionStorage.getItem('isUserLoggedin') : false
    const isAdmin = sessionStorage.getItem('isAdmin') ? sessionStorage.getItem('isAdmin') : false
    const [user, getUser] = useState([])
    const navigate = useNavigate();
    const getData = async () => {
        return await getAll() 
            .then((res) => {
                getUser(res.data);
            })
            .catch((err) => console.log(err.data))
    }

    const Edit = (id) => {
          navigate('/EditUser/' + id)
    }

    const Delete = (id) => {
         deleteUser(id).then( res => {
            toast("Deleted User Successfully")
            console.log(res.data);
            getData();
        })
        .catch( err => console.log(err.data))
    }

    useEffect(() => {
        getData()
    }, [])
    

    return (
        <div>
            {isUserLoggedin && isAdmin &&
                <div>

                    <br />
                    <h1>User Dashboard Details</h1>
                    {
                        user.map((users) => (
                            <div key={users.id}>
                                <div className='card'>
                                    <Form>
                                        <div className='container black'>
                                            <h3>First name : {users.firstName}</h3>
                                            <h3>Last name : {users.lastName}</h3>
                                            <h3>Email id : {users.email}</h3>
                                            <h3>user Id : {users.id}</h3>
                                            <Button className='blue' onClick={()=>Edit(users.id)}>Edit</Button>
                                             <Button className='red' onClick={()=>Delete(users.id)}>Delete</Button>
                                             </div>
                                    </Form>
                                </div>
                            </div>
                        ))
                    }
                   
                    <br />
                    <div className='uis'>
                    <Button className='red' onClick={() => navigate('/Admin')}>Go Back</Button>
                    </div>
                </div>
                
            }
             <br/>
             <br/>
        </div>
        
    );
}

export default User;
