import React, { SFC } from "react";
import { Route } from "react-router-dom";
import Home from "./pages/home";
import Poster from "./pages/poster";

const App: SFC = () => (
  <div>
    <Route exact path="/" component={Home}></Route>
    <Route exact path="/poster" component={Poster}></Route>
    <style jsx global>
      {`
        body {
          margin: 0;
          padding: 0;
        }
        img {
          vertical-align: bottom;
          display: block;
        }
        .slick-track {
          overflow: hidden !important;
        }
      `}
    </style>
  </div>
);

export default App;
