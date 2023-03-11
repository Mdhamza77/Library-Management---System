import React, { useState, useEffect } from "react";
import { Form, Button } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { getData, returnBook } from "../../../../services/rent/rent.service";

const RentList = () => {
  const [rentedbook, getRentedBooks] = useState([]);
  const email = sessionStorage.getItem("email");
  const navigate = useNavigate();
  useEffect(() => {
    get();
  }, []);

  const get = () => {
    getData()
      .then((res) => {
        getRentedBooks(res.data);
      })
      .catch((err) => console.log(err));
  };

  const Return = (id) => {
    returnBook(id).then((res) => {
      toast("Returned Book Successfully");
      navigate("/home");
      getRentedBooks();
    });
  };
  return (
    <div className="container">
      <br />
      {rentedbook.length > 0 ? (
        rentedbook
          .filter((e) => {
            if (e.email === email) return email;
          })
          .map((book) => (
            <div key={book.id}>
              <div className="card">
                <h1>My Books</h1>
                <Form>
                  <h1>BookName : {book.title}</h1>
                  <p>
                    <b>Description :</b> {book.Description}
                  </p>
                  <h2>AuthorName : {book.AuthorName}</h2>
                  <p>
                    <b>Price :</b> {book.price}
                  </p>
                  <p>
                    <b>Rented From :</b> {book.RentFrom}
                  </p>
                  <p>
                    <b>Return Date :</b> {book.RentUpto}
                  </p>
                  <Button
                    className="ui button blue"
                    onClick={() => Return(book.id)}
                  >
                    Return Book
                  </Button>
                  <Button className="ui red" onClick={() => navigate(-1)}>
                    Go Back
                  </Button>
                </Form>
              </div>
            </div>
          ))
      ) : (
        <div>No data Found</div>
      )}
    </div>
  );
};

export default RentList;
