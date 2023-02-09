import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button } from "semantic-ui-react";
const List = ({ posts, loading }) => {
  const [value, setValue] = useState("");
  const navigate = useNavigate();
  const Rent = (id) => {
    navigate(`/Rent/` + id);
  };

  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <div className="">
      <Form className="search">
        <div className="ui search">
          <div className="ui icon input">
            <input
              type="text"
              className="prompt"
              placeholder="search Book title"
              onChange={(e) => setValue(e.target.value)}
            />
            <i className="search icon"></i>
            <Button type="submit" className="ui blue">
              Search
            </Button>
          </div>
        </div>
      </Form>
      <div className="container">
        {posts
          .filter(
            (item) =>
              item.title.toLowerCase().includes(value) ||
              item.AuthorName.toLowerCase().includes(value)
          )
          .map((post) => (
            <div key={post.id} className="card">
              <h1>Book Name : {post.title}</h1>
              <p>Description : {post.Description}</p>
              <h3>Author Name : {post.AuthorName}</h3>
              <p>Quantity : {post.Quantity}</p>
              <p>Price : {post.price}</p>
              <p>Book Id : {post.id}</p>
              <Button className="blue" onClick={() => Rent(post.id)}>
                Rent Book
              </Button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default List;
