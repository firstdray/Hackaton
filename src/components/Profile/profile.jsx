import React from 'react';
/* import {Link} from 'react-router-dom'; */
import "./profile.css"
import userpic from "../../assets/image/userpic.png"
import notifications from "../../assets/icons/notifications.png"

import addbutton from "../../assets/icons/add-button.png"
import userbutton from "../../assets/icons/user-button.png"
import writebutton from "../../assets/icons/write-button.png"


class Profile extends React.Component {
    render() {
        return (
            <>
            <div className="Profile">
                <div className="header">
                    <a href="" className="dashboard-logo">
                        <h1>DashBoard</h1>
                    </a>
                    <div className="header-buttons">
                        <img src={notifications} alt="Notifications"/>
                        <button>Выйти</button>
                        <img src={userpic} alt="UserPic"/>
                    </div>
                </div>
                <div className="sidebar">
                    <button><img src={userbutton}/></button>
                    <button><img src={writebutton}/></button>
                    <button><img src={addbutton}/></button>
                </div>
                <div className="main">
                    <div className="column"><h3>Добро пожаловать, User!</h3></div>
                    <div className="column">Колонна 2</div>
                    <div className="column">Колонна 3</div>
                    <div className="column">Колонна 4</div>
                    <div className="column">Колонна 5</div>
                </div>
            </div>
            </>
        )
    }
}

export default Profile;
