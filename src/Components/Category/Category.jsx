import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Category = () => {
    const [books, getBooks] = useState([]);

    const navigate = useNavigate()
    const get = async () => {
        return await axios.get('http://localhost:8080/Category')
            .then(res => {
                getBooks(res.data);
                console.log(res.data);
            })
            .catch(err => console.log(err.data))
    }

    useEffect(() => {
        get();
    }, [])

    const Category = (category) => {
        navigate('/books/' + category)
    }
    return (
        <div>
            {
                books.map((item) => (
                    <div key={item.id}>
                        <p>{item.category}</p>
                        <button onClick={() => Category(item.category)}>Category</button>
                    </div>
                ))
            }

        </div>
    );
}

export default Category;
