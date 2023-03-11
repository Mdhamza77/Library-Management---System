import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button } from "semantic-ui-react";
const List = ({ posts, loading }) => {
  const [value, setValue] = useState("");
  const navigate = useNavigate();
 
  const handleClick = (id) => {
    navigate("/UBook/" + id);
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
      <div className="ui">
        <div className="ui link cards">
        {posts
          .filter(
            (item) =>
              item.title.toLowerCase().includes(value) ||
              item.AuthorName.toLowerCase().includes(value)
          )
          .map((post) => (
            <div className="card" key={post.id}>
            <div className="image">
              <img src={post.Image} alt=""
               onClick={() => handleClick(post.id)}
                />
            </div>
            <div className="content">
              <div className="header">
                {post.title}
              </div>
              <div className="meta">
                <p>"{post.AuthorName}"</p>
              </div>
              <div className="description">
                <b>Price</b>: {post.price}
              </div>
            </div>
            <div className="extra content">
              <span className="floated">
                <b>Book ID : {post.id}</b>
              </span>
            </div>
          </div>
          ))}
          </div>
      </div>
    </div>
  );
};

export default List;
