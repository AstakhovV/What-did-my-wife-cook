import React from 'react'
import {Link} from "react-router-dom";

function Header() {
    return <nav className='#ffd54f amber lighten-2'>
        <div className="nav-wrapper">
            <a href="/" className="brand-logo"><i className="material-icons"> </i>What will my wife cook?</a>
            <ul className="right hide-on-med-and-down">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/random">Random Meal</Link></li>
                <li><Link to="/area">Country List</Link></li>

            </ul>
        </div>
    </nav>
}
export default Header
