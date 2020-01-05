import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './Team.scss';

function Team() {

    const [team, setTeam] = useState([]);

    useEffect(() => {
        (async () => {
            const teams = await axios.get('https://localhost:5001/api/teams');
            setTeam(teams.data);
        })();
    }, []);

    return <>
        {teams.map((x, index) => <TeamList
            id={x.id}
            key={index}
            name={x.name}
            createdOn={x.createdOn}/>)}
    </>;
};

export default Team;