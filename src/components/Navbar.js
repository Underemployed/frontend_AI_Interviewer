import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-content">
                <Link to="/landing" className="navbar-brand">AI Hiring</Link>
                <ul className="navbar-nav">
                    <li><Link to="/privacy" className="navbar-link">Privacy</Link></li>
                </ul>
            </div>
        </nav>
    );
}
 
export default Navbar;