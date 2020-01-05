import React from 'react';
import {useRoutes, A} from 'hookrouter';
import Home from './modules/Home/Home';
import PlayerList from './modules/Players/PlayerList';
import './App.scss';

const routes = {
    '/': () => <Home/>,
    '/players': () => <PlayerList />
    // '/teams': () => <TeamsList />,
    // '/blog/:id': ({id}) => <PostList blogId={id}/>
};

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
                                    <a className="nav-link" href="/">Teams</a>
                                </li>
                                <li className="nav-item material-color-surf">
                                    <a className="nav-link" href="https://github.com/RawMajkel/NbaApp" rel="noopener noreferrer" target="_blank">
                                        <i className="fab fa-github"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
            {routeResult}
        </div>
    );
}

export default App;
