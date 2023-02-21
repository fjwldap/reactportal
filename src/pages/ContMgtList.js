import React, { useState, forwardRef, useImperativeHandle } from 'react';
import { useNavigate } from 'react-router-dom';
import ContMgtSearchArea from "../components/ContMgtComponents/ContMgtSearchArea";
import AgGridComponent from "../components/CommonComponents/AgGridComponent";

const ContMgtList = forwardRef((props, ref) => {

    useImperativeHandle(ref, () => ({
        closeFunc
    }));//부모에서 호출 가능하도록..? 함수 이름..

    let navigate = useNavigate();
    // Each Column Definition results in one Column.
    const [columnDefs, setColumnDefs] = useState([
        { field: 'make', filter: true },
        { field: 'make', filter: true },
        { field: 'price' },
        { field: 'make', filter: true },
        { field: 'price' },
        { field: 'make', filter: true },
        { field: 'model', filter: true },
        { field: 'price' }
    ]);
    const [rowData, setRowData] = useState(
        [{
            'make': 'make',
            'model': 'model',
            'price': 100,
        },
        {
            'make': 'make',
            'model': 'model',
            'price': 200,
        },
        {
            'make': 'make',
            'model': 'model',
            'price': 300,
        }]
    ); // Set rowData to Array of Objects, one Object per Row

    function getSearchData(value) {
        // 검색조건 가져오기
        console.log(value);
        //검색하기 rowdata set


        props.showModal({
            popupMsg: "list 화면에서 팝업 호출",
            closeFunc: 'closeFunc'
        });//모달 띄우기
    }

    function rowClicked(val) {
        console.log(val);
        navigate("/contmgtview/" + val.price);
    }

    function closeFunc() {
        console.log("list 화면에서 팝업을 닫았다")
        setRowData([{
            'make': 'make',
            'model': 'model',
            'price': 100,
        },
        {
            'make': 'make',
            'model': 'model',
            'price': 100,
        }, {
            'make': 'make',
            'model': 'model',
            'price': 100,
        },
        {
            'make': 'make',
            'model': 'model',
            'price': 100,
        }, {
            'make': 'make',
            'model': 'model',
            'price': 100,
        },
        {
            'make': 'make',
            'model': 'model',
            'price': 100,
        }, {
            'make': 'make',
            'model': 'model',
            'price': 100,
        },
        {
            'make': 'make',
            'model': 'model',
            'price': 100,
        }, {
            'make': 'make',
            'model': 'model',
            'price': 100,
        },
        {
            'make': 'make',
            'model': 'model',
            'price': 100,
        },]);
    }

    return (
        <div className="wrap">
            <div className="title_area">
                <h1>신청관리</h1>
                <span>
                    Home {'>'} 메뉴 2 {'>'} 메뉴 2-1 {'>'}
                    <strong>신청관리</strong>
                </span>
            </div>

            <ContMgtSearchArea getSearchData={getSearchData} />

            <div className="search_line"></div>
            <div id="bbs_area">

                <AgGridComponent
                    className="ag-grid bbs_link"
                    columnDefs={columnDefs} rowData={rowData}
                    rowClicked={rowClicked} />
            </div>
        </div>
    );
})

export default ContMgtList;