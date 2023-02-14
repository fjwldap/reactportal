import { ContMgtList, ContMgtView, MainPage } from "../routes";
import { Route, Routes } from 'react-router-dom';
import CommonPopup from "./CommonComponents/CommonPopup";
import React, { useState } from 'react';

function Section(props) {
    const [isModalShow, setShowModal] = useState(false);
    const [popupObject, setPopupObject] = useState({});

    function closeModal(val) {
        console.log("닫기", val);
        if (val) {//확인 버튼 누르면 별도의 함수 실행 후 닫기
            console.log(popupObject);
            if (popupObject.closeFunc != null) {
                //   popupObject.closeFunc()
            }
        }
        setShowModal(false);//모달 닫기
    }

    function showModal(val) {
        setPopupObject(val);//팝업메시지, 종료 후 실행할 함수
        setShowModal(true);//모달 띄우기
    }

    return (
        <section>
            {isModalShow ? <CommonPopup closeModal={closeModal} popupObject={popupObject} /> : ''}
            <Routes >
                <Route path="/" element={<MainPage />} />
                <Route path="/contmgtlist" element={<ContMgtList showModal={showModal} />} />
                <Route path="/contmgtview/:price" element={<ContMgtView />} />
            </Routes>
        </section>
    );

}

export default Section;