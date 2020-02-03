import React, { Component } from "react";
import Layout from "../components/common/layout";

class Pages extends Component {
  onSubmit = event => {
    this.props.history.push("/app/aboutUs");
  };
  onSubmitHandler = event => {
    this.props.history.push("/app/theme");
  };
  render() {
    return (
      <Layout showHF={true}>
        <div
          className="container position-relative"
          style={{ minHeight: "600px", marginTop: "100px" }}
        >
          <div className="row mt-5">
            <h2>Select Pages & Features</h2>
          </div>

          <div className="row">
            <div className="col-md-6">
              <strong>Pages</strong>
              <div>HomePage</div>
              <div>About Us</div>
              <div>Courses</div>
              <div>Contact Us</div>
              <div>Blog</div>
            </div>
            <div className="col-md-6">
              <strong>Page Features</strong>
              <div>
                <input type="checkbox" />
                Testimonials
              </div>
              <div>
                <input type="checkbox" />
                Notices
              </div>
              <div>
                <input type="checkbox" />
                Events
              </div>
              <div>
                <input type="checkbox" />
                News
              </div>
              <div>
                <input type="checkbox" />
                Faculty
              </div>
              <div>
                <input type="checkbox" />
                Gallery
              </div>
            </div>
            <div className="col-md-6">
              <strong>Optional Pages</strong>
              <div>
                <input type="checkbox" />
                Faculty
              </div>
              <div>
                <input type="checkbox" />
                Gallery
              </div>

              <div>
                <input type="checkbox" />
                Notices
              </div>
              <div>
                <input type="checkbox" />
                Events
              </div>
              <div>
                <input type="checkbox" />
                News
              </div>
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

export default Pages;
