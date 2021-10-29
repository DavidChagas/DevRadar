import React from 'react';

import './style.css';

function DevItem( {dev} ){
    return(
        <li className="dev-item">
            <header>
                <img src={dev.avatar_url} alt="David Chagas"/>
                <div className="user-info">
                    <strong>{dev.name}</strong>
                    <span>{dev.techs.join(', ')}</span>
                </div>
            </header>
            <p>{dev.bio}</p>
            <a href={`https://github.com/${dev.github_username}`}>Acessar perfil no GitHub</a>
        </li>
         <li className="dev-item">
            <header>
                <img src={dev.avatar_url} alt="David Chagas"/>
                <div className="user-info">
                    <strong>{dev.name}</strong>
                    <span>{dev.techs.join(', ')}</span>
                </div>
            </header>
            <p>{dev.bio}</p>
            <a href={`https://github.com/${dev.github_username}`}>Acessar perfil no GitHub</a>
        </li>
 <li className="dev-item">
            <header>
                <img src={dev.avatar_url} alt="David Chagas"/>
                <div className="user-info">
                    <strong>{dev.name}</strong>
                    <span>{dev.techs.join(', ')}</span>
                </div>
            </header>
            <p>{dev.bio}</p>
            <a href={`https://github.com/${dev.github_username}`}>Acessar perfil no GitHub</a>
        </li>
    );
}

export default DevItem;
