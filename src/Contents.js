import React from 'react';
import './Contents.css';
import Search from './Search.js';

const Contents = () => {
    return(
        <div className="contents">
            <div><Search /></div>
            <div>
                <p>Here is main contents</p>
                
            </div>
            
        </div>
    )
}

export default Contents;