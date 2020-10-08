import React from "react";
import { render } from "react-dom";
import SearchParams from "./SearchParams";
import { Router } from "@reach/router";
import Details from "./Details";
class App extends React.Component {
  render() {
    return (
      <React.StrictMode>
        <div>
          <h1>Adopt Me!</h1>
          <Router>
            <SearchParams path="/" />
            <Details path="/details/:id" />
          </Router>
        </div>
      </React.StrictMode>
    );
  }
}

render(<App />, document.getElementById("root"));
