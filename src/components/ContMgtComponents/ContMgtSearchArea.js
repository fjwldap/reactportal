import SelectBoxComponent from "../CommonComponents/SelectBoxComponent";

function ContMgtSearchArea(props) {
    const selectedTlkPerd = 1;

    function selectTlkPerd(num) {
        console.log(num);
    }

    return (
        <div className="search_area">
            <div className="box">
                <div className="column">
                    <ul>
                        <li className="title01">계약 구분</li>
                        <li>
                            <SelectBoxComponent value={'asdf'} selectClass={'select_input'} width={180} />
                        </li>
                    </ul>
                    <ul>
                        <li className="title01_col">계약 상태</li>
                        <li>
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
                                onClick={() => selectTlkPerd(1)}
                                className={selectedTlkPerd === 1 ? 'button_tab_hover button_tab01' : 'button_tab01'}
                            >
                                당월
                            </button>
                            <button
                                type="button"
                                style={{ width: 82 }}
                                onClick={() => selectTlkPerd(2)}
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
        </div >
    );
}

export default ContMgtSearchArea;