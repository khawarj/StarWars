import React from "react";
import {Link, IndexLink} from "react-router";

const Header = () =>{
    return(
        <nav>
            <IndexLink to="/" activeClassName="active">Home</IndexLink>
            {" | "}
            <Link to="/logout" target="_self" activeClassName="active">Logout</Link>
            {" | "}
            <Link to="/search" activeClassName="active">Search</Link>
        </nav>
    );
};
export default Header;