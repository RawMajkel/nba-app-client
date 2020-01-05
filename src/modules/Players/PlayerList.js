import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './Players.scss';

function PlayerList() {

    // const [player, setPlayer] = useState([]);

    // useEffect(() => {
    //     (async () => {
    //         const players = await axios.get('https://localhost:5001/api/players');
    //         setTeam(players.data);
    //     })();
    // }, []);
    
    // return <>
    //     {teams.map((x, index) => <TeamList
    //         id={x.id}
    //         key={index}
    //         name={x.name}
    //         createdOn={x.createdOn}/>)}
    // </>;
    return (
        <div>Player list</div>
    );
}

export default PlayerList;