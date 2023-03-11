import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Category = () => {
  const [books, getBooks] = useState([]);

  const navigate = useNavigate();
  const get = async () => {
    return await axios
      .get("http://localhost:8080/Category")
      .then((res) => {
        getBooks(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err.data));
  };

  useEffect(() => {
    get();
  }, []);

  const Category = (category) => {
    navigate("/books/" + category);
  };
  return (
    <div className="cat">
      {" "}
      <br />
      <br />
      <br />
      <div class="ui four column grid">
        {books.map((post) => (
          <div class="column" key={post.id}>
            <div class="ui fluid card">
              <div class="image">
                <img
                  src={post.Img}
                  alt=""
                  onClick={() => Category(post.category)}
                />
              </div>
              <div class="content">
                <a class="header">{post.category}</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
