import { useState, useEffect } from 'react';
import DatePickerComponent from '../CommonComponents/DatePickerComponent';
import SelectBoxComponent from "../CommonComponents/SelectBoxComponent";
import selectBoxOption from "../../assets/selectBoxOption.json";

function ContMgtSearchArea(props) {
    const searchDivCdList = selectBoxOption.optionsSearchDiv;
    const [selectedDivCd, setSelectedDivCd] = useState('');
    const [selectedSttusCd, setSelectedSttusCd] = useState('');
    const [selectedTlkPerd, setSelectedTlkPerd] = useState(1);
    const [contApyNo, setContApyNo] = useState('');
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    function onChange(e) {
        setContApyNo(e.target.value)
    }

    function getSearchData() {
        // console.log(selectedDivCd, selectedSttusCd, selectedTlkPerd, contApyNo, startDate, endDate);
        var searchData = {
            "selectedDivCd": selectedDivCd,
            "selectedSttusCd": selectedSttusCd,
            "contApyNo": contApyNo,
            "startDate": startDate,
            "endDate": endDate,
        };
        props.getSearchData(searchData);//검색조건 object로 전달
    }

    function setMonth(val) {
        if (val === 1) {
            // 당월
            setStartDate(new Date());
            setEndDate(new Date());
            setSelectedTlkPerd(1);
        }
        else if (val === 2) {
            // 전월
            setSelectedTlkPerd(2);
            let prevDate = new Date();
            prevDate.setMonth(prevDate.getMonth() - 1);
            setStartDate(prevDate);
            setEndDate(prevDate);
        }
        else {
            setSelectedTlkPerd(0);
        }
        // console.log(new Date(), "==", startDate, endDate);
    }

    //같은 달인지 확인
    function sameMonth(mon1, mon2) {
        if (mon1 === null || mon2 === null) return false;

        mon1 = new Date(mon1);
        mon2 = new Date(mon2);

        let year1 = mon1.getFullYear();
        let month1 = mon1.getMonth();

        let year2 = mon2.getFullYear();
        let month2 = mon2.getMonth();

        if (year1 === year2 && month1 === month2) return true;
        else return false;
    }

    useEffect(() => {
        if (startDate === null || endDate === null)
            return;

        let today = new Date();
        today.setMonth(today.getMonth() - 1);
        // console.log(today.getMonth(), startDate.getMonth(), endDate.getMonth());

        if (sameMonth(startDate, endDate)) {
            if (sameMonth(startDate, new Date()))
                setSelectedTlkPerd(1);
            if (sameMonth(startDate, today))
                setSelectedTlkPerd(2);
        }
        else {
            setSelectedTlkPerd(0);
        }
    }, [startDate, endDate]);

    return (
        <div className="search_area">
            <div className="box">
                <div className="column">
                    <ul>
                        <li className="title01">계약 구분</li>
                        <li>
                            <SelectBoxComponent value={selectedDivCd} getData={setSelectedDivCd}
                                selectClass={'select_input'} width={505}
                                list={searchDivCdList} />
                        </li>
                    </ul>
                    <ul>
                        <li className="title01_col">계약 상태</li>
                        <li>
                            <SelectBoxComponent value={selectedSttusCd} getData={setSelectedSttusCd}
                                list={searchDivCdList}
                                selectClass={'select_input'} width={492} />
                        </li>
                    </ul>
                </div>
                <div className="column">
                    <ul>
                        <li className="title01">신청기간</li>
                        <li style={{ width: "150px" }}>
                            <DatePickerComponent date={startDate} dateFormat='yyyy-MM' getData={setStartDate} />
                        </li>
                        <li className="space">~</li>
                        <li style={{ width: "150px" }}>
                            <DatePickerComponent date={endDate} dateFormat='yyyy-MM' getData={setEndDate} />
                        </li>
                        <li className="gab">
                            <button
                                type="button"
                                style={{ width: 82 }}
                                onClick={() => setMonth(1)}
                                className={selectedTlkPerd === 1 ? 'button_tab_hover button_tab01' : 'button_tab01'}
                            >
                                당월
                            </button>
                            <button
                                type="button"
                                style={{ width: 82 }}
                                onClick={() => setMonth(2)}
                                className={selectedTlkPerd === 2 ? 'button_tab_hover button_tab03 tab_size02' : 'button_tab03 tab_size02'}
                            >
                                전월
                            </button>
                        </li>
                    </ul>
                    <ul>
                        <li className="title01_col">계약신청번호</li>
                        <li>
                            <input
                                type="text"
                                className="text_input"
                                style={{ width: 470 }}
                                placeholder="계약신청번호"
                                name="contApyNo"
                                value={contApyNo}
                                onChange={onChange}
                            />
                        </li>
                    </ul>
                </div>
            </div >
            <div className="btn_search">
                <button type="button" className="button_03"
                    onClick={getSearchData}></button>
            </div>
        </div >
    );
}

export default ContMgtSearchArea;