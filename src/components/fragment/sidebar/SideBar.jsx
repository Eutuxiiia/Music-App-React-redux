import React, {useContext} from "react";
import "../../assets/css/sidebar/SideBar.css";
import SideBarOptions from "./SideBarOptions";
import {ThemeContext} from "../../../api/Theme";
import { HomeOutlined,  SearchOutlined} from "@material-ui/icons";

function SideBar() {
    const useStyle = useContext(ThemeContext);
    return (
        <aside style={useStyle.component} className={"aside-bar"}>
            <div className="aside-bar-container">
                <p className={"p1"}>
                    <span>LIBRARY</span>
                </p>
                <SideBarOptions className={"lib-sub"} Icon={HomeOutlined} href={"/home"} title={"Home"} />
                <SideBarOptions className={"lib-sub"} Icon={SearchOutlined} href={"/home/search"}  title={"Search"}/>
            </div>
        </aside>
    );
}

/*
*
* */
export default SideBar;