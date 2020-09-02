import React from 'react';
import './App.css';
import { LoginPage, DashboardPage, ProfilePage} from './pages';
import AlertMessage from './_components/AlertMessage';
import { connect } from 'react-redux';
import { alertActions } from "./_actions";
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

function App({loggingIn, message, clearAlert}) {
  console.log("VIS:loggingIn:", loggingIn);
  return (
    <div>
      <BrowserRouter>
        {loggingIn
          ?
          (<Switch>
            <Route path="/dashboard">
              <DashboardPage></DashboardPage>
            </Route>
            <Route path="/profile">
              <ProfilePage></ProfilePage>
            </Route>
            <Redirect to="/dashboard" />
          </Switch>)
          :
          (<Switch>
            <Route path="/login">
              <LoginPage></LoginPage>
            </Route>
            <Redirect to="/login" />
          </Switch>)
          
        }

      </BrowserRouter>
      {
        message && <div className="d-flex justify-content-end p-3">
          <AlertMessage type="danger">{message}
            <button type="button" className="close btn-link btn" data-dismiss="alert" onClick={clearAlert} aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </AlertMessage></div>
      }
    </div>
  );
}
function mapStateToProps(state) {
    const { loggingIn } = state.authentication;
    const { message }  = state.alert;
    return {
        loggingIn, 
        message
    };
}

const mapDispatchToProps = dispatch => {
  return {
    clearAlert: () => dispatch(alertActions.clear()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
