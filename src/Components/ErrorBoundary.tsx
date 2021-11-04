import React, { ErrorInfo } from "react";

class ErrorBoundary extends React.Component {
  state = { hasError: false };
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.log({ error, errorInfo });
  }
  render() {
    if (this.state.hasError) {
      return (
        <>
          <h1>Oops, there is something Wrong!!</h1>
          <a href="/home" onClick={() => this.setState({ hasError: false })}>
            Return to Homepage
          </a>
        </>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
