import React from 'react';
import { useParams } from "react-router-dom";

function ContMgtView(props) {
    const params = useParams();

    console.log(params);   // 결괏값을 확인해보자 
    return (
        <div>cont mgt view {params.price}</div>
    );
}

export default ContMgtView;