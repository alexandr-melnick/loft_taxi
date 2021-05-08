import './App.css';
import React from "react";
import {Login} from "./components/Login";
import {Exit} from "./components/Exit";
import {Profile} from "./components/Profile";
import logoWrap from "./img/logo_wrap.png";
import {Map} from "./components/Map";
import Header from "./components/Header";
import {LeftModal} from "./components/common/LeftModal";

const pagesUrls = {
  login: 'login',
  profile: 'profile',
  map: 'map',
  exit: 'exit'
}

const PAGES = {
  [pagesUrls.login]: <Login/>,
  [pagesUrls.profile]: <Profile/>,
  [pagesUrls.exit]: <Exit/>,
  [pagesUrls.map]: <Map/>
}


class App extends React.Component {

  state = {currentPage: pagesUrls.login};

  navigateTo = (page) => {
    this.setState({currentPage: page})
  };

  render() {
    return <>
      <main>
        {this.state.currentPage != 'login' ? <Header navigateTo={this.navigateTo} pagesUrls={pagesUrls}/> : <LeftModal/>}
        <section className="section">
          <div className="section__right-block">
            {PAGES[this.state.currentPage]}
          </div>
        </section>
      </main>
    </>
  }
}

export default App;
