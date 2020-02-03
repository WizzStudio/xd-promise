import React, { SFC } from "react";
import { Route } from "react-router-dom";
import Home from "./pages/home";
import Poster from "./pages/poster";

const App: SFC = () => (
  <div>
    <Route path="/home" component={Home}></Route>
    <Route path="/poster" component={Poster}></Route>
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
      `}
    </style>
  </div>
);

export default App;
