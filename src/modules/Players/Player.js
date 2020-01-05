import React from 'react';
import {A} from 'hookrouter';
import './Players.scss';

function Player({id, name}) {
    return (
        <div>
            <h2><A href={`/blog/${id}`}>{name}</A>
            </h2>
            <p>aaa</p>
        </div>
    );
};

export default Player;