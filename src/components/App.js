import React, { Component } from "react";
import Navigation from "./Navigation";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// Import Core Components
import Home from "./Home";
import Movies from "./movies";
import Contact from "./Contact";
import About from "./About";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navigation />
          <div className="container mt-4">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/home" component={Home} />
              <Route path="/movies" component={Movies} />
              <Route path="/contact" component={Contact} />
              <Route path="/about" component={About} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
