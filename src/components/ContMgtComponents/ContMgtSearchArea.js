import { useState } from 'react';
import SelectBoxComponent from "../CommonComponents/SelectBoxComponent";

function ContMgtSearchArea(props) {
    const [selectedDivCd, setSelectedDivCd] = useState('');
    const [selectedSttusCd, setSelectedSttusCd] = useState('');
    const [selectedTlkPerd, setSelectedTlkPerd] = useState(1);


    return (
        <div className="search_area">
            <div className="box">
                <div className="column">
                    <ul>
                        <li className="title01">계약 구분</li>
                        <li>
                            <SelectBoxComponent value={selectedDivCd} getData={setSelectedDivCd} selectClass={'select_input'} width={240} />
                            {selectedDivCd}
                        </li>
                    </ul>
                    <ul>
                        <li className="title01_col">계약 상태</li>
                        <li>
                            <SelectBoxComponent value={selectedSttusCd} getData={setSelectedSttusCd} selectClass={'select_input'} width={280} />
                            {selectedSttusCd}
                        </li>
                    </ul>
                </div>
                <div className="column">
                    <ul>
                        <li className="title01">신청기간</li>
                        <li style={{ lineHeight: 0 }}>

                        </li>
                        <li className="space">~</li>
                        <li style={{ lineHeight: 0 }}>

                        </li>
                        <li className="gab">
                            <button
                                type="button"
                                style={{ width: 82 }}
                                onClick={() => setSelectedTlkPerd(1)}
                                className={selectedTlkPerd === 1 ? 'button_tab_hover button_tab01' : 'button_tab01'}
                            >
                                당월
                            </button>
                            <button
                                type="button"
                                style={{ width: 82 }}
                                onClick={() => setSelectedTlkPerd(2)}
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
                                placeholder="'계약신청번호'"
                                v-model="contApyNo"
                            />
                        </li>
                    </ul>
                </div>
            </div >
            <div className="btn_search">
                {/* <a onClick={() => find}> */}
                <button type="button" className="button_03"></button>
                {/* </a> */}
            </div>
            {selectedDivCd} {selectedSttusCd} {selectedTlkPerd}
        </div >
    );
}

export default ContMgtSearchArea;