import './Feeds.css';
import Feed from './Feed';
import HomeFeedData from "../../fackApes/HomeFeedData";


function Feeds() {
    return(
        <div className='feeds'>
    
            {
                HomeFeedData.map(fed => (
                    <Feed fed={fed} key={fed.key} /> 
                ))
            }
         
        </div>
    );
}

export default Feeds;
