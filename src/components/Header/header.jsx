import React from 'react';
import {Link} from 'react-router-dom';
import "../Profile/profile.css"

import userpic from "../../assets/image/userpic.png"
import notifications from "../../assets/icons/notification.svg"


class Header extends React.Component {
    render() {
        return (
            <>
                <div className="header">
                    <p className="dashboard-logo">
                        <h1>DashBoard</h1>
                    </p>
                    <div className="header-buttons">
                        <img src={notifications} alt="Notifications"/>
                        <Link to="../signin" className="link">Выйти</Link>
                        <img src={userpic} alt="UserPic"/>
                    </div>
                </div>
            </>
        )
    }
}

export default Header;