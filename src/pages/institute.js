import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { addInstitute } from "../redux/actions/instituteAction";
// import { compose } from "recompose";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Layout from "../components/common/layout";

class Institute extends Component {
  constructor() {
    super();
    this.state = {
      institute: {
        instituteName: "",
        logo: "",
        tagline: "",
        typeOfInstitute: "",
        city: "",
        courses: "",
        address: "",
        phone: "",
        email: "",
        socialLinks: [""],
        googleLocation: "",
        masterUserId: "2"
      }
    };
  }

  onChange = event => {
    console.log("======", event.target.name, event.target.value,event.target.files,">>>>>>>>>>>");
    let { institute } = this.state;
    institute.logo=document.getElementById('logo').files[0].name
    console.log(institute.logo,">>>>>>>>>>>")
    institute = { ...institute,[event.target.name]: event.target.value };
    this.setState({ institute }, () => {
      console.log("========", this.state.institute);
    });
    console.log(event.target.value,">>>>>>>>>>logo")
  };
  onChangeLinks = (index, event) => {
    console.log("name", index, event.target.value);
    let { institute } = this.state;
    institute.socialLinks[index] = event.target.value;
    // institute = { ...institute, socialLinks[i]: event.target.value };
    this.setState({ institute }, () => {
      console.log("hhhhhh", this.state.institute);
    });
  };
  onSubmit = event => {
    let { institute } = this.state;
    // institute.logo=document.getElementById('logo').files[0].name
    let data = {
      payload: {
        institute_name: institute.instituteName,
        logo_url: institute.logo,
        master_institute_id: 2,
        tagline : institute.tagline,
        institute_type : institute.typeOfInstitute,
        institute_city : institute.city,
        courses : institute.courses,
        address : institute.address,
        phone : institute.phone,
        email : institute.email
      }
    };
    console.log(data,">>>>>>>>>data")
    this.props.addInstitute(data).then(() => {
      let res = this.props.addInstitutes;
      console.log("res", res);
    });
    this.props.history.push("/app/theme");
  };

