import api from "../api";

export const getAllBooks =async () => {
    return await api.get('/Books')
}

export const getBooks =async (id) => {
    return await api.get('/Books/'+ id)
}

export const editBooks =async (id, book) => {
    return await api.put('/Books/'+id , book)
}

export const deleteBooks =async (id) => {
    return await api.delete('/Books/'+id)
} 

export const addBooks =async (book) => {
    return await api.post('/Books/',book)
}