import React, { Component } from "react";
import Layout from "../components/common/layout";

class AboutUs extends Component {
  render() {
    return (
      <Layout showHF={true}>
        <div
          className="container position-relative"
          style={{ minHeight: "600px", marginTop: "100px" }}
        >
          <div className="row mt-3">
            <h2>Page Editor: About Us</h2>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div
                className="nav flex-column nav-pills"
                id="v-pills-tab"
                role="tablist"
                aria-orientation="vertical"
              >
                <a
                  className="nav-link active"
                  id="v-pills-home-tab"
                  data-toggle="pill"
                  href="#v-pills-home"
                  role="tab"
                  aria-controls="v-pills-home"
                  aria-selected="true"
                >
                  Who we are
                </a>
                <a
                  className="nav-link"
                  id="v-pills-profile-tab"
                  data-toggle="pill"
                  href="#v-pills-profile"
                  role="tab"
                  aria-controls="v-pills-profile"
                  aria-selected="false"
                >
                  Director's Message
                </a>
                <a
                  className="nav-link"
                  id="v-pills-messages-tab"
                  data-toggle="pill"
                  href="#v-pills-messages"
                  role="tab"
                  aria-controls="v-pills-messages"
                  aria-selected="false"
                >
                  What we offer
                </a>
                <a
                  className="nav-link"
                  id="v-pills-settings-tab"
                  data-toggle="pill"
                  href="#v-pills-settings"
                  role="tab"
                  aria-controls="v-pills-settings"
                  aria-selected="false"
                >
                  Unique Features
                </a>
                <a
                  className="nav-link"
                  id="v-pills-team-tab"
                  data-toggle="pill"
                  href="#v-pills-team"
                  role="tab"
                  aria-controls="v-pills-team"
                  aria-selected="false"
                >
                  Executive Team
                </a>
                <a
                  className="nav-link"
                  id="v-pills-testimonial-tab"
                  data-toggle="pill"
                  href="#v-pills-testimonial"
                  role="tab"
                  aria-controls="v-pills-testimonial"
                  aria-selected="false"
                >
                  Testimonials
                </a>
              </div>
            </div>
            <div className="col-md-8">
              <div className="tab-content" id="v-pills-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="v-pills-home"
                  role="tabpanel"
                  aria-labelledby="v-pills-home-tab"
                >
                  <div>
                    <h3>1. Who we are</h3>
                    <div
                      className="container position-relative"
                      style={{ minHeight: "600px" }}
                    >
                      <div className="row" style={{ marginTop: "20px" }}></div>
                      <strong>Style</strong>
                      <div className="row">
                        <div col-md-3>
                          <form
                            className="px-2"
                            style={{
                              width: "160px",
                              height: "100px",
                              margin: "10px auto",
                              marginRight: "15px"
                            }}
                          >
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-control"
                                id="title"
                                style={{ width: "160px", height: "100px" }}
                              />
                            </div>
                          </form>
                        </div>
                        <div col-md-3>
                          <form
                            className="px-2"
                            style={{
                              width: "160px",
                              height: "100px",
                              margin: "10px auto",
                              marginRight: "15px"
                            }}
                          >
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-control"
                                id="title"
                                style={{ width: "160px", height: "100px" }}
                              />
                            </div>
                          </form>
                        </div>
                        <div col-md-3>
                          <form
                            className="px-2"
                            style={{
                              width: "160px",
                              height: "100px",
                              margin: "10px auto",
                              marginRight: "15px"
                            }}
                          >
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-control"
                                id="title"
                                style={{ width: "160px", height: "100px" }}
                              />
                            </div>
                          </form>
                        </div>
                        <div col-md-3>
                          <form
                            className="px-2"
                            style={{
                              width: "160px",
                              height: "100px",
                              margin: "10px auto",
                              marginRight: "15px"
                            }}
                          >
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-control"
                                id="title"
                                style={{ width: "160px", height: "100px" }}
                              />
                            </div>
                          </form>
                        </div>
                      </div>
                      <div col-md-6>
                        <form style={{ width: "350px", marginTop: "10px" }}>
                          <div className="form-group">
                            <label for="name">
                              <strong>Add Image:</strong>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              name="name"
                              id="name"
                            />
                          </div>
                        </form>
                      </div>
                      <div>
                        <div className="row" style={{ marginTop: "20px" }}>
                          <strong>Description</strong>
                          <div className="col-md-12">
                            <textarea rows="10" cols="80"></textarea>
                          </div>
                        </div>
                      </div>
                      <div
                        className="position-absolute"
                        style={{ right: "0px", bottom: "20px" }}
                      >
                        <button
                          // disabled={isInvalid}
                          className="btn btn-default "
                          style={{ marginRight: "10px" }}
                          type="submit"
                          onClick={this.onSubmitHandler}
                        >
                          Cancel
                        </button>
                        <button
                          // disabled={isInvalid}
                          className="btn btn-success "
                          style={{ marginRight: "10px" }}
                          type="submit"
                          onClick={this.onSubmitHandler}
                        >
                          Save & Preview
                        </button>

                        <button
                          className="btn btn-success"
                          type="submit"
                          onClick={this.onSubmit}
                        >
                          Save & Publish
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="v-pills-profile"
                  role="tabpanel"
                  aria-labelledby="v-pills-profile-tab"
                >
                  2
                </div>
                <div
                  className="tab-pane fade"
                  id="v-pills-messages"
                  role="tabpanel"
                  aria-labelledby="v-pills-messages-tab"
                >
                  3
                </div>
                <div
                  className="tab-pane fade"
                  id="v-pills-settings"
                  role="tabpanel"
                  aria-labelledby="v-pills-settings-tab"
                >
                  4
                </div>
                <div
                  className="tab-pane fade"
                  id="v-pills-team"
                  role="tabpanel"
                  aria-labelledby="v-pills-team-tab"
                >
                  5
                </div>
                <div
                  className="tab-pane fade"
                  id="v-pills-testimonial"
                  role="tabpanel"
                  aria-labelledby="v-pills-testimonial-tab"
                >
                  <div>
                    <h3>6. Testimonials(Variable)</h3>
                    <div
                      className="container position-relative"
                      style={{ minHeight: "600px" }}
                    >
                      <div className="row" style={{ marginTop: "20px" }}></div>
                      <strong>Style</strong>

                      <div className="row">
                        <div col-md-3>
                          <form
                            className="px-2"
                            style={{
                              width: "160px",
                              height: "150px",
                              margin: "10px auto",
                              marginRight: "15px"
                            }}
                          >
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-control"
                                id="title"
                                style={{ width: "160px", height: "150px" }}
                              />
                            </div>
                          </form>
                        </div>
                        <div col-md-3>
                          <form
                            className="px-2"
                            style={{
                              width: "160px",
                              height: "150px",
                              margin: "10px auto",
                              marginRight: "15px"
                            }}
                          >
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-control"
                                id="title"
                                style={{ width: "160px", height: "150px" }}
                              />
                            </div>
                          </form>
                        </div>
                        <div col-md-3>
                          <form
                            className="px-2"
                            style={{
                              width: "160px",
                              height: "150px",
                              margin: "10px auto",
                              marginRight: "15px"
                            }}
                          >
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-control"
                                id="title"
                                style={{ width: "160px", height: "150px" }}
                              />
                            </div>
                          </form>
                        </div>
                        <div col-md-3>
                          <form
                            className="px-2"
                            style={{
                              width: "160px",
                              height: "150px",
                              margin: "10px auto",
                              marginRight: "15px"
                            }}
                          >
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-control"
                                id="title"
                                style={{ width: "160px", height: "150px" }}
                              />
                            </div>
                          </form>
                        </div>
                      </div>

                      <div className="row" style={{ marginTop: "30px" }}>
                        <strong>Testimonials</strong>
                        <div className="container">
                          <div className="row" style={{ marginTop: "40px" }}>
                            <button
                              // disabled={isInvalid}
                              className="btn btn-success"
                              type="submit"
                              onClick={this.onSubmitHandler}
                            >
                              Add Testimonial
                            </button>
                          </div>
                        </div>
                      </div>
                      <div
                        className="position-absolute"
                        style={{ right: "0px", bottom: "20px" }}
                      >
                        <button
                          // disabled={isInvalid}
                          className="btn btn-default "
                          style={{ marginRight: "10px" }}
                          type="submit"
                          onClick={this.onSubmitHandler}
                        >
                          Cancel
                        </button>
                        <button
                          // disabled={isInvalid}
                          className="btn btn-success "
                          style={{ marginRight: "10px" }}
                          type="submit"
                          onClick={this.onSubmitHandler}
                        >
                          Save & Preview
                        </button>

                        <button
                          className="btn btn-success"
                          type="submit"
                          onClick={this.onSubmit}
                        >
                          Save & Publish
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default AboutUs;
