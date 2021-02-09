import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import { ThemeProvider } from 'styled-components';

// import App from "./App";
import Home from './pages/visitor/Home/index';
import RiderHome from './pages/RiderDashboard/Home';
import InstituteHome from './pages/InstituteDashboard/Home';
import SignedEvent from './pages/RiderDashboard/SignedEvent';
import ViewPastEvent from './pages/RiderDashboard/ViewPastEvent';
import Login from './pages/visitor/Login';
import Register from './pages/visitor/Register';
import RegisterRider from './pages/visitor/Register/Rider';
import RegisterInstitute from './pages/visitor/Register/Institute';
import Dashboard from './pages/InstituteDashboard/Dashboard';
import FindEvents from './pages/RiderDashboard/SignToEvent';
import SubscribeEvent from './pages/RiderDashboard/SignToEvent/SubscribeEvent';
import TrialsChooseDashboard from './pages/InstituteDashboard/Dashboard/trialsChooseDashboard';
import BeforeResult from './pages/InstituteDashboard/Result/beforeResults';
import Result from './pages/InstituteDashboard/Result';
import Scores from './pages/InstituteDashboard/score';
import TrialsAndRiderChoose from './pages/InstituteDashboard/score/before';
import Rider from './pages/InstituteDashboard/Rider';
import NewRider from './pages/InstituteDashboard/Rider/newRider';
import Trials from './pages/InstituteDashboard/Trials';
import NewTrials from './pages/InstituteDashboard/Trials/newTrials';
// import Events from "./pages/signed/Events";
// import Institute from "./pages/signed/Institute";
import NewInstitute from './pages/InstituteDashboard/Institute/newInstitute';
// import CreateEvent from "./pages/signed/CreateEvent";
// import ManageEvent from "./pages/signed/ManageEvent";
import ManageableEvents from './pages/InstituteDashboard/ManageableEvents';
import NewEvent from './pages/InstituteDashboard/ManageableEvents/newEvent';
import BeforePoints from './pages/InstituteDashboard/points/before';
import Points from './pages/InstituteDashboard/points';
import UpdateEvent from './pages/InstituteDashboard/Event/UpdateEvent';
import CreateEvent from './pages/InstituteDashboard/Event/CreateEvent';
import EventOptions from './pages/InstituteDashboard/Event/EventOptions';
import GlobalStyles from './global/global';
import theme from './styles/theme';

function ProtectedRoute(props) {
  let token = localStorage.getItem('token');
  if (token === null || token === undefined) {
    return <Redirect to="/login" />;
  } else {
    return <Route {...props} />;
  }
}

function VisitorRoute(props) {
  let token = localStorage.getItem('token');
  if (token === null || token === undefined) {
    return <Route {...props} />;
  } else {
    if (localStorage.getItem('institute_info') !== null) {
      return (
        <Redirect
          to={`/dashboard/institute/${
            JSON.parse(localStorage.getItem('institute_info') || '').id
          }`}
        />
      );
    }
    return <Redirect to="/dashboard/home" />;
  }
}

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <VisitorRoute exact path="/login" component={Login} />
        <VisitorRoute exact path="/register" component={Register} />
        <VisitorRoute exact path="/register/Rider" component={RegisterRider} />
        <VisitorRoute
          exact
          path="/register/Institute"
          component={RegisterInstitute}
        />

        {/* {NEW RIDER DASHBOARD ROUTES} */}
        <ProtectedRoute exact path="/dashboard/home" component={RiderHome} />
        <ProtectedRoute
          exact
          path="/dashboard/subscriptions/event/:event_id"
          component={SignedEvent}
        />
        <ProtectedRoute
          exact
          path="/dashboard/sign-to-event"
          component={FindEvents}
        />
        <ProtectedRoute
          exact
          path="/dashboard/sign-to-event/:event_id"
          component={SubscribeEvent}
        />
        <ProtectedRoute
          exact
          path="/dashboard/history/event/:event_id"
          component={ViewPastEvent}
        />

        {/* {NEW INSTITUTE DASHBOARD ROUTES} */}
        <ProtectedRoute
          exact
          path="/dashboard/institute/:institute_id"
          component={InstituteHome}
        />
        <ProtectedRoute
          exact
          path="/dashboard/institute/:institute_id/create/event"
          component={CreateEvent}
        />
        <ProtectedRoute
          exact
          path="/dashboard/institute/:institute_id/update/event/:event_id"
          component={UpdateEvent}
        />
        <ProtectedRoute
          exact
          path="/dashboard/institute/:institute_id/manage/event/:event_id"
          component={EventOptions}
        />
        <ProtectedRoute
          exact
          path="/dashboard/institute/:institute_id/manage/event/:event_id/trials"
          component={Trials}
        />
        <ProtectedRoute exact path="/dashboard/institute/:institute_id/manage/event/:event_id/trials/new" component={NewTrials} />

        {/* {LEGACY ROUTES -- THEY SHOULD BE DESTROYED} */}
        {/* <Route path="/" component={App} /> */}

        <ProtectedRoute exact path="/editScores/:score_id" component={Scores} />
        <ProtectedRoute
          exact
          path="/trialsAndRiderChoose"
          component={TrialsAndRiderChoose}
        />
        <ProtectedRoute
          exact
          path="/trialsChooseDashboard"
          component={TrialsChooseDashboard}
        />
        <Route exact path="/result" component={Result} />
        <Route
          exact
          path="/dashboard/event/:event_id/trial/:trial_id"
          component={Dashboard} // this is not dashboard
        />
        <ProtectedRoute exact path="/beforeResult" component={BeforeResult} />
        <ProtectedRoute exact path="/riders" component={Rider} />
        <ProtectedRoute exact path="/newRider" component={NewRider} />
        <ProtectedRoute exact path="/newInstitute" component={NewInstitute} />
        <ProtectedRoute
          exact
          path="/manageableEvents"
          component={ManageableEvents}
        />
        <ProtectedRoute exact path="/points" component={Points} />
        <ProtectedRoute exact path="/beforePoints" component={BeforePoints} />
        <ProtectedRoute exact path="/newEvent" component={NewEvent} />
        {/* <ProtectedRoute exact path="/events" component={Events} /> */}
        {/* <ProtectedRoute exact path="/manageInstitute" component={Institute} /> */}
        {/* <ProtectedRoute exact path="/createEvent" component={CreateEvent} /> */}
        {/* <ProtectedRoute exact path="/manageEvent" component={ManageEvent} /> */}
        {/* <ProtectedRoute exact path="/points" component={Points} /> */}
        {/* <Route exact path="/portfolio/:id" component={App} />
                <Route path="/contact" component={App} /> */}
      </Switch>
    </Router>
    <GlobalStyles />
  </ThemeProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
