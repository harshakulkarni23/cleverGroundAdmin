import React, { Component } from "react";
import Layout from "../components/common/layout";

class LandingPage extends Component {
  onSubmit = event => {
    this.props.history.push("/app/institute");
  };
  render() {
    return (
      <Layout showHF={true}>
        <div className="container">
          <div className="row">
            <h2>Setup your Website</h2>
          </div>

          <div
            className="container"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <p style={{ textAlign: "center", marginTop: "120px" }}>
              Setup your website
            </p>
            <button
              type="button"
              className="btn btn-primary text-center"
              style={{
                width: 100,
                backgroundColor: "#66666",
                marginTop: "200px",
                marginLeft: "-120px"
              }}
              onClick={this.onSubmit}
            >
              Start
            </button>
          </div>
        </div>
      </Layout>
    );
  }
}

export default LandingPage;
