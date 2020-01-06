import React from 'react'

function TeamTile({id, name, abbreviation, nickName, conference, division}) {

    function fixTeamNames(name, nickName) {
        if (/\s/.test(name)) {
            return name;
        }
        return `${name} ${nickName}`;
    }

    return (
        <div className="tiles__item d-flex flex-column align-items-center justify-content-start w-100 material-bg-surf" data-aos="fade-up" data-aos-duration="1000">
            <div className="tiles__img-container w-100">
            <img src={`https://www.nba.com/assets/logos/teams/primary/web/${abbreviation}.svg`} alt={`${name} ${nickName}`} className="tiles__img lazyload d-block mx-auto img-fluid" />
            </div>
            <div className="tiles__content w-100">
                <div className="tiles__desc">
                    <h2 className="tiles__name material-color-def">{ fixTeamNames(name, nickName) }</h2>
                    <p className="tiles__more material-color-surf">{conference} &#8226; {division}</p>
                </div>
                <a href={`/team/${id}`}>Read more</a>
            </div>
        </div>
    );
};

export default TeamTile;