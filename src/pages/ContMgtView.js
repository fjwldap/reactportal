import React from 'react';
import { useParams } from "react-router-dom";

function ContMgtView(props) {
    const params = useParams();

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
            price : {params.price}
        </div>
    );
}

export default ContMgtView;