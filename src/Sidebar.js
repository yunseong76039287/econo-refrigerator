import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <h1 className="ingredient">재료 목록</h1>
            <ul className="ingredient-list">
                <li>test1</li>
                <li>test2</li>
                <li>test3</li>
            </ul>
        </div>
    )
}

export default Sidebar;