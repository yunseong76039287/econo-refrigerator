import React from 'react';
import './Contents.css';
import Search from './Search.js';
import Ingredient from './Ingredient.js';

const Contents = () => {
    return(
        <div className="contents">
            <div><Search /></div>
            <div>
                <p>검색창</p>
                <Ingredient />
            </div>
            
        </div>
    )
}

export default Contents;