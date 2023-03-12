import { render , screen , waitFor } from "@testing-library/react";
import { addUser , getAll , getUser , editUser , deleteUser , userValidate } from "./user.service";


describe('user services', (user) => {
     it('Adding user from api', () => {
   
         addUser(user).then( (res) => console.log(res.data))
          
     });
     waitFor(() => {
      expect(screen.getByText("/value from the api")).toBeInTheDocument();
    });
      
 
});

describe('user services', () => {
    it('get All user Data from api', () => {
  
        getAll().then( (res) => console.log(res.data))
         
    });
    waitFor(() => {
     expect(screen.getByText("/value from the api")).toBeInTheDocument();
   });
     

});

describe('user services', (id) => {
    it('get user from params id api', () => {
  
        getUser(id).then( (res) => console.log(res.data))
         
    });
    waitFor(() => {
     expect(screen.getByText("/value from the api")).toBeInTheDocument();
   });
     

});

describe('user services', (id,user) => {
    it('Edit user from param id api', () => {
  
        editUser(id,user).then( (res) => console.log(res.data))
         
    });
    waitFor(() => {
     expect(screen.getByText("/value from the api")).toBeInTheDocument();
   });
     

});

describe('user services', (id) => {
    it('Delete user from id api', () => {
  
        deleteUser(id).then( (res) => console.log(res.data))
         
    });
    waitFor(() => {
     expect(screen.getByText("/value from the api")).toBeInTheDocument();
   });
     

});

describe('user services', (email , password) => {
    it('Adding user from api', () => {
  
        userValidate(email, password).then( (res) => console.log(res.data))
         
    });
    waitFor(() => {
     expect(screen.getByText("/value from the api")).toBeInTheDocument();
   });
     

});


