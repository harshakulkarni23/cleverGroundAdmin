import React, { Component } from "react";
import Layout from "../components/common/layout";

export class theme extends Component {
  onSubmit = event => {
    this.props.history.push("/app/pages");
  };
  onSubmitHandler = event => {
    this.props.history.push("/app/institute");
  };
  render() {
    return (
      <Layout showHF={true}>
        <div
          className="container position-relative"
          style={{ minHeight: "650px", marginTop: "100px" }}
        >
          <div className="row" style={{ marginBottom: "16px" }}>
            <h2>Website Theme</h2>
          </div>
          <div className="row">
            <b>Colors</b>
          </div>
          <div className="row">
            <div col-md-6>
              <form
                className="px-2"
                style={{ width: "350px", margin: "10px auto" }}
              >
                <div className="form-group">
                  <label for="name">Primary Color:</label>
                  <input type="text" className="form-control" id="name" />
                </div>
              </form>
            </div>
            <div col-md-6>
              <form
                className="px-2"
                style={{ width: "350px", margin: "10px auto" }}
              >
                <div className="form-group">
                  <label for="logo">Secondary Color:</label>
                  <input type="text" className="form-control" id="logo" />
                </div>
              </form>
            </div>
          </div>
          <div className="row">
            <b>Font</b>
          </div>
          <div className="row">
            <div col-md-6>
              <form
                className="px-2"
                style={{ width: "400px", margin: "10px auto" }}
              >
                <div className="form-group">
                  <label for="name">Title:</label>
                  <input type="text" className="form-control" id="name" />
                </div>
              </form>
            </div>
            <div col-md-6>
              <form
                className="px-2"
                style={{ width: "400px", margin: "10px auto" }}
              >
                <div className="form-group">
                  <label for="logo">Content:</label>
                  <input type="text" className="form-control" id="logo" />
                </div>
              </form>
            </div>
          </div>
          <div className="row"></div>
          <b>Choose a theme</b>
          <div className="row">
            <div col-md-3>
              <form
                className="px-2"
                style={{
                  width: "200px",
                  height: "200px",
                  margin: "10px auto",
                  marginRight: "15px"
                }}
              >
                <div className="form-group">
                  <label for="title">Title:</label>
                  <input
                    type="text"
                    class="form-control"
                    id="title"
                    style={{ width: "200px", height: "200px" }}
                  />
                </div>
              </form>
            </div>
            <div col-md-3>
              <form
                className="px-2"
                style={{
                  width: "200px",
                  height: "200px",
                  margin: "10px auto",
                  marginRight: "15px"
                }}
              >
                <div className="form-group">
                  <label for="title">Title:</label>
                  <input
                    type="text"
                    class="form-control"
                    id="title"
                    style={{ width: "200px", height: "200px" }}
                  />
                </div>
              </form>
            </div>
            <div col-md-3>
              <form
                className="px-2"
                style={{
                  width: "200px",
                  height: "200px",
                  margin: "10px auto",
                  marginRight: "15px"
                }}
              >
                <div className="form-group">
                  <label for="title">Title:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    style={{ width: "200px", height: "200px" }}
                  />
                </div>
              </form>
            </div>
            <div col-md-3>
              <form
                className="px-2"
                style={{
                  width: "200px",
                  height: "150px",
                  margin: "10px auto",
                  marginRight: "15px"
                }}
              >
                <div className="form-group">
                  <label for="title">Title:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    style={{ width: "200px", height: "200px" }}
                  />
                </div>
              </form>
            </div>
          </div>
          <div
            className="position-absolute"
            style={{ right: "0px", bottom: "20px" }}
          >
            <button
              // disabled={isInvalid}
              className="btn btn-success "
              style={{ marginRight: "10px" }}
              type="submit"
              onClick={this.onSubmitHandler}
            >
              Previous
            </button>

            <button
              className="btn btn-success"
              type="submit"
              onClick={this.onSubmit}
            >
              Save & Next
            </button>
          </div>
        </div>
      </Layout>
    );
  }
}

export default theme;
