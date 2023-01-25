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
        setSubMenuNo(0);
    }

    function hideSubMenu() {
        setSubMenuNo(0);
    }

    if (subMenuNo !== 0)
        return (
            <div id="sub_menu" onMouseLeave={hideSubMenu}>
                {
                    subMenuNo === 1 ?
                        <div className="area">
                            <ul className="m_gab01">
                                <li>
                                    <span> 계약 신청 </span>
                                </li>
                                <li onClick={() => moveTo('')}>목록
                                </li>
                                <li onClick={() => moveTo('')}> 신청
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <span onClick={() => moveTo('')}>계약 목록</span>
                                </li>
                                <li onClick={() => moveTo('')}>
                                    목록
                                </li>
                            </ul>

                        </div>
                        :
                        <div className="area">
                            <ul className="m_gab02">
                                <li>
                                    <span >계약 신청 관리</span>
                                </li>
                                <li onClick={() => moveTo('contmgtlist')}> 인터넷 신청 관리
                                </li>
                            </ul>
                        </div>
                }
            </div>
        );
    else
        return null;

}

export default SubMenu;