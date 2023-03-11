import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button } from "semantic-ui-react";
import { getBooks } from "./../../../../services/book/book.service";
import { useParams } from "react-router-dom";
const UBook = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [bookName, setBookName] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState("");
  const [img, setImg] = useState("");
  const [price, setPrice] = useState("");
  const Rent = (id) => {
    navigate(`/Rent/` + id);
  };

  useEffect(() => {
    get();
  }, []);

  const get = () => {
    getBooks(id)
      .then((resp) => {
        setBookName(
          resp.data.title,
          setAuthorName(resp.data.AuthorName),
          setDescription(resp.data.Description),
          setQuantity(resp.data.Quantity),
          setPrice(resp.data.price),
          setImg(resp.data.Image)
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="Book">
      <div>
        <div className="card">
          <Form>
            <div className="container-black">
              
                <img className="book-Img" src={img} />
                <h1>Book Name : {bookName}</h1>
                <p>Description : {description}</p>
                <h3>Author Name : {authorName}</h3>
                <p>Quantity : {quantity}</p>
                <p>Price : {price}</p>
                <br/>
                <Button className="blue" id="Button" onClick={() => Rent(id)}>
                  Rent Book
                </Button>
              
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default UBook;
