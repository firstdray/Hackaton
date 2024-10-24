import React from 'react';
/* import {Link} from 'react-router-dom'; */
import Profile from "../profile";

class User extends React.Component {
    render() {
        return (
            <Profile role="User" page="profileuser" />
        )
    }
}

export default User;