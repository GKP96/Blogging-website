import '../css/stylesheet.css';
import {Link} from 'react-router-dom';

function Header() {
    return (
        <div className="headerClass">
           <Link to='/'>
           <h1 style={{ display: "inline-block" }} > My Blogging Website</h1>
           </Link>
          <Link to='/newBlog'>
          <h1 style={{ display: "inline-block", float: "right" }}> newBlog </h1>
          </Link>
        </div>
    )
}

export default Header;