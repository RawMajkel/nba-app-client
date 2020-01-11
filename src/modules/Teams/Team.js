import React, {useEffect, useState} from 'react'
import axios from 'axios'
import PlayerTile from '../Players/PlayerTile';

function Team({id}) {

    const [team, setTeam] = useState({});
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const fetchedTeam = await axios.get(`https://localhost:5001/api/team/${id}`);
                setTeam(fetchedTeam.data);

                const fetchedPlayers = await axios.get(`https://localhost:5001/api/players/${id}`);
                setPlayers(fetchedPlayers.data);

            } catch (err) {
                throw err;
            }
        })();
    }, [id]);
    
    return (
        <div className="tiles">
            <div className="container">
                <div className="tiles__img-container w-100">
                    <img src={`https://www.nba.com/assets/logos/teams/primary/web/${team.abbreviation}.svg`} alt={`${team.name} ${team.nickName}`} className="tiles__img d-block mx-auto img-fluid" />
                </div>
                <div className="tiles__content w-100">
                    <div className="tiles__desc">
                        <h2 className="tiles__name material-color-def">{team.name} {team.nickName}</h2>
                        <p className="tiles__more material-color-surf">{team.abbreviation} &#8226; {team.conference} Conference &#8226; {team.division} Division</p>
                    </div>
                    <div className="tiles__info-container">
                        <p className="tiles__info material-color-surf"><strong className="tiles__strong">Conference rank:</strong> {team.conferenceRank}</p>
                        <p className="tiles__info material-color-surf"><strong className="tiles__strong">Games behind #1:</strong> {team.gamesBehind}</p>
                        <p className="tiles__info material-color-surf"><strong className="tiles__strong">Wins:</strong> {team.wins}</p>
                        <p className="tiles__info material-color-surf"><strong className="tiles__strong">Losses:</strong> {team.losses}</p>
                        <p className="tiles__info material-color-surf"><strong className="tiles__strong">Winning streak:</strong> {team.winningStreak}</p>
                        <p className="tiles__info material-color-surf"><strong className="tiles__strong">Home wins:</strong> {team.homeWins}</p>
                        <p className="tiles__info material-color-surf"><strong className="tiles__strong">Home losses:</strong> {team.homeLosses}</p>
                        <p className="tiles__info material-color-surf"><strong className="tiles__strong">Away wins:</strong> {team.awayWins}</p>
                        <p className="tiles__info material-color-surf"><strong className="tiles__strong">Away losses:</strong> {team.awayLosses}</p>
                    </div>
                </div>
                <div className="tiles__playersList">
                    <h2 className="material-color-def">Players</h2>
                    <div className="tiles__row d-flex flex-row flex-wrap justify-content-start align-items-start">
                        {players.map(player => <PlayerTile
                            id={player.id}
                            nbaNetID={player.nbaNetID}
                            firstName={player.firstName}
                            lastName={player.lastName}
                            jerseyNumber={player.jerseyNumber}
                            position={player.position}/>)}
                    </div>
                </div>
            </div>
        </div>
        
    );
};

export default Team;