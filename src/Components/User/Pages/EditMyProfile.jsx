import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate , useParams } from 'react-router-dom';
import { editUser , getUser } from '../../../services/User/user.service';
import {Form , Button ,TextArea } from 'semantic-ui-react'
import showPwdImg from "../../../assets/Icons/show-password.svg";
import hidePwdImg from "../../../assets/Icons/hide-password.svg";
const EditMyProfile = () => {
    const navigate = useNavigate();  
    const {id} = useParams();
    const [firstName , setFirstName] = useState("")
    const [lastName , setLastName] = useState("")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [img ,setImg] = useState("")
    const [content , setContent] = useState("")
    const [isRevealPwd, setIsRevealPwd] = useState(false);

    useEffect(()=>{
          get();   
        
    }, [])
           
      const get = () => {
          getUser(id).then( (res) => {
             console.log(res.data) 
             setFirstName(res.data.firstName)
             setLastName(res.data.lastName)
             setImg(res.data.img)
             setContent(res.data.content)
             setPassword(res.data.password)
             setEmail(res.data.email)
          })
          .catch( err => console.log(err))  
      }
       
      const handleSubmit = () => {
        const user =  {
             firstName : firstName ,
             lastName : lastName ,
             img : img ,
             content : content ,
             email: email,
             password: password,
        }
        editUser(id , user).then( (res) => {
            console.log(res.data);
            get();
            navigate('/home')
        }) .catch(err => console.log(err))
      } 
    return (
        <div className='Forms'>
            <Form onSubmit={handleSubmit} className='container'>
                <Form.Field>
                    <label>First Name</label>
                    <input type='text' value={firstName} 
                       onChange={(e)=>setFirstName(e.target.value)}
                    />
                </Form.Field>
                <Form.Field>
                    <label>last Name</label>
                    <input type='text' value={lastName} 
                       onChange={(e)=>setLastName(e.target.value)}
                    />
                </Form.Field>

                <Form.Field> 
            <label htmlFor="email">Email</label>
            <input
              placeholder="Email"
              id="email"
              type="email"
              value={email}
              required
              readOnly
              
            />
          </Form.Field>

          <Form.Field className='pwd-container'>
            <label htmlFor="password">Password
            <input
              placeholder="Password"
              id="password"
              type={isRevealPwd ? "text" : "password"}
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
            />
             <img
                  title={isRevealPwd ? "Hide password" : "Show password"}
                  src={isRevealPwd ? hidePwdImg : showPwdImg}
                  onClick={() => setIsRevealPwd((prevState) => !prevState)}
                />
                </label>
          </Form.Field>
          <Form.Field>
                    <label>Profile Image</label>
                    <input type='text' value={img} 
                       placeholder = 'profile image'
                       onChange={(e)=>setImg(e.target.value)}
                    />
                </Form.Field>
                <Form.Field>
                    <label>About you</label>
                    <TextArea type='text' value={content} 
                       placeholder = 'Tell us About you'
                       min = "20"
                       max= "150"
                       onChange={(e)=>setContent(e.target.value)}
                    />
                </Form.Field>
                <Button className='blue'>Save</Button>
                <Button className='red' onClick={()=>navigate('/home')}>Go Back</Button>
            </Form>
        </div>
    );
}

export default EditMyProfile;
