import './comment.css'
import CommetData from '../../fackApes/CommentData'
import CurrentUser from '../../fackApes/CurrentUserData'
import { Link } from 'react-router-dom'

function Comments() {
    return(
<div className="comments">
<div className="writebox">
    <form action="">
        <div className="user">
            <img src={CurrentUser.map(user=>(user.ProfileImage))} alt="" />
            <input type="text" name="" placeholder='Write a comment' id="" />
            <button type='submit' className='btn btn-primary'>Send</button>
        </div>
    </form>
</div>
{
    CommetData.map(comment=>(
        <Link to='/profile/id'>
            <div className="user" key={comment.id}>
                <img src={comment.commentProfile} alt="" />
                <div>
                <h5>{comment.name}</h5>
                <p>{comment.CommeText}</p>
                </div>
               <small>
                1h
               </small>
            </div>
        </Link>
    ))
}
</div>
    )
}
export default Comments