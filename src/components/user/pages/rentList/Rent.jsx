import React, { useEffect, useState } from "react";
import { Form, Button } from "semantic-ui-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { getBooks } from "../../../../services/book/book.service";
import { rentBooks } from "../../../../services/rent/rent.service";
const RentList = () => {
  const navigate = useNavigate();
  const [bookName, setBookName] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [description, setDescription] = useState("");
  const [getquantity, setGetQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const email = sessionStorage.getItem("email");
  const { id } = useParams();

  useEffect(() => {
    getBooks(id)
      .then((resp) => {
        setBookName(
          resp.data.title,
          setAuthorName(resp.data.AuthorName),
          setDescription(resp.data.Description),
          setGetQuantity(resp.data.Quantity),
          setPrice(resp.data.price)
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const handleSubmit = () => {
    const rent = {
      title: bookName,
      Description: description,
      AuthorName: authorName,
      price,
      email: email,
      RentFrom: startDate.toDateString(),
      RentUpto: endDate.toDateString(),
      BookId: id,
    };

    rentBooks(rent)
      .then((resp) => {
        console.log(resp.data);
        toast("Book Rented");
        navigate("/home");
      })
      .catch((err) => {
        console.log(err.data);
      });
  };

  return (
    <>
      <div className="container">
        <br />
        <div className="card">
          <Form className="ui form">
            <h1>Book Name: {bookName}</h1>
            <p>
              <b>Book ID: {id}</b>
            </p>
            <p>
              <b>Description :</b> {description}{" "}
            </p>
            <p>
              <b>Author Name: {authorName}</b>
            </p>
            <p>
              <b>Price: </b>
              {price}
            </p>
            <Form.Field>
              <label htmlFor="rentF">Rent Book From</label>
              <DatePicker
                placeholderText="Rent From"
                showTimeSelect
                minDate={startDate}
                dateFormat="MMMM d, yyyy"
                selected={startDate}
                selectsStart
                startDate={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </Form.Field>
            <Form.Field>
              <label htmlFor="rentU">Rent Book Upto Days</label>
              <DatePicker
                placeholderText="Rent Upto"
                dateFormat="MMMM d, yyyy"
                selected={endDate}
                endDate={endDate}
                minDate={startDate}
                onChange={(date) => setEndDate(date)}
              />
            </Form.Field>

            <Button className="ui button blue" onClick={handleSubmit}>
              Rent Book
            </Button>
            <Button className="ui button red" onClick={() => navigate(-1)}>
              Go Back
            </Button>
          </Form>
        </div>
      </div>
      <br />
    </>
  );
};

export default RentList;
