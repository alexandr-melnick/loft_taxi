import React from "react";
import PropTypes from "prop-types";
import {LoginWithAuth, Map, Profile, Header} from "./components/";
import {LeftModal} from "./components/common/";
import {withAuth} from "./AuthContext";
import './App.css';

const pagesUrls = {
  login: 'login',
  profile: 'profile',
  map: 'map',
  exit: 'exit'
}

class App extends React.Component {
  static propTypes = {
    navigateTo: PropTypes.func,
    pagesUrls: PropTypes.shape({
      login: PropTypes.string,
      map: PropTypes.string,
      profile: PropTypes.string,
      exit: PropTypes.string
    }),
  }

  state = {currentPage: pagesUrls.login};

  navigateTo = (page) => {
    if (!this.props.isLoggedIn) return this.setState({currentPage: pagesUrls.login});
    this.setState({currentPage: page})
  };

  render() {
    return <>
      <main>
        {this.props.isLoggedIn ? (
            <>
            <Header navigateTo={this.navigateTo} pagesUrls={pagesUrls}/>
            <section className="section">
              <div className="section__map">
                {this.state.currentPage === pagesUrls.map && <Map />}
                {this.state.currentPage === pagesUrls.profile && <Profile />}
              </div>
            </section>
            </>
        ) : (
            <section  className="login-section">
              <LeftModal/>
              <LoginWithAuth page={this.state.currentPage}/>
            </section>
          )
        }

      </main>
    </>
  };
}

export default withAuth(App);
