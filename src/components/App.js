import React, { Component } from "react";
import Navigation from "./Navigation";
import { BrowserRouter, Route } from "react-router-dom";

import Home from "./Home";
import Movies from "./movies";
import Contact from "./Contact";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navigation />
          <div className="container mt-4">
            <Route exact path="/" component={Home} />
            <Route path="/home" component={Home} />
            <Route path="/movies" component={Movies} />
            <Route path="/contact" component={Contact} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
