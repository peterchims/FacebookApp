import React from 'react'
import { Link } from 'react-router-dom'
import './UserProfile.css'
import CurrentUser from '../../fackApes/CurrentUserData'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFeed, faLink, faMessage } from '@fortawesome/free-solid-svg-icons'

function Profile() {
    return (
        <div className="userProfile">
            <div className="coverPhoto">
                <img src={CurrentUser.map(user=>(
                user.CoverPhoto    
                ))} alt="" />
            </div>
            <div className="profileInfo">
                <img src={CurrentUser.map(user=>(
                    user.ProfileImage
                ))} alt="" />
                <div className="userName">
                    <h3>{CurrentUser.map(user=>(user.name))}</h3>
                    <h5>{CurrentUser.map(user=>(user.username))}</h5>
                </div>
                <div className="profilebtn">
                    <Link to='chatbox/id'>
                    <button className="btn btn-primary">
                        <FontAwesomeIcon icon={faMessage} /> 
                    </button>
                    </Link>
                    <button className="btn btn-primary">
                        <FontAwesomeIcon icon={faFeed} />Follow Me
                    </button>
                    <button className="btn">
                        <FontAwesomeIcon icon={faLink} />
                    </button>
                </div>
                <p className="bio">
                    A short bio will display here
                </p>
            </div>
        </div>
    )
}

export default Profile