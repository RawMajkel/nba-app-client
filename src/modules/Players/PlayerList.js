import React, {useEffect, useState} from 'react'
import axios from 'axios'
import PlayerTile from './PlayerTile'
import InfiniteScroll from 'react-infinite-scroller'

function PlayerList() {

    const perPage = 15;

    const [players, setPlayers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [lastPage, setLastPage] = useState(null);
    const [hasMoreItems, setHasMoreItems] = useState(false);

    useEffect(() => {
        (async () => {
            const response = await axios.get(`https://localhost:5001/api/players?perPage=${perPage}&page=${currentPage}`);

            setPlayers(response.data.players);
            setLastPage(response.data.meta.lastPage);
            setHasMoreItems(currentPage < response.data.meta.lastPage);
        })();
    }, []);

    const loadFunc = async () => {
        if(hasMoreItems) {
            let newPage = currentPage + 1;
            const response = await axios.get(`https://localhost:5001/api/players?perPage=${perPage}&page=${newPage}`);
            const newPlayers = response.data.players;

            setCurrentPage(newPage);
            setLastPage(response.data.meta.lastPage);
            setPlayers([...players, ...newPlayers]);
            setHasMoreItems(currentPage < lastPage);
        }
    }
    
    return (
        <div className="tiles">
            <div className="container">
                <h1 className="material-color-def">List of all active NBA players</h1>
                <InfiniteScroll
                    pageStart={0}
                    loadMore={loadFunc}
                    hasMore={hasMoreItems}
                    threshold={100}
                    loader={<div className="loader" key={0}>Loading ...</div>}
                >
                    <div className="tiles__row d-flex flex-row flex-wrap justify-content-start align-items-start">
                        {players.map(player => <PlayerTile
                            key={player.id}
                            id={player.id}
                            nbaNetID={player.nbaNetID}
                            firstName={player.firstName}
                            lastName={player.lastName}
                            jerseyNumber={player.jerseyNumber}
                            position={player.position}/>)}
                    </div>
                </InfiniteScroll>
            </div>
        </div>
    );
}

export default PlayerList;