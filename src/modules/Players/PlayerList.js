import React, {useEffect, useState} from 'react'
import axios from 'axios'
import PlayerTile from './PlayerTile'

function PlayerList() {

    const [players, setPlayers] = useState([]);

    useEffect(() => {
        (async () => {
            const players = await axios.get('https://localhost:5001/api/players');
            setPlayers(players.data);
        })();
    }, []);
    
    return (
        <div className="tiles">
            <div className="container">
                <h1 className="material-color-def">List of all active NBA players</h1>
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
    );
}

export default PlayerList;