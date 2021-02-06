import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class NonAuthLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.capitalizeFirstLetter.bind(this);
  }

  capitalizeFirstLetter = (string) => {
    return string.charAt(1).toUpperCase() + string.slice(2);
  };

  componentDidMount() {
    let title = this.capitalizeFirstLetter(this.props.location.pathname);

    document.title = title + " | Twzeef Dashboard";
  }
  render() {
    return <>{this.props.children}</>;
  }
}

export default withRouter(NonAuthLayout);
