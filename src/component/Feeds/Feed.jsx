import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Feeds.css'
import { Link } from 'react-router-dom'
import { faComment, faHeart, faListDots, faShare } from '@fortawesome/free-solid-svg-icons'

import Comments from '../Comment/comment'
import { useState } from 'react'


function Feed({fed}) {

    // states discuse
let [openComment, setOpenComment] = useState(false);
const CommentHandle =()=>{
    setOpenComment(!openComment)
}

    return (
        <div className='feed' key={fed.userid}>  
<div className="top-content">
    <Link to='/profile/id'>
    <div className="user">
        <img src={fed.feedProfile} alt="" />
        <div>
        <h5>{fed.name}</h5>
        <small> 1 minutes Ago</small>
        </div>
       
    </div>
    </Link>
   <span><FontAwesomeIcon icon={faListDots} /></span> 
</div>
<div className="mid-content">
    <p>{fed.desc}</p>
    <img src={fed.feedImage} alt="" />
</div>
<div className="bottom-content">
   <div className="action-item">
    <span><FontAwesomeIcon icon={faHeart} /> 2 Likes </span>
    </div> 
    <div className="action-item" onClick={CommentHandle}>
    <span><FontAwesomeIcon icon={faComment} /> 2 Comments </span>
    </div> 
    <div className="action-item">
    <span><FontAwesomeIcon icon={faShare} /> 2 Shares </span>
    </div> 

</div>
{openComment && <Comments />}
        </div>
    )
}
export default Feed