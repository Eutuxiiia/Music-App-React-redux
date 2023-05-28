import React, {useContext} from "react";
import '../../../assets/css/header/profile/DropDownProfile.css';
import {ThemeContext} from "../../../../api/Theme";
import HoverButton from "../../HoverButton";
import {AccountBox} from "@material-ui/icons";

const DropDownProfile = () => {
    const useStyle = useContext(ThemeContext);
    return (
        <div style={useStyle.component} className="dropdown-profile">
            <HoverButton Icon={AccountBox} variant={"text"} text={"Profile"}/>
        </div>
    );
}
export default DropDownProfile;