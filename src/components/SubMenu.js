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
                                    <span onClick={() => moveTo('')} > 계약 신청 </span>
                                </li>
                                <li>
                                    <a href={() => false} onClick={() => moveTo('')}>목록</a>
                                </li>
                                <li>
                                    <a href={() => false} onClick={() => moveTo('')}> 신청</a>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <span onClick={() => moveTo('')}>계약 목록</span>
                                </li>
                                <li>
                                    <a href={() => false} onClick={() => moveTo('')}>
                                        목록
                                    </a>
                                </li>
                            </ul>

                        </div>
                        :
                        <div className="area">
                            <ul className="m_gab02">
                                <li>
                                    <span onClick={() => moveTo('')}>계약 신청 관리</span>
                                </li>
                                <li>
                                    <a href={() => false} onClick={() => moveTo('contmgtlist')}> 인터넷 신청 관리 </a>
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