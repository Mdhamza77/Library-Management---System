import React, { useState, useEffect } from "react";
import "../Styles/Home.css";
import {
  getHome,
  getCards,
  getFeedBack,
} from "../../services/Home/home.service";
const Homepage = () => {
  const [feedback, getFeedB] = useState([]);
  const [card, getCard] = useState([]);
  const [home, getHom] = useState([]);

  const get = async () => {
    return await getHome()
      .then((res) => getHom(res.data))
      .catch((err) => console.log(err));
  };

  const getFeed = async () => {
    return await getFeedBack().then((res) => {
      getFeedB(res.data);
    });
  };

  const getCardss = async () => {
    return await getCards()
      .then((res) => {
        getCard(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err.data));
  };

  useEffect(() => {
    get();
    getFeed();
    getCardss();
  }, []);

  return (
    <div>
      <div>
        <div className="" id="segment">
          {home.map((item) => (
            <div>
              <img className="img" src={item.img} alt="" />
              <h1>{item.title}</h1>
              <p>{item.About}</p>
              <p className="ui center">{item.sub}</p>
              <br />
            </div>
          ))}
        </div>
        <br />

        <div className="ui">
          <div className="ui link cards">
            {card.map((item) => (
              <div className="card" key={item.id}>
                <div className="image">
                  <img src={item.img} alt="" />
                </div>
                <div className="content">
                  <div className="header">{item.title}</div>
                  <div className="meta">
                    <a href="/">"{item.author}"</a>
                  </div>
                  <div className="description">{item.content}</div>
                </div>
                <div className="extra content">
                  <span className="floated">{item.published}</span>
                </div>
              </div>
            ))}
          </div>
          <br />
        </div>

        {feedback.map((feed) => (
          <div className="uis">
            <section className="review" id="review">
              <h1 className="heading">
                {" "}
                <span></span>{" "}
              </h1>

              <div className="box-container">
                <div className="">
                  <div className="box">
                    <div className="stars">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </div>
                    <p>"{feed.feed}"</p>
                    <div className="user">
                      <img
                        src="https://thumbs.dreamstime.com/b/solid-purple-gradient-user-icon-web-mobile-design-interface-ui-ux-developer-app-137467998.jpg"
                        alt=""
                      />
                      <div className="user-info">
                        <h3>{feed.User}</h3>
                        <span>Happy Explorers</span>
                      </div>
                    </div>
                    <span className="fas fa-quote-right"></span>
                  </div>
                </div>
              </div>
            </section>
          </div>
        ))}
      </div>

      <div>
        <section className="footer">
          <div className="box-container">
            <div className="box">
              <h3>quick links</h3>
              <a href="/">home</a>
              <a href="/">about</a>
              <a href="/">review</a>
            </div>

            <div className="box">
              <h3>contact info</h3>
              <a href="/">9080724529</a>
              <a href="/">example@gmail.com</a>
              <a href="/">Chennai, india - 6000028</a>
            </div>
          </div>

          <div className="credit">
            {" "}
            created by{" "}
            <span>
              <i class="copyright icon"></i>Hamza
            </span>{" "}
            | all rights reserved{" "}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Homepage;
