
import { Link, NavLink } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div>
           
            <ul>
               <span>My Website</span>
                {/* <Link to="/">Home</Link> */}
                <NavLink to = '/'>Home</NavLink>
                <NavLink to = '/users'>Users</NavLink>
                <NavLink to = '/posts'>Posts</NavLink>
                <NavLink to="/about">About</NavLink>
            <Link to="/contact">Contact</Link>
            </ul>
        </div>
    );
};

export default Header;