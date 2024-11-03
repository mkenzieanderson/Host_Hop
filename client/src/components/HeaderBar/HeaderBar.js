import { Link } from 'react-router-dom';
import HomeButton from '../HomeButton';
import SignUpButton from '../SignUpButton';
import './HeaderBar.css';

const HeaderBar = () => {

    return (
        <header>
            <div className="container">
                <div className="host-hop-title">
                    <Link to="/">
                        <h1>Host Hop</h1>
                    </Link>
                </div>
                <div className="right-container">
                    <span className="sign-up-button">
                        <SignUpButton />
                    </span>
                    <span className="home-button">
                        <HomeButton/>
                    </span>
                </div>
            </div>    
        </header>
    );
};

export default HeaderBar;