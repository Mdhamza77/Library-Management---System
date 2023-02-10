
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { Form, Button } from "semantic-ui-react";
import "../Styles/Home.css";
import { getUser, editUser } from "../../services/User/user.service";

const EditUser = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { id } = useParams();

  useEffect(() => {
    get();
  }, []);

  const get = () => {
    getUser(id)
      .then((resp) => {
        setFirstName(resp.data.firstName);
        setLastName(resp.data.lastName);
        setEmail(resp.data.email);
        setPassword(resp.data.password);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
    };
    editUser(id, user)
      .then((res) => {
        console.log(res.data);
        get();
        toast("Updated Sucessfully");
        navigate("/Admin");
      })
      .catch((err) => {
        console.log(err.data);
      });
  };

  return (
    <div className="Forms">
      <div className="card">
        <br />
        <h1 className="">Edit User</h1>
        <Form className="container">
          <Form.Field>
            <label htmlFor="firstN">First Name</label>
            <input
              placeholder="First Name"
              id="firstN"
              type="text"
              value={firstName}
              required
              maxLength="10"
              onChange={(e) => setFirstName(e.target.value)}
            />
          </Form.Field>

          <Form.Field>
            <label htmlFor="lastN">Last Name</label>
            <input
              placeholder="Last Name"
              id="lastN"
              type="text"
              value={lastName}
              required
              minLength="2"
              maxLength="10"
              onChange={(e) => setLastName(e.target.value)}
            />
          </Form.Field>

          <Form.Field>
            <label htmlFor="email">Email</label>
            <input
              placeholder="Email"
              id="email"
              type="email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Field>

          <Form.Field>
            <label htmlFor="password">Password</label>
            <input
              placeholder="Password"
              id="password"
              type="password"
              value={password}
              required
              disabled
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Field>

          <Button className="blue" onClick={handleSubmit}>
            Save
          </Button>
          <Button className="red" onClick={() => navigate("/User")}>
            Go Back
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default EditUser;
