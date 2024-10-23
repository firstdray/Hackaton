import React from 'react';
/* import {Link} from 'react-router-dom'; */
import "./profile.css"

import profile from "../../assets/icons/profileAct.svg"
import dashboard from "../../assets/icons/dashboard.svg"

import Sidebar  from "./Sidebar/sidebar";
import Header  from "../Header/header";

class Profile extends React.Component {
    render() {
        return (
            <>
            <div className="Profile">
                <Header/>
                <Sidebar profile={profile} dashboard={dashboard}/>
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
