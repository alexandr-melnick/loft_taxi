import './App.css';
import React from "react";
import {Login} from "./components/Login";
import {Exit} from "./components/Exit";
import {Profile} from "./components/Profile";
import logo from "./img/logo.png";
import logoWrap from "./img/logo_wrap.png";
import {NavItem} from "./components/common/NavItem";
import {Map} from "./components/Map";

const pagesUrl = {
    login: 'login',
    profile: 'profile',
    map: 'map',
    exit: 'exit'
}

const PAGES = {
    [pagesUrl.login]: <Login />,
    [pagesUrl.profile]: <Profile />,
    [pagesUrl.exit]: <Exit />,
    [pagesUrl.map]: <Map />
}


class App extends React.Component {

    state = { currentPage: pagesUrl.home};

    navigateTo = (page) => {
        this.setState({currentPage: page})
    };

    render() {
        return <>
            <header className="header">
                <div className="logo">
                    <img src={logo} alt="Loft Taxi"/>
                </div>
                <nav className="nav">
                    <ul className="nav__list">
                        <NavItem url={pagesUrl.map} onClick={this.navigateTo} />
                        <NavItem url={pagesUrl.login} onClick={this.navigateTo} />
                        <NavItem url={pagesUrl.profile} onClick={this.navigateTo} />
                        <NavItem url={pagesUrl.exit} onClick={this.navigateTo} />
                    </ul>
                </nav>
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
};

export default App;
