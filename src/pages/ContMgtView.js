import React, { forwardRef, useImperativeHandle } from 'react';
import { useParams } from "react-router-dom";

const ContMgtView = forwardRef((props, ref) => {

    useImperativeHandle(ref, () => ({
        closeFunc
    }));//부모에서 호출 가능하도록..? 함수 이름..

    const params = useParams();

    function closeFunc() {
        console.log("view화면에서 팝업을 닫았다")
    }

    function openModal() {

        props.showModal({
            popupMsg: "view화면에서 눌렀다",
            closeFunc: 'closeFunc'
        });//모달 띄우기
    }

    console.log(params);   // 결괏값을 확인해보자 
    return (
        <div className="wrap">
            <div className="title_area">
                <h1>상세</h1>
                <span>
                    Home {'>'} 메뉴 2 {'>'} 메뉴 2-1 {'>'}
                    <strong>상세</strong>
                </span>
            </div>
            <div className="btn_search">
                <button type="button" className="button_04"
                    onClick={openModal}>팝업 호출</button>
            </div>
            price : {params.price}
        </div>
    );
})

export default ContMgtView;