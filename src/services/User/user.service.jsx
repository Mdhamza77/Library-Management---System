import api from "../api"

export const getAll =async () => {
    return await api.get('Signup');
}

export const getUser =async (id) => {
   return await api.get('/Signup/'+id);
}

export const editUser = async (id , user) => {
   return await api.put('/Signup/'+id , user)
}

export const deleteUser =async (id) => {
   return await api.delete('/Signup/'+id);
}

export const addUser =async (user) => {
   return await api.post('/Signup/',user)
}

export const userValidate =async (email , password) => {
  return await api.get('/Signup?email=' + email + "&password=" + password)
}