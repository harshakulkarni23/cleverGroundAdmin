import React from "react";
import { Route, Switch } from "react-router-dom";

// import Dashboard from "../pages/indexPage";
import NotFound from "../pages/notFound";
import LandingPage from "../pages/Landing";
import Pages from "../pages/pages";
import AboutUs from "../pages/aboutUs";
import Theme from "../pages/theme";
import Institute from "../pages/institute";

const App = ({ match, history }) => {
  return (
    <div>
      <Switch>
        {/* organisations
        <Route
          path={`${match.url}/`}
          render={props => <Dashboard {...props} />}
        /> */}
        <Route
          path={`${match.url}/landingPage`}
          render={props => <LandingPage {...props} />}
        />
        <Route
          path={`${match.url}/pages`}
          render={props => <Pages {...props} />}
        />
        <Route
          path={`${match.url}/aboutUs`}
          render={props => <AboutUs {...props} />}
        />
        <Route
          path={`${match.url}/theme`}
          render={props => <Theme {...props} />}
        />
        <Route
          path={`${match.url}/institute`}
          render={props => <Institute {...props} />}
        />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
};

export default App;
