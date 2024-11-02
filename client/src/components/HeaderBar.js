import { Link } from 'react-router-dom';
import HomeButton from './HomeButton';

const HeaderBar = () => {

    return (
        <header>
            <div className="container">
                <div className="host-hop-title">
                    <Link to="/">
                        <h1>Host Hop</h1>
                    </Link>
                </div>
                <div className="home-button">
                    <HomeButton/>
                </div>
            </div>    
        </header>
    );
};

export default HeaderBar;