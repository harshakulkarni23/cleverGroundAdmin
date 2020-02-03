import React, { Component } from "react";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <footer id="footer">
        <div className="container text-center">
          <p>Copyright &copy; cleverground</p>
        </div>
      </footer>
    );
  }
}

export default Footer;
