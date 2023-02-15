import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button, TextArea } from "semantic-ui-react";
import { postFeedBack } from "../../../services/Home/home.service";
import { textArea } from "../../../utils/Validation/RegexValidator";

const Feedback = () => {
  const navigate = useNavigate();

  let user = sessionStorage.getItem("email");
  const [feedback, setFeedback] = useState("");

  const Post = async () => {
    const feed = {
      User: user,
      feed: feedback,
    };
    if(!textArea(feedback)) return <p>enter the input field</p>
    else 
    return await postFeedBack(feed)
      .then((res) => {
        setFeedback(res.data);
      })
      .catch((err) => console.log(err.data))
      .then(navigate("/home"));
  };

  return (
    <div className="feedback">
      <div className="card">
        <Form className="">
          <Form.Field>
            <label>User</label>
            <input
              type="text"
              placeholder="user Name"
              required
              value={user}
              readOnly
            />
          </Form.Field>
          <Form.Field>
            <label>Feed Back</label>
            <TextArea
              type="text"
              placeholder="Write FeedBack about Website"
              minlength="10" maxlength="20"
              required
              onChange={(e) => setFeedback(e.target.value)}
            />
          </Form.Field>

          <Button className="blue" onClick={Post}>
            Submit
          </Button>
          <Button className="red" onClick={() => navigate("/home")}>
            Go Back
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Feedback;
