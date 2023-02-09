import React, { useEffect } from "react";
import Routing from "../Components/Routing/Routing";
import Navigation from "../Components/Layouts/Navigation";
const Home = () => {
  return (
    <div>
      <Navigation />
      <br />
      <br />
      <Routing />
    </div>
  );
};

export default Home;
