
import './addPost.css'
import CurrentUser from '../../fackApes/CurrentUserData'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage, faSmile, faTags, faVideo } from '@fortawesome/free-solid-svg-icons'

function AddPost(){
    return (
<form action="" className='postForm'>
    <div className="user form-top">
        <img src={CurrentUser.map(user=>(user.ProfileImage))} alt="" />
        <input type="text" placeholder="What's on your mind?" />
        <button type='submit' className='btn btn-primary'>Post</button>
    </div>
    <div className="post-categories">
        <label htmlFor="file">
            <input type="file" name="" id="file" />
            <span><FontAwesomeIcon icon={faImage} />Photos</span>
        </label>
        <label htmlFor="file">
            <input type="file" name="" id="file" />
            <span><FontAwesomeIcon icon={faVideo} /> Videos</span>
        </label>
        <span><FontAwesomeIcon icon={faTags} /> Tags</span>
        <span><FontAwesomeIcon icon={faSmile} /> Feelings</span>
    </div>
</form>
    )
}
export default AddPost