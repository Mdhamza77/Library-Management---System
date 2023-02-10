import React, { useState } from "react";
import { Form, Button } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";
import "../Styles/Home.css";
import { emailValidator, passwordValidator } from "../../utils/Validation/RegexValidator";
import { toast } from "react-toastify";
import { addUser } from "../../services/User/user.service";
export default function Register() {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState(null);
  const [err, setErr] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
    };
    if (!emailValidator(email)) {
      setErr("Enter valid email Id");
    } else if (!passwordValidator(password)) {
      setErr("Enter validated password");
    } else {
      setSuccess("successfully validated");

      addUser(data)
        .then((res) => {
          setData(res.data);
          setFirstName("");
          setLastName("");
          setEmail("");
          setPassword("");
        })
        .catch((err) => {
          console.log(err.data);
        })
        .then(() => {
          toast("Registered Successfully");
          navigate("/Login");
        });
    }
  };

  return (
    <div className="Forms">
      <div className="card">
        <h1>Register</h1>
        <Form onSubmit={handleSubmit} className="container">
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
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Field>
          {err.length > 0 && <p>{err}</p>}
          {success.length > 0 && <p>{success}</p>}
          <Button className="blue" type="submit">
            Signup
          </Button>
        </Form>
      </div>
    </div>
  );
}
