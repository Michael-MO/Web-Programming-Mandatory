import React, { Component } from "react";
import Navigation from "./Navigation";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// Import Core Components
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import Posts from "./Posts";
import Movies from "./Movies";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navigation />
          <div className="container mt-5">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/home" component={Home} />
              <Route path="/posts" component={Posts} />
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
