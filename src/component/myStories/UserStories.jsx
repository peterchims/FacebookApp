import React from "react";
import './Stories.css'

// Fake Api
import CurrentUser from "../../fackApes/CurrentUserData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd } from "@fortawesome/free-solid-svg-icons";


function UserStories() {
    return(
  <div className="story userStory">
<div className="user">
    <img src={CurrentUser.map(user=>user.ProfileImage)} alt="" />
</div>
<img src={CurrentUser.map(user=>user.CoverPhoto)} alt="" />
<label htmlFor="storyFiles">
  <FontAwesomeIcon icon={faAdd} />
  {/* <h5> Add Story</h5> */}
  <input type="file" id="storyFiles" />

</label>
  </div>
    )
}
export default UserStories