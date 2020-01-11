import React from 'react'

function PlayerTile({id, nbaNetID, firstName, lastName, jerseyNumber, position}) {

    function addImage(url, alt) {
        const http = new XMLHttpRequest();
        let src = url;
        
        http.open('HEAD', url, false);
        http.send();

        console.log("Status: " + http.status);

        if(http.status !== 200) {
            src = "https://via.placeholder.com/260x190";
        }
        return <img src={src} alt={alt} className="tiles__img lazyload d-block mx-auto img-fluid" />;
    }

    return (
        <div className="tiles__item d-flex flex-column align-items-center justify-content-start w-100 material-bg-surf" data-aos="fade-up" data-aos-duration="1000">
            <div className="tiles__img-container w-100">
                { nbaNetID && addImage(`https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${nbaNetID}.png`, `${firstName} ${lastName}`) }
            </div>
            <div className="tiles__content w-100">
                <div className="tiles__desc">
                    <h2 className="tiles__name material-color-def">{firstName} {lastName}</h2>
                    <p className="tiles__more material-color-surf">#{jerseyNumber} &#8226; {position}</p>
                </div>
                <a href={`/player/${id}`}>Read more</a>
            </div>
        </div>
    );
};

export default PlayerTile;