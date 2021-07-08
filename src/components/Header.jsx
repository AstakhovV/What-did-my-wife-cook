import React from 'react'
import {Link} from "react-router-dom";

function Header() {
    return <nav className='#ffd54f amber lighten-2'>
        <div className="nav-wrapper">
            <a href="/" className="brand-logo"><i className="material-icons"> </i>What did my wife cook?</a>
            <ul className="right hide-on-med-and-down">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contacts">Contacts</Link></li>

            </ul>
        </div>
    </nav>
}
export default Header
