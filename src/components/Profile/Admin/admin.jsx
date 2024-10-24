import React from 'react';
/* import {Link} from 'react-router-dom'; */
import Profile from "../profile";

class Admin extends React.Component {
    render() {
        return (
            <Profile role="Admin" page="profileadmin" />
        )
    }
}

export default Admin;