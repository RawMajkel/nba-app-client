import React, {useEffect, useState} from 'react'
import axios from 'axios'

function Player({id}) {

    const [player, setPlayer] = useState([]);
    const [currentTeam, setCurrentTeam] = useState([]);
    const [draftTeam, setDraftTeam] = useState([]);
    const [stats, setStats] = useState([]);

    useEffect(() => {
        (async () => {
            await axios.get(`https://localhost:5001/api/player/${id}`).then(player => {
                setPlayer(player.data);

                axios.get(`https://localhost:5001/api/team/${player.data.currentTeam}`).then(cTeam => {
                    setCurrentTeam(cTeam.data);
                });

                axios.get(`https://localhost:5001/api/team/${player.data.draftTeam}`).then(dTeam => {
                    setDraftTeam(dTeam.data);
                });

                axios.get(`https://localhost:5001/api/player-stats/${id}`).then(stats => {
                    setStats(stats.data);
                });
            });
        })();
    }, []);

    function addImage(url, alt) {
        const http = new XMLHttpRequest();
        
        http.open('HEAD', url, false);
        http.send();

        if(http.status !== 200) {
            url = "https://via.placeholder.com/260x190";
        }
        return <img src={url} alt={alt} className="tiles__img lazyload d-block mx-auto img-fluid" />;
    }

    function fixTeamNames(team) {
        if (/\s/.test(team.name)) {
            return team.name;
        }
        return `${team.name} ${team.nickName}`;
    }

    function isDrafted(player) {
        if(player.draftYear) {
            return true;
        }
        return false;
    }

    return (
        <div className="tiles" data-aos="fade-up" data-aos-duration="1000">
            <div className="container">
                <div className="tiles__img-container w-100">
                    { addImage(`https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${player.nbaNetID}.png`, `${player.firstName} ${player.lastName}`) }
                </div>
                <div className="tiles__content w-100">
                    <div className="tiles__desc">
                        <h2 className="tiles__name material-color-def">{player.firstName} {player.lastName}</h2>
                        <p className="tiles__more material-color-surf">
                            <a href={`/team/${currentTeam.id}`}>{ fixTeamNames(currentTeam) }</a> &#8226; #{player.jerseyNumber} &#8226; {player.position}
                        </p>
                    </div>
                    <div className="tiles__info-container">
                        <p className="tiles__info material-color-surf"><strong className="tiles__strong">Born:</strong> {player.dateOfBirth} ({player.age} years)</p>
                        <p className="tiles__info material-color-surf"><strong className="tiles__strong">Height:</strong> {player.heightFeet} ft {Math.round(player.heightInches)} in ({Math.round(player.heightMetric * 100) / 100} m)</p>
                        <p className="tiles__info material-color-surf"><strong className="tiles__strong">Weight:</strong> {player.weightPounds} lb ({Math.round(player.weightKilograms * 100) / 100} kg)</p>
                        <p className="tiles__info material-color-surf"><strong className="tiles__strong">From:</strong> {player.college === " " ? "No College" : player.college}</p>
                        <p className="tiles__info material-color-surf"><strong className="tiles__strong">Country:</strong> {player.country}</p>
                        <p className="tiles__info material-color-surf"><strong className="tiles__strong">Experience:</strong> {player.yearsPro}th Season</p>
                        <p className="tiles__info material-color-surf"><strong className="tiles__strong">Draft:</strong> { isDrafted(player) ? `${player.draftYear}: Rd ${player.draftRound}, Pk ${player.draftPick} (${draftTeam.abbreviation})` : "Undrafted" }</p>
                    </div>
                </div>
                <div className="tiles__stats">
                    <h2 className="material-color-def">Stats - totals</h2>
                    <div className="tiles__table tiles__table--first table-responsive">
                        <table className="table">
                            <thead className="material-bg-surf">
                                <tr>
                                    <th scope="col" className="material-color-surf" title="Games played">GP</th>
                                    <th scope="col" className="material-color-surf" title="Games started">GS</th>
                                    <th scope="col" className="material-color-surf" title="Minutes played">MP</th>
                                    <th scope="col" className="material-color-surf" title="Field goal made">FGM</th>
                                    <th scope="col" className="material-color-surf" title="Field goal attempted">FGA</th>
                                    <th scope="col" className="material-color-surf" title="Field goal percentage">FG%</th>
                                    <th scope="col" className="material-color-surf" title="Three point field goals made">3PM</th>
                                    <th scope="col" className="material-color-surf" title="Three point field goals attempted">3PA</th>
                                    <th scope="col" className="material-color-surf" title="Three point field goals percentage">3P%</th>
                                    <th scope="col" className="material-color-surf" title="Free throws made">FTM</th>
                                    <th scope="col" className="material-color-surf" title="Free throws attempted">FTA</th>
                                    <th scope="col" className="material-color-surf" title="Free throws percentage">FT%</th>
                                    <th scope="col" className="material-color-surf" title="Points">PTS</th>
                                    <th scope="col" className="material-color-surf" title="Assists">AST</th>
                                    <th scope="col" className="material-color-surf" title="Offensive rebounds">ORB</th>
                                    <th scope="col" className="material-color-surf" title="Defensive rebounds">DRB</th>
                                    <th scope="col" className="material-color-surf" title="Total rebounds">TRB</th>
                                    <th scope="col" className="material-color-surf" title="Blocks">BLK</th>
                                    <th scope="col" className="material-color-surf" title="Steals">STL</th>
                                    <th scope="col" className="material-color-surf" title="Personal fouls">PF</th>
                                    <th scope="col" className="material-color-surf" title="Turnovers">TOV</th>
                                </tr>
                            </thead>
                            <tbody className="material-bg-surf-2">
                                <tr>
                                    <th scope="col" className="material-color-surf">{stats.gamesPlayed}</th>
                                    <th scope="col" className="material-color-surf">{stats.gamesStarted}</th>
                                    <th scope="col" className="material-color-surf">{stats.minutes}</th>
                                    <th scope="col" className="material-color-surf">{stats.fieldGoalsMade}</th>
                                    <th scope="col" className="material-color-surf">{stats.fieldGoalsAttempted}</th>
                                    <th scope="col" className="material-color-surf">{stats.fieldGoalPercentage}</th>
                                    <th scope="col" className="material-color-surf">{stats.threePointersMade}</th>
                                    <th scope="col" className="material-color-surf">{stats.threePointersAttempted}</th>
                                    <th scope="col" className="material-color-surf">{stats.threePointersPercentage}</th>
                                    <th scope="col" className="material-color-surf">{stats.freeThrowsMade}</th>
                                    <th scope="col" className="material-color-surf">{stats.freeThrowsAttempted}</th>
                                    <th scope="col" className="material-color-surf">{stats.freeThrowsPercentage}</th>
                                    <th scope="col" className="material-color-surf">{stats.points}</th>
                                    <th scope="col" className="material-color-surf">{stats.assists}</th>
                                    <th scope="col" className="material-color-surf">{stats.offensiveRebounds}</th>
                                    <th scope="col" className="material-color-surf">{stats.defensiveRebounds}</th>
                                    <th scope="col" className="material-color-surf">{stats.rebounds}</th>
                                    <th scope="col" className="material-color-surf">{stats.blocks}</th>
                                    <th scope="col" className="material-color-surf">{stats.steals}</th>
                                    <th scope="col" className="material-color-surf">{stats.fouls}</th>
                                    <th scope="col" className="material-color-surf">{stats.turnovers}</th>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <h2 className="material-color-def">Stats - per game</h2>
                    <div className="tiles__table table-responsive">
                        <table className="table table-striped">
                            <thead className="material-bg-surf">
                                <tr>
                                    <th scope="col" className="material-color-surf" title="Games played">GP</th>
                                    <th scope="col" className="material-color-surf" title="Games started">GS</th>
                                    <th scope="col" className="material-color-surf" title="Minutes per game">MP</th>
                                    <th scope="col" className="material-color-surf" title="Field goal made">FGM</th>
                                    <th scope="col" className="material-color-surf" title="Field goal attempted">FGA</th>
                                    <th scope="col" className="material-color-surf" title="Field goal percentage">FG%</th>
                                    <th scope="col" className="material-color-surf" title="Three point field goals made">3PM</th>
                                    <th scope="col" className="material-color-surf" title="Three point field goals attempted">3PA</th>
                                    <th scope="col" className="material-color-surf" title="Three point field goals percentage">3P%</th>
                                    <th scope="col" className="material-color-surf" title="Free throws made">FTM</th>
                                    <th scope="col" className="material-color-surf" title="Free throws attempted">FTA</th>
                                    <th scope="col" className="material-color-surf" title="Free throws percentage">FT%</th>
                                    <th scope="col" className="material-color-surf" title="Points per game">PTS</th>
                                    <th scope="col" className="material-color-surf" title="Assists per game">AST</th>
                                    <th scope="col" className="material-color-surf" title="Rebounds per game">TRB</th>
                                    <th scope="col" className="material-color-surf" title="Blocks per game">BLK</th>
                                    <th scope="col" className="material-color-surf" title="Steals per game">STL</th>
                                    <th scope="col" className="material-color-surf" title="Personal fouls per game">PF</th>
                                    <th scope="col" className="material-color-surf" title="Turnovers per game">TOV</th>
                                </tr>
                            </thead>
                            <tbody className="material-bg-surf-2">
                                <tr>
                                    <th scope="col" className="material-color-surf">{stats.gamesPlayed}</th>
                                    <th scope="col" className="material-color-surf">{stats.gamesStarted}</th>
                                    <th scope="col" className="material-color-surf">{stats.minutesPerGame}</th>
                                    <th scope="col" className="material-color-surf">{stats.fieldGoalsMade}</th>
                                    <th scope="col" className="material-color-surf">{stats.fieldGoalsAttempted}</th>
                                    <th scope="col" className="material-color-surf">{stats.fieldGoalPercentage}</th>
                                    <th scope="col" className="material-color-surf">{stats.threePointersMade}</th>
                                    <th scope="col" className="material-color-surf">{stats.threePointersAttempted}</th>
                                    <th scope="col" className="material-color-surf">{stats.threePointersPercentage}</th>
                                    <th scope="col" className="material-color-surf">{stats.freeThrowsMade}</th>
                                    <th scope="col" className="material-color-surf">{stats.freeThrowsAttempted}</th>
                                    <th scope="col" className="material-color-surf">{stats.freeThrowsPercentage}</th>
                                    <th scope="col" className="material-color-surf">{stats.pointsPerGame}</th>
                                    <th scope="col" className="material-color-surf">{stats.assistsPerGame}</th>
                                    <th scope="col" className="material-color-surf">{stats.reboundsPerGame}</th>
                                    <th scope="col" className="material-color-surf">{stats.blocksPerGame}</th>
                                    <th scope="col" className="material-color-surf">{stats.stealsPerGame}</th>
                                    <th scope="col" className="material-color-surf">{stats.foulsPerGame}</th>
                                    <th scope="col" className="material-color-surf">{stats.turnoversPerGame}</th>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Player;