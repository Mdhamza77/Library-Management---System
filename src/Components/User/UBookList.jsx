import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Form, Button } from 'semantic-ui-react';
import api from '../../services/api';
import { useNavigate } from 'react-router-dom';

const BookList = () => {

  const [get, setGet] = useState([]);

  const [value, setValue] = useState("")


  const navigate = useNavigate();


  useEffect(() => {
    getData();

  });


  const getData = async () => {
    return await api.get(`Books`)
      .then((resp) => {
        setGet(resp.data);
      }).catch(err => {
        console.log(err);
      })
  }

  const Rent = (id) => {
    navigate(`/Rent/` + id)
  }

  return (
    <>

      <Form className='search'>

        <div className="ui search">
          <div className="ui icon input">
            <input type='text' className="prompt"
              placeholder='search Book title'
              onChange={(e) => setValue(e.target.value)}

            />
            <i className="search icon"></i>
            <Button type='submit' className='ui blue'>Search</Button>
          </div>
        </div>
      </Form>
      <div>
      </div>
      <div className=''>
        {
          get.filter((item) => item.title.toLowerCase().includes(value)
            || item.AuthorName.toLowerCase().includes(value)

          ).map((e) => (
            <div >
              <div className="card">
                <form >
                  <div className="container" key={e.id}>
                    <div><h1>Book Name : {e.title}</h1></div>
                    <div> <p>Description : {e.Description}</p>  </div>
                    <div> <h3>Author Name : {e.AuthorName}</h3>  </div>
                    <div> <p>Quantity : {e.Quantity}</p>   </div>
                    <div>  <p>Price : {e.price}$</p>  </div>
                    <div><p>Book Id : {e.id}</p> </div>
                    <br />
                    <Button className='blue' onClick={() => Rent(e.id)}>Rent Book</Button>
                  </div>
                </form>
              </div>
            </div>

          ))
        }
      </div>

    </>

  );
}

export default BookList;
