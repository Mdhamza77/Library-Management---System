import React , {useState , useEffect} from 'react';
import axios from 'axios';
import { Button , Form } from 'semantic-ui-react';
import { useNavigate , useParams } from 'react-router-dom';
const Books = () => {
    
    const isUserLoggedin = sessionStorage.getItem('isUserLoggedin') ? sessionStorage.getItem('isUserLoggedin') : false
    const isAdmin = sessionStorage.getItem('isAdmin') ? sessionStorage.getItem('isAdmin') : false
    
    
    const navigate = useNavigate() ;
    const [data, setData] = useState([])
    const { category } = useParams();
    const get = async () => {
        return await axios.get(`http://localhost:8080/Books?category=` + category)
            .then((resp) => {
                console.log(resp.data)
                setData(resp.data)
            }) .catch ( err => console.log(err))
    }

    useEffect(() => {
        get();
    }, [])

    const Delete = (id) => {
        axios.delete(`http://localhost:8080/Books/${id}`)
            .then(res => console.log(res.data))
    }

    const Edit = (id) => {
        navigate('/EditBooks/' + id)
      }

      const Rent = (id) => {
        navigate(`/Rent/` + id)
      }
    return (
        <div className=''>

            Welcome to hEll
            {
                data.filter(item => item.category).map(item => (
                    <div className='card'>
                        <Form>    
                            <div className='container'>                  
                        <h1>Title : {item.title}</h1>
                        <p>Description : {item.Description}</p>
                        <p> Category : {item.category}</p>
                        <p> AuthorName : {item.AuthorName}</p>
                        <p>Quantity : {item.Quantity}</p>
                        <Button className='blue' onClick={() => Rent(item.id)}>Rent</Button>
                        <Button className='blue' onClick={() => Edit(item.id)}>Edit Books</Button>
                        <Button  className = 'red' onClick={() => Delete(item.id)}>Delete</Button>
                        </div>
                        </Form>

                    </div>

                ))
            }
        </div>
    );
}

export default Books;
