import React, { useState, useEffect } from "react";
import { getAll } from "../../../services/User/user.service";
import { useNavigate } from "react-router-dom";
const Myprofile = () => {
  const [data, getData] = useState([]);
  const email = sessionStorage.getItem("email");
  const navigate = useNavigate();

  const get = async () => {
    return await getAll()
      .then((res) => getData(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    get();
  }, []);
  return (
    <div className="profile">
      <div className="container">
        <div className="ui">
          <div className="ui link cards">
            {data
              .filter((item) => {
                if (item.email === email) {
                  return email;
                }
              })
              .map((mail) => (
                <div className="card" key={mail.id}>
                  <div className="image">
                    <img src={mail.img} alt="" />
                  </div>
                  <div className="content">
                    <div className="header">
                      {mail.firstName + " " + mail.lastName}
                    </div>
                    <div className="meta">
                      <p>"{mail.email}"</p>
                    </div>
                    <div className="description">
                      <b>Description</b>: {mail.content}
                    </div>
                  </div>
                  <div className="extra content">
                    <span className="floated">
                      <b>User ID : {mail.id}</b>
                    </span>
                  </div>
                </div>
              ))}
          </div>
          <br />
        </div>
      </div>
    </div>
  );
};

export default Myprofile;
