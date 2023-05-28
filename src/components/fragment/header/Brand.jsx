import React from "react";
import {Link} from "react-router-dom";
import "../../assets/css/header/Brand.css";
import Logo from "../../assets/img/music_img/headphonesLogo.svg"

class Brand extends React.Component {
    render() {
        return (
            <div  className={"brand"}>
                <Link to={"/home"}>
                    <h1>
                        M
                        <img src={Logo} width={"24px"} alt=""/>
                        sic
                    </h1>
                </Link>
            </div>
        );
    }
}

export default Brand;