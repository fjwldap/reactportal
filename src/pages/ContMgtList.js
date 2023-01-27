import React, { useState, } from 'react';
import ContMgtSearchArea from "../components/ContMgtComponents/ContMgtSearchArea";
import AgGridComponent from "../components/CommonComponents/AgGridComponent";

function ContMgtList(props) {
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
            'price': 100,
        },
        {
            'make': 'make',
            'model': 'model',
            'price': 100,
        }]
    ); // Set rowData to Array of Objects, one Object per Row

    function getSearchData(value) {
        // 검색조건 가져오기
        console.log(value);
        //검색하기 rowdata set
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
        },])
    }

    return (
        <div className="wrap">
            <ContMgtSearchArea getSearchData={getSearchData} />

            <div className="search_line"></div>
            <div id="bbs_area">

                <AgGridComponent
                    className="ag-grid bbs_link"
                    columnDefs={columnDefs} rowData={rowData} />
            </div>
        </div>
    );
}

export default ContMgtList;