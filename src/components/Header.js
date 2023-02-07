import SubMenu from "./SubMenu";
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Header(props) {
    let navigate = useNavigate(); const [no, setNo] = useState(0);

    function moveToMenu(str) {
        navigate(str);
    }

    function showSubMenu(no) {
        setNo(no);
    }

    function hideSubMenu() {
        setNo(0);
    }

    return (
        <header>
            <div id="brand">
                <div className="gap">
                    <img src={require("../img/logo192.png")} onClick={() => moveToMenu("")} alt="main" />
                </div>
                <div className="brand_name">React Portal</div>
                <div className="profile">
                    <img src={require("../img/logo192.png")} onClick={() => moveToMenu("")} alt="main" />
                </div>
            </div>
            <div id="menu">
                <div className="area">
                    <ul onMouseLeave={hideSubMenu}>
                        <li onMouseOver={() => showSubMenu(1)} > 메뉴 1 </li>
                        <li onMouseOver={() => showSubMenu(2)} > 메뉴 2 </li>
                        <SubMenu no={no} />
                    </ul>
                </div>
            </div>
        </header>
    );

}

export default Header;