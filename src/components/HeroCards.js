import '../App.css';
import Google from '../assets/GOOGL.png';
import FB from '../assets/FB.png';
import Amazone from '../assets/Amazon_icon.png';

function HeroCards() {
    return(
        <div className="heroCard">
            <div className="heroCard-card">
                <div className="heroCard-card-head">
                    <p>GOOGLE</p>
                    <img src={Google} className="heroCardLogo"/>
                </div>
                <div className="heroCard-card-amount">
                    <p>1515 USD</p>
                </div>
            </div>
            <div className="heroCard-card">
                <div className="heroCard-card-head">
                    <p>FB</p>
                    <img src={FB} className="heroCardLogo"/>
                </div>
                <div className="heroCard-card-amount">
                    <p>1515 USD</p>
                </div>
            </div>
            <div className="heroCard-card">
                <div className="heroCard-card-head">
                    <p>AMZN</p>
                    <img src={Amazone} className="heroCardLogo"/>
                </div>
                <div className="heroCard-card-amount">
                    <p>1515 USD</p>
                </div>
            </div>
        
        </div>
    )
}

export default HeroCards