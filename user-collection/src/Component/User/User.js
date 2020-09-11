import React from 'react';
import './User.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const User = (props) => {

    const {photo, name, email, gender, salary} = props.user;
    return (
        <div className = "user">

            <div>
                <img src={photo} />
            </div>

            <div className = "user-data">
                <h2 className = "user-name">{name}</h2>
                <p>Email: {email}</p>
                <p><small>Gender: {gender}</small></p>
                <p><small>Salary: {salary}</small></p>
                <button
                    className = "main-button"
                    onClick = {() => props.handleAddUser(props.user) } >

                    <FontAwesomeIcon icon={faUser} /> Add to Contacts

                </button>
            </div>
                     
        </div>
    );
};

export default User;