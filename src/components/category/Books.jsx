import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Form } from "semantic-ui-react";
import { getCategory, deleteBooks } from "./../../services/book/book.service";
import { useNavigate, useParams } from "react-router-dom";
const Books = () => {
  const isUserLoggedin = sessionStorage.getItem("isUserLoggedin")
    ? sessionStorage.getItem("isUserLoggedin")
    : false;
  const isAdmin = sessionStorage.getItem("isAdmin")
    ? sessionStorage.getItem("isAdmin")
    : false;

  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const { category } = useParams();
  const get = async () => {
    return await getCategory(category)
      .then((resp) => {
        console.log(resp.data);
        setData(resp.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    get();
  }, []);

  const Delete = (id) => {
    deleteBooks(id).then((res) => console.log(res.data));
  };

  const Edit = (id) => {
    navigate("/EditBooks/" + id);
  };

  const Rent = (id) => {
    navigate(`/Rent/` + id);
  };
  return (
    <div className="">
      {data
        .filter((item) => item.category)
        .map((item) => (
          <div className="card">
            <Form>
              <div className="container">
                <img className="book-Img" src={item.Image} />
                <h1>Title : {item.title}</h1>
                <p>Description : {item.Description}</p>
                <p> Category : {item.category}</p>
                <p> AuthorName : {item.AuthorName}</p>
                <p>Quantity : {item.Quantity}</p>
                {isUserLoggedin && !isAdmin && (
                  <Button className="blue" onClick={() => Rent(item.id)}>
                    Rent
                  </Button>
                )}
                {isUserLoggedin && isAdmin && (
                  <Button className="blue" onClick={() => Edit(item.id)}>
                    Edit Books
                  </Button>
                )}
                {isUserLoggedin && isAdmin && (
                  <Button className="red" onClick={() => Delete(item.id)}>
                    Delete
                  </Button>
                )}
              </div>
            </Form>
          </div>
        ))}
    </div>
  );
};

export default Books;
