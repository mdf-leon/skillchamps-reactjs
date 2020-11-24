import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./Skillchamps.css";
import * as serviceWorker from "./serviceWorker";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import { ThemeProvider } from "styled-components";

// import App from "./App";
import Home from "./pages/visitor/Home/index.tsx";
import Login from "./pages/visitor/Login";
import Register from "./pages/visitor/Register";
import Dashboard from "./pages/signed/Dashboard/";
import TrialsChooseDashboard from "./pages/signed/Dashboard/trialsChooseDashboard";
import Scores from "./pages/signed/score";
import TrialsAndRiderChoose from "./pages/signed/score/before";
import Rider from "./pages/signed/Rider";
import NewRider from "./pages/signed/Rider/newRider";
import Trials from "./pages/signed/Trials";
import NewTrials from "./pages/signed/Trials/newTrials";
// import Events from "./pages/signed/Events";
// import Institute from "./pages/signed/Institute";
import NewInstitute from "./pages/signed/Institute/newInstitute";
// import CreateEvent from "./pages/signed/CreateEvent";
// import ManageEvent from "./pages/signed/ManageEvent";
import ManageableEvents from "./pages/signed/ManageableEvents";
import NewEvent from "./pages/signed/ManageableEvents/newEvent";
import BeforePoints from "./pages/signed/points/before";
import Points from "./pages/signed/points";
import EventOptions from "./pages/signed/EventOptions";

import theme from "./styles/theme";

function ProtectedRoute(props) {
  let token = localStorage.getItem("token");
  if (token === null || token === undefined) {
    return <Redirect to="/login" />;
  } else {
    return <Route {...props} />;
  }
}

function VisitorRoute(props) {
  let token = localStorage.getItem("token");
  if (token === null || token === undefined) {
    return <Route {...props} />;
  } else {
    return <Redirect to="/ManageableEvents" />;
  }
}

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Router>
      <Switch>
        {/* <Route path="/" component={App} /> */}
        <Route exact path="/" component={Home} />
        <VisitorRoute exact path="/login" component={Login} />
        <VisitorRoute exact path="/register" component={Register} />
        <ProtectedRoute
          exact
          path="/dashboard/event/:event_id/trial/:trial_id"
          component={Dashboard}
        />
        <ProtectedRoute
          exact
          path="/trialsChooseDashboard"
          component={TrialsChooseDashboard}
        />
        <ProtectedRoute exact path="/editScores/:score_id" component={Scores} />
        <ProtectedRoute
          exact
          path="/trialsAndRiderChoose"
          component={TrialsAndRiderChoose}
        />
        <ProtectedRoute exact path="/riders" component={Rider} />
        <ProtectedRoute exact path="/newRider" component={NewRider} />
        <ProtectedRoute exact path="/Trials" component={Trials} />
        <ProtectedRoute exact path="/newTrial" component={NewTrials} />
        {/* <ProtectedRoute exact path="/events" component={Events} /> */}
        {/* <ProtectedRoute exact path="/manageInstitute" component={Institute} /> */}
        <ProtectedRoute exact path="/newInstitute" component={NewInstitute} />
        {/* <ProtectedRoute exact path="/createEvent" component={CreateEvent} /> */}
        {/* <ProtectedRoute exact path="/manageEvent" component={ManageEvent} /> */}
        <ProtectedRoute exact path="/eventOptions" component={EventOptions} />
        <ProtectedRoute
          exact
          path="/manageableEvents"
          component={ManageableEvents}
        />
        <ProtectedRoute exact path="/newEvent" component={NewEvent} />
        <ProtectedRoute exact path="/beforePoints" component={BeforePoints} />
        <ProtectedRoute exact path="/points" component={Points} />
        {/* <Route exact path="/portfolio/:id" component={App} />
                <Route path="/contact" component={App} /> */}
      </Switch>
    </Router>
  </ThemeProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