  addSocialLink() {
    let { institute } = this.state;
    console.log("==================", institute.socialLinks);
    institute.socialLinks.push("");
    this.setState({ institute });
  }
  renderSocialLInk() {
    let { institute } = this.state;
    return institute.socialLinks.map((link, index) => {
      return (
        <div className="row">
          <div className="col-md-6">
            <form
              className="px-2"
              style={{ width: "350px", margin: "10px auto" }}
            >
              <div className="form-group">
                <input
                  type="text"
                  onChange={this.onChangeLinks.bind(this, index)}
                  className="form-control"
                  name="socialLinks"
                  id="socialLinks"
                />
              </div>
            </form>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <Layout showHF={true}>
        <div className="container" style={{ marginTop: "100px" }}>
          <div className="row" style={{ marginBottom: "16px" }}>
            <h2>Institute Information</h2>
          </div>
          <div className="row">
            <b>Institute Details</b>
          </div>
          <div className="row">
            <div col-md-6>
              <form enctype="multipart/form-data"
                className="px-2"
                style={{ width: "350px", margin: "10px auto" }}
              >
                <div className="form-group">
                  <label for="name">Institute Name:</label>
                  <input
                    type="text"
                    onChange={this.onChange.bind(this)}
                    className="form-control"
                    name="instituteName"
                    id="name"
                  />
                </div>
              </form>
              <div col-md-6>
                <form
                  className="px-2"
                  style={{ width: "350px", margin: "10px auto" }}
                >
                  {/* <div className="form-group">
                    <label for="name">Institute Name:</label>
                    <input
                      type="text"
                      onChange={this.onChange.bind(this)}
                      className="form-control"
                      name="instituteName"
                      id="name"
                    />
                  </div> */}
                </form>
              </div>
            </div>
            <div col-md-6>
              <form
                className="px-2"
                style={{ width: "350px", margin: "10px auto" }}
              >
                <div className="form-group">
                  <label for="logo">Logo:</label>
                  <input
                    type="file"
                    accept=".jpg,.jpeg,.gif,.png"
                    onChange={this.onChange.bind(this)}
                    className="form-control"
                    name="logo"
                    id="logo"
                  />
                </div>
              </form>
            </div>
            <div col-md-6>
              <form
                className="px-2"
                style={{ width: "350px", margin: "10px auto" }}
              >
                <div className="form-group">
                  <label for="tagline">Tagline:</label>
                  <input
                    type="text"
                    onChange={this.onChange.bind(this)}
                    className="form-control"
                    name="tagline"
                    id="tagline"
                  />
                </div>
              </form>
            </div>
          </div>
          <div className="row">
            <b>For SEO(Upto 10 tags)</b>
          </div>
          <div className="row">
            <div col-md-6>
              <form
                className="px-2"
                style={{ width: "350px", margin: "10px auto" }}
              >
                <div className="form-group">
                  <label for="typeOfInstitute">Type of Institute:</label>
                  <input
                    type="text"
                    onChange={this.onChange.bind(this)}
                    className="form-control"
                    name="typeOfInstitute"
                    id="typeOfInstitute"
                  />
                </div>
              </form>
            </div>
            <div col-md-6>
              <form
                className="px-2"
                style={{ width: "350px", margin: "10px auto" }}
              >
                <div className="form-group">
                  <label for="city">City:</label>
                  <input
                    type="text"
                    onChange={this.onChange.bind(this)}
                    className="form-control"
                    name="city"
                    id="city"
                  />
                </div>
              </form>
            </div>
            <div col-md-6>
              <form
                className="px-2"
                style={{ width: "350px", margin: "10px auto" }}
              >
                <div className="form-group">
                  <label for="courses">Courses:</label>
                  <input
                    type="text"
                    onChange={this.onChange.bind(this)}
                    className="form-control"
                    name="courses"
                    id="courses"
                  />
                </div>
              </form>
            </div>
          </div>
          <div className="row">
            <b>Footer</b>
          </div>
          <div className="row">
            <div col-md-6>
              <form
                className="px-2"
                style={{ width: "350px", margin: "10px auto" }}
              >
                <div className="form-group">
                  <label for="address">Address:</label>
                  <input
                    type="text"
                    onChange={this.onChange.bind(this)}
                    className="form-control"
                    name="address"
                    id="address"
                  />
                </div>
              </form>
            </div>
            <div col-md-6>
              <form
                className="px-2"
                style={{ width: "350px", margin: "10px auto" }}
              >
                <div className="form-group">
                  <label for="phone">Phone(Multiple):</label>
                  <input
                    type="tel"
                    onChange={this.onChange.bind(this)}
                    className="form-control"
                    name="phone"
                    id="phone"
                  />
                </div>
              </form>
            </div>
            <div col-md-6>
              <form
                className="px-2"
                style={{ width: "350px", margin: "10px auto" }}
              >
                <div className="form-group">
                  <label for="email"> Email:</label>
                  <input
                    type="email"
                    onChange={this.onChange.bind(this)}
                    className="form-control"
                    name="email"
                    id="email"
                  />
                </div>
              </form>
            </div>
          </div>
          <div className="row">
            <div col-md-6>
              <form
                className="px-2"
                style={{
                  width: "350px",
                  margin: "10px auto",
                  marginBottom: "-15px"
                }}
              >
                <div className="form-group">
                  <label for="socialLinks">Social Links:</label>
                  {this.renderSocialLInk()}
                </div>
              </form>
            </div>
            <div col-md-6>
              <form
                className="px-2"
                style={{
                  width: "350px",
                  margin: "10px auto",
                  marginBottom: "-15px"
                }}
              >
                <div className="form-group">
                  <label for="location">Google Location:</label>
                  <input
                    type="text"
                    onChange={this.onChange.bind(this)}
                    className="form-control"
                    name="location"
                    id="location"
                  />
                </div>
              </form>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <button
                // disabled={isInvalid}
                className="btn btn-success align-self-start mr-auto"
                type="submit"
                onClick={this.addSocialLink.bind(this)}
              >
                Add
              </button>

              <button
                className="btn btn-success align-self-end ml-auto float-right"
                type="submit"
                onClick={this.onSubmit.bind(this)}
              >
                Save & Next
              </button>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

const mapStateToProps = ({ institute }) => ({
  addInstitutes: institute.addInstitutes
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      addInstitute
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Institute);
