import './App.css';
import React from "react";
import {Home} from "./components/Home";
import {Exit} from "./components/Exit";
import {Profile} from "./components/Profile";

const PAGES = {
    home: <Home />,
    profile: <Profile />,
    about: <Exit />,
}

class App extends React.Component {

    state = { currentPage: 'home'};

    navigateTo = (page) => {
        this.setState({currentPage: page})
    };

    render() {
        return <>
            <header className="header">
                <div className="logo">
                    <img src="./img/logo.png" alt="Loft Taxi"/>
                </div>
                <nav className="nav">
                    <ul className="nav__list">
                        <li className="nav__item">
                            <div className="nav__btn" onClick={() => {this.navigateTo('home')}}>Home</div>
                        </li>
                        <li className="nav__item">
                            <div className="nav__btn" onClick={() => {this.navigateTo('profile')}}>Profile</div>
                        </li>
                        <li className="nav__item">
                            <div className="nav__btn" onClick={() => {this.navigateTo('exit')}}>Exit</div>
                        </li>
                    </ul>
                </nav>
            </header>

            <main>
                <section className="section">
                    <div className="section__left-block">
                        <img src="./img/logo_wrap.png" alt="Loft Taxi"/>
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
