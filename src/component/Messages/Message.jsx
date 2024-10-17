import React from 'react';
import './Message.css'
import { Link } from 'react-router-dom';
import MessageData from '../../fackApes/MessageData'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faSearch } from '@fortawesome/free-solid-svg-icons';


const Message = () => {
  return (
    <div className="Message">
        <div className="Message-top">
            <h4>Contacts </h4>
            <FontAwesomeIcon icon={faEdit} />
            <FontAwesomeIcon icon={faSearch} />
        </div>
        {/* <div className="message-search">
        <FontAwesomeIcon icon={faSearch} />
        <input type="search" name="" placeholder='Search Message' id="" />
        </div> */}
        <div className="border-div"></div>

        {
            MessageData.map(mess=>(
                <Link to='/chatbox/id'>
                    <div className="message" key={mess.id}>
                      <div className="user">
                        <img src={mess.img} alt="img" />
                        <div className="green-active">

                        </div>
                      </div>
                      <div className="message-body">
                        <h5>{mess.name}</h5>
                  
                      </div>
                    </div>
                </Link>
            ))
        }
    </div>
  );
}

export default Message;
