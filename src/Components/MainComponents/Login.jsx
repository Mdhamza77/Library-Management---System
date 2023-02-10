import React, { useState } from "react";
import { Form, Button } from "semantic-ui-react";
import { emailValidator, passwordValidator } from "../../utils/Validation/RegexValidator";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { userValidate } from "../../services/User/user.service";
import showPwdImg from "../../assets/Icons/show-password.svg";
import hidePwdImg from "../../assets/Icons/hide-password.svg";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRevealPwd, setIsRevealPwd] = useState(false);
  const x = () => window.location.reload(true);
  const [err, setErr] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!emailValidator(email)) return setErr("Enter valid email Id");
    else if (!passwordValidator(password))
      return setErr("Enter validated password");
    else {
      userValidate(email, password)
        .then((e) => {
          let Admin = false;
          console.log(e.data);

          if (e.data.length < 0) {
            console.log("invalid");
          } else if (e.data[0].email === email) {
            Admin = e.data[0].type === "Admin" ? true : false;
            if (Admin === true) {
              sessionStorage.setItem("email", email);
              sessionStorage.setItem("isAdmin", true);
              sessionStorage.setItem("user", "Admin");
              sessionStorage.setItem("isUserLoggedin", true);

              navigate("/Admin");
              x();
            } else if (!Admin) {
              sessionStorage.setItem("email", email);
              sessionStorage.setItem("isUserLoggedin", true);

              navigate("/home");
              x();
            }
          }
        })
        .catch(() => {
          toast("invalid login");
        });
    }
  };

  return (
    <div className="Forms">
      <div className="card">
        <h1>Login</h1>
        <Form onSubmit={handleSubmit} className="container">
          <Form.Field>
            <label htmlFor="email">Email</label>
            <input
              placeholder="Email"
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Field>
          <div className="pwd-container">
            <Form.Field>
              <label htmlFor="password">
                Password
                <input
                  placeholder="Password"
                  id="password"
                  type={isRevealPwd ? "text" : "password"}
                  value={password}
                  required
                  onChange={(e) => setPassword(e.target.value)}
                  message=" Enter input details"
                />
                <img
                  title={isRevealPwd ? "Hide password" : "Show password"}
                  src={isRevealPwd ? hidePwdImg : showPwdImg}
                  onClick={() => setIsRevealPwd((prevState) => !prevState)}
                />
              </label>
            </Form.Field>
          </div>
          {err.length > 0 && <p>{err}</p>}
          {success.length > 0 && <p>{success}</p>}
          <Button type="submit" className="blue">
            Login
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Login;
