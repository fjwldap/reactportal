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
                    <img src={require("../img/logo_main.png")} onClick={() => moveToMenu("")} alt="main" />
                </div>
                <div className="brand_name">Portal Solution</div>
            </div>
            <div id="menu">
                <div className="area">
                    <ul onMouseLeave={hideSubMenu}>
                        <li onMouseOver={() => showSubMenu(1)} >  인터넷 </li>
                        <li onMouseOver={() => showSubMenu(2)}  >  계약관리 </li>
                        <SubMenu no={no} />
                    </ul>
                </div>
            </div>
        </header>
    );

}

export default Header;