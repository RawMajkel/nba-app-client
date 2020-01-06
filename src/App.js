import React from 'react'
import {useRoutes, A} from 'hookrouter'
import Home from './modules/Home/Home'
import PlayerList from './modules/Players/PlayerList'
import Player from './modules/Players/Player'
import TeamList from './modules/Teams/TeamList'
import Team from './modules/Teams/Team'
import './App.scss'

const routes = {
    '/': () => <Home/>,
    '/players': () => <PlayerList />,
    '/player/:id': ({id}) => <Player id={id} />,
    '/teams': () => <TeamList />,
    '/team/:id': ({id}) => <Team id={id} />
};

function copyYears(devYear) {
    let year = new Date().getFullYear();

    return year > devYear ? devYear + " - " + year : devYear;
}

function App() {

    const routeResult = useRoutes(routes);

    return (
        <div className="App">
            <div id="header" className="header material-bg-surf">
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-dark">
                        <A href="/" className="navbar-brand material-color-def">NbaApp</A>
                        <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav w-100 justify-content-end">
                                <li className="nav-item material-color-surf">
                                    <a className="nav-link" href="/">Home</a>
                                </li>
                                <li className="nav-item material-color-surf">
                                    <a className="nav-link" href="/players">Players</a>
                                </li>
                                <li className="nav-item material-color-surf">
                                    <a className="nav-link" href="/teams">Teams</a>
                                </li>
                                <li className="nav-item material-color-surf">
                                    <a className="nav-link" href="https://github.com/RawMajkel/NbaApp" rel="noopener noreferrer" target="_blank">API</a>
                                </li>
                                <li className="nav-item material-color-surf">
                                    <a className="nav-link" href="https://github.com/RawMajkel/nba-app-client" rel="noopener noreferrer" target="_blank">
                                        <i className="fab fa-github"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
            {routeResult}
            <div className="footer material-bg-surf">
                <div className="container">
                    <div className="footer__content">
                        <p className="material-color-surf">NbaApp &copy; { copyYears(2019) } | Michał Droździk</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
