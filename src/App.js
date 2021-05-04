import './App.css';
import React from "react";
import {Login} from "./components/Login";
import {Exit} from "./components/Exit";
import {Profile} from "./components/Profile";
import logo from "./img/logo.png";
import logoWrap from "./img/logo_wrap.png";
import {Map} from "./components/Map";
import {Navigation} from "./components/Navigation";

const pagesUrls = {
    login: 'login',
    profile: 'profile',
    map: 'map',
    exit: 'exit'
}

const PAGES = {
    [pagesUrls.login]: <Login />,
    [pagesUrls.profile]: <Profile />,
    [pagesUrls.exit]: <Exit />,
    [pagesUrls.map]: <Map />
}


class App extends React.Component {

    state = { currentPage: pagesUrls.login};

    navigateTo = (page) => {
        this.setState({currentPage: page})
    };

    render() {
        return <>
            <header className="header">
                <div className="logo">
                    <img src={logo} alt="Loft Taxi"/>
                </div>
                <Navigation pages={pagesUrls} navigateTo={ this.navigateTo }/>
            </header>

            <main>
                <section className="section">
                    <div className="section__left-block">
                        <img src={logoWrap} alt="Loft Taxi"/>
                    </div>
                    <div className="section__right-block">
                        {PAGES[this.state.currentPage]}
                    </div>
                </section>
            </main>
        </>
    }
}

export default App;
