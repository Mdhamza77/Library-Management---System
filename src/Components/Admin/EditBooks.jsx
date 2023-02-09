import axios from 'axios';
import React, {useState , useEffect} from 'react'; 
import { useNavigate ,useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { TextArea , Form ,Button } from 'semantic-ui-react';
import '../MainComponents/Home.css' ;
import { editBooks , getBooks } from '../../services/Book/book.service';


const EditBooks = () => {
 
    const navigate = useNavigate();   
    const [bookName,setBookName] = useState("")
    const [authorName , setAuthorName] = useState("") ;
    const [description,setDescription] = useState("") ;
    const [quantity,setQuantity] = useState("")
    const [price ,setPrice] = useState(""); 
    const {id} = useParams();
    
    useEffect(()=> {
         get();
      },[])

      const get = () => {
        getBooks(id)
        .then((resp) => {
          
           setBookName((resp.data.title) ,
           setAuthorName(resp.data.AuthorName) ,
           setDescription(resp.data.Description) ,
           setQuantity(resp.data.Quantity) ,
           setPrice(resp.data.price))
           
        }).catch(err => {
          console.log(err);
        })
      }
      const handleSubmit = () =>{
           const book =  {
            title : bookName ,
            Description : description ,
            AuthorName : authorName ,
            Quantity  : quantity ,
            price  ,
            
        }
            
        editBooks(id,book)
        .then(resp => {
            console.log(resp.data) ;
            get();
            toast('Updated successfully')
            navigate('/Admin')
        }).catch( err => {
            console.log(err.data)
        })
    }



    return (
        <div> 
            <div className='container'>
                <br/>
                <h1 className=''>Edit Books</h1>
             <Form className='ui form'>
             <Form.Field>
                        <label htmlFor='id'>Books ID</label>
                        <input type="text" name="name" placeholder ="Book ID" 
                         value={id}
                         readOnly
                         id = 'id'
                        />
                        </Form.Field>
                     <Form.Field>
                        <label htmlFor='book'>Books Name</label>
                        <input type="text" name="name" placeholder ="Book name" 
                         id='book'
                         value={bookName}
                         
                         onChange = { e => setBookName(e.target.value)}
                        />
                        </Form.Field>
                     <Form.Field>
                        <label htmlFor='description'>Description</label>
                        <TextArea placeholder='Description' style={{ minHeight: 100 }} 
                          value={description}
                          id = 'description'
                          onChange = { e => setDescription(e.target.value)}
                        />
                        </Form.Field>
                        <Form.Field>
                        <label htmlFor='author'>Author Name</label>
                        <input type="text" name="name" placeholder = "Author name" 
                         value={authorName} 
                         id = 'author'
                         onChange = {e => setAuthorName(e.target.value)}
                         readOnly
                        />
                     </Form.Field>
                        <Form.Field>
                        <label htmlFor='quantity'>Book Quantity</label>
                        <input type="number" name="name" placeholder ="Books Quantity"  
                        value={quantity}
                        id = 'quantity'
                        onChange = { e => setQuantity(e.target.value)}
                        />
                        </Form.Field>
                        <Form.Field>
                        <label htmlFor='price'>Books Price</label>
                        <input type="number" name="name" placeholder ="Book Price" 
                        value={price} 
                        id = 'price'
                        onChange = {e => setPrice(e.target.value)}
                        />
                        </Form.Field>

                    <Button className='ui button blue' onClick={handleSubmit}>Save</Button>    
                    <Button  className='ui button red' onClick={()=> navigate(-1)}>Go Back</Button> 
             </Form>
        </div>
        </div>
    );
}

export default EditBooks;
