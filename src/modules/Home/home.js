import React from 'react';

function Home() {
  return (
    <div className="container">
      <div className="content">
        <h1 className="material-color-def">What is NbaApp?</h1>
        <p className="material-color-def">This is a client app for <a href="https://github.com/RawMajkel/NbaApp" rel="noopener noreferrer" target="_blank">https://github.com/RawMajkel/NbaApp</a> Web API. It was made with <a href="https://reactjs.org/" rel="nofollow noopener noreferrer" target="_blank">ReactJS</a>, while the API itself is an <a href="https://dotnet.microsoft.com/download/dotnet-core/3.1" rel="nofollow noopener noreferrer" target="_blank">.NET Core 3.1</a> application.</p>
        <p className="material-color-def">What it does is get the current nba data from its official servers, retransfer it and transfer to React client application. You can do multiple things in here, such as: </p>
        <ul>
          <li className="material-color-def">Check current NBA players</li>
          <li className="material-color-def">Check their bio nad career informations, including up-to date statistics from current NBA season</li>
          <li className="material-color-def">Go through all of the teams, see their players, look up their current records</li>
          <li className="material-color-def">And such :)</li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
