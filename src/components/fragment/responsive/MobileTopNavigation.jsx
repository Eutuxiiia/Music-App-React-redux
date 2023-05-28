import React from "react";
import SearchBar from "../header/SearchBar";
import '../../assets/css/responsive/MobTopNav.css';
import Brand from "../header/Brand";

class MobileTopNavigation extends React.Component{
    render() {
        return(
            <nav className="mob-top-navigation">
                <Brand/>
                <SearchBar/>
            </nav>
        );
    }
}

export default MobileTopNavigation;