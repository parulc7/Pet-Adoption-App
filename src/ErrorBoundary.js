import React from "react";
import { Link, navigate, Redirect } from "@reach/router";

class ErrorBoundary extends React.Component {
  state = { hasError: false, redirect: false };

  static getDerivedStateFromError = () => {
    return { hasError: true };
  };

  componentDidCatch(error, info) {
    console.error("Error Boundary caught an error :: \n", error, info);
  }

  componentDidUpdate() {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }
    if (this.state.hasError) {
      // We can also use navigate to return to home instead of creating a seperate redirect state to handle
      // redirects
      setTimeout(() => this.setState({ redirect: true }), 5000);
    }
  }
  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }
    if (this.state.hasError) {
      return (
        <p>
          There was an error in this listing.<Link to="/">Click here</Link> to
          go to home page or wait 5 seconds.
        </p>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
