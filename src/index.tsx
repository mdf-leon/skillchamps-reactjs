import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import { ThemeProvider } from "styled-components";

// import App from "./App";
import Home from "./pages/visitor/Home/index";
import SharedHome from "./pages/RiderDashboard/Home/index";
import Login from "./pages/visitor/Login";
import Register from "./pages/visitor/Register";
import RegisterRider from "./pages/visitor/Register/Rider";
import RegisterInstitute from "./pages/visitor/Register/Institute";
import Dashboard from "./pages/InstituteDashboard/Dashboard";
import FindEvents from "./pages/RiderDashboard/SignToEvent";
import SubscribeEvent from "./pages/RiderDashboard/SignToEvent/subscribeEvent";
import TrialsChooseDashboard from "./pages/InstituteDashboard/Dashboard/trialsChooseDashboard";
import BeforeResult from "./pages/InstituteDashboard/Result/beforeResults";
import Result from "./pages/InstituteDashboard/Result";
import Scores from "./pages/InstituteDashboard/score";
import TrialsAndRiderChoose from "./pages/InstituteDashboard/score/before";
import Rider from "./pages/InstituteDashboard/Rider";
import NewRider from "./pages/InstituteDashboard/Rider/newRider";
import Trials from "./pages/InstituteDashboard/Trials";
import NewTrials from "./pages/InstituteDashboard/Trials/newTrials";
// import Events from "./pages/signed/Events";
// import Institute from "./pages/signed/Institute";
import NewInstitute from "./pages/InstituteDashboard/Institute/newInstitute";
// import CreateEvent from "./pages/signed/CreateEvent";
// import ManageEvent from "./pages/signed/ManageEvent";
import ManageableEvents from "./pages/InstituteDashboard/ManageableEvents";
import NewEvent from "./pages/InstituteDashboard/ManageableEvents/newEvent";
import BeforePoints from "./pages/InstituteDashboard/points/before";
import Points from "./pages/InstituteDashboard/points";
import EventOptions from "./pages/InstituteDashboard/EventOptions";
import GlobalStyles from "./global/global";
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
    return <Redirect to="/dashboard/home" />;
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
        <VisitorRoute exact path="/register/Rider" component={RegisterRider} />
        <VisitorRoute
          exact
          path="/register/Institute"
          component={RegisterInstitute}
        />
        <Route
          exact
          path="/dashboard/event/:event_id/trial/:trial_id"
          component={Dashboard}
        />

        <ProtectedRoute exact path="/dashboard/home" component={SharedHome} />

        <ProtectedRoute exact path="/beforeResult" component={BeforeResult} />
        <Route exact path="/result" component={Result} />
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
        <ProtectedRoute exact path="/points" component={Points} />
        <ProtectedRoute exact path="/dashboard/sign-to-event" component={FindEvents} />
        <ProtectedRoute
          exact
          path="/subscribeEvent/:id"
          component={SubscribeEvent}
        />
        {/* <Route exact path="/portfolio/:id" component={App} />
                <Route path="/contact" component={App} /> */}
      </Switch>
    </Router>
    <GlobalStyles />
  </ThemeProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
