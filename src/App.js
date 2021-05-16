import React from "react";
import PropTypes from "prop-types";
import { Route } from "react-router-dom"
import { LoginWithAuth, Map, Profile, Header } from "./components/";
import { LeftModal } from "./components/common/";
import { withAuth } from "./AuthContext";
import { RegistrationWithAuth } from "./components/Registration";
import './App.css';

export const pagesUrls = {
  login: 'login',
  profile: 'profile',
  map: 'map',
  exit: 'exit',
  registration: 'registration'
}

class App extends React.Component {
  render () {
    return <>
      <main>
        {this.props.isLoggedIn ? (
            <>
              <Header pagesUrls={pagesUrls}/>
              <section className="section" data-testid="main-section">
                <div className="section__map">
                  <Route path="/map" component={Map} />
                  <Route path="/profile" component={Profile}/>
                </div>
              </section>
            </>
        ) : (
            <section className="login-section" data-testid="login-section">
              <LeftModal/>
              <Route path="/signup" component={RegistrationWithAuth} />
              <Route path="/" expect component={() =><LoginWithAuth regPage={pagesUrls.registration}/>} />
            </section>
        )
        }
      </main>
    </>
  };
}

App.propTypes = {
  pagesUrls: PropTypes.shape({
    login: PropTypes.string,
    map: PropTypes.string,
    profile: PropTypes.string,
    exit: PropTypes.string
  }),
}

export const WithAuthApp = withAuth(App);
