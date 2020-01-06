import React, {useEffect, useState} from 'react'
import axios from 'axios'
import TeamTile from './TeamTile'

function TeamList() {

    const [teams, setTeams] = useState([]);

    useEffect(() => {
        (async () => {
            const teams = await axios.get('https://localhost:5001/api/teams');
            setTeams(teams.data);
        })();
    }, []);

    return (
        <div className="tiles">
            <div className="container">
                <h1 className="material-color-def">List of all NBA team</h1>
                <div className="tiles__row d-flex flex-row flex-wrap justify-content-start align-items-start">
                    {teams.map(team => <TeamTile
                        id={team.id}
                        name={team.name}
                        abbreviation={team.abbreviation}
                        nickName={team.nickName}
                        conference={team.conference}
                        division={team.division}/>)}
                </div>
            </div>
        </div>
    );
}

export default TeamList;