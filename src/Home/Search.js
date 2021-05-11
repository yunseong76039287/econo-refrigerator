import React from 'react';
import './Search.css';
import iCon from './icon-search.png';

const Search = () =>{
    return(
    <div className="box">
        <div className="search-container">
        <span className="icon"><img src={iCon} className="icon"></img></span>
        <input type="search" className="search" placeholder="Search ingredient..."></input>
        </div>
    </div>
    )
}


export default Search;