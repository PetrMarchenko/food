import React from 'react';
import { Link } from 'react-router-dom'
import {
    HOME_PAGE,
    FOOD_PAGE,
} from 'constants/routes'

function Header() {
    return (
        <div>
            <nav>
                <ul>
                    <li><Link to={HOME_PAGE}>Home</Link></li>
                    <li><Link to={FOOD_PAGE}>Roster</Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default Header;
