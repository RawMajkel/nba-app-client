import React from 'react'

function TeamTile({id, name, abbreviation, nickName, conference, division}) {
    return (
        <div className="tiles__item d-flex flex-column align-items-center justify-content-start w-100 material-bg-surf">
            <div className="tiles__img-container w-100">
                <img src={`https://www.nba.com/assets/logos/teams/primary/web/${abbreviation}.svg`} alt={`${name} ${nickName}`} className="tiles__img d-block mx-auto img-fluid" />
            </div>
            <div className="tiles__content w-100">
                <div className="tiles__desc">
                    <h2 className="tiles__name material-color-def">{name} {nickName}</h2>
                    <p className="tiles__more material-color-surf">{conference} &#8226; {division}</p>
                </div>
                <a href={`/team/${id}`}>Read more</a>
            </div>
        </div>
    );
};

export default TeamTile;