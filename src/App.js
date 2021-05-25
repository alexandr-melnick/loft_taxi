import React from "react";
import PropTypes from "prop-types";
import { Route } from "react-router-dom"
import { LoginWithAuth, Map, WithAuthProfile, Header } from "./components/";
import { LeftModal } from "./components/common/";
import { RegistrationWithAuth } from "./components/Registration";
import { connect } from "react-redux";
import { logIn, setToken, setUserCard } from "./modules/actions";
import './App.css';

export const pagesUrls = {
  login: 'login',
  profile: 'profile',
  map: 'map',
  exit: 'exit',
  registration: 'registration'
}

class App extends React.Component {

  componentDidMount () {
    const { setToken, logIn, setUserCard } = this.props
    const token = localStorage.getItem("token")
    if (token) {
      logIn();
      setToken(token);
    }
    const userCard = localStorage.getItem("userCard")
    if (userCard) {
      setUserCard(userCard);
    }
  }

  render () {
    return <>
      <main>
        {this.props.isLoggedIn ? (
            <>
              <Header pagesUrls={pagesUrls}/>
              <section className="section" data-testid="main-section">
                <div className="section__map">
                  <Route path="/map" component={Map}/>
                  <Route path="/profile" component={WithAuthProfile}/>
                </div>
              </section>
            </>
        ) : (
            <section className="login-section" data-testid="login-section">
              <LeftModal/>
              <Route path="/signup" component={RegistrationWithAuth}/>
              <Route path="/" expect component={LoginWithAuth}/>
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

export const WithAuthApp = connect(
    (state) => ({ isLoggedIn: state.auth.isLoggedIn }),
    { setToken, logIn, setUserCard }
)(App);
