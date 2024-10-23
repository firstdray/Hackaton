import React from 'react';
/* import {Link} from 'react-router-dom'; */
import "../profile.css"

import addTask from "../../../assets/icons/addTask.svg"

function Sidebar({ profile, dashboard }) {
    return (
        <>
            <div className="sidebar">
                <button><img src={profile} alt="profile"/></button>
                <button><img src={dashboard} alt="dashboard"/></button>
                <button><img src={addTask} alt="addTask"/></button>
            </div>
        </>
    )
}

export default Sidebar;