import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Form, Button } from "semantic-ui-react";
import { toast } from "react-toastify";
import { getBooks, deleteBooks } from "../../../../services/book/book.service";

const BookList = () => {

  const navigate = useNavigate();
  const { id } = useParams();
  const [bookName, setBookName] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState("");
  const [img, setImg] = useState("");
  const [price, setPrice] = useState("");
  const Delete = (id) => {
    deleteBooks(id).then(toast("Deleted successfully"), navigate("/Admin"));
  };

  const Edit = (id) => {
    navigate("/EditBooks/" + id);
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
            <div className="container black">
              
              <img className="book-Img" src= {img} />
              <h1>Book Name : {bookName}</h1>
              <p>Description : {description}</p>
              <h3>Author Name : {authorName}</h3>
              <p>Quantity : {quantity}</p>
              <p>Price : {price}</p>
              <p>Book Id : {id}</p>
              <Button className="blue" id="Button" onClick={() => Edit(id)}>
                Edit Books
              </Button>
              <Button className="red" id="Button" onClick={() => Delete(id)}>
                Delete Books
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default BookList;
