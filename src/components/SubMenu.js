import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

function SubMenu(props) {
    let navigate = useNavigate();
    const [subMenuNo, setSubMenuNo] = useState(props.no);

    useEffect(() => {
        setSubMenuNo(props.no);
    }, [props.no]);

    function moveTo(str) {
        navigate(str);
        props.hideSubMenu();
    }

    function hideSubMenu() {
        props.hideSubMenu();
    }

    if (subMenuNo !== 0)
        return (
            <div>
                <div id="sub_menu" onMouseLeave={hideSubMenu}>
                    {
                        subMenuNo === 1 ?
                            <div className="area">
                                <ul className="m_gab01">
                                    <li>
                                        <span> 메뉴 1-1 </span>
                                    </li>
                                    <li onClick={() => moveTo('')}>목록 X
                                    </li>
                                    <li onClick={() => moveTo('')}> 신청 X
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        <span onClick={() => moveTo('')}>메뉴 1-2</span>
                                    </li>
                                    <li onClick={() => moveTo('')}>
                                        목록 X
                                    </li>
                                </ul>

                            </div>
                            :
                            <div className="area">
                                <ul className="m_gab02">
                                    <li>
                                        <span >메뉴 2-1</span>
                                    </li>
                                    <li onClick={() => moveTo('contmgtlist')}> 신청 관리
                                    </li>
                                </ul>
                            </div>
                    }
                </div>
                <div className="sub_menu_overlay" onMouseOver={hideSubMenu}></div>
            </div>
        );
    else
        return null;

}

export default SubMenu;