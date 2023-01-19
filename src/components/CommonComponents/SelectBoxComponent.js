function SelectBoxComponent(props) {
  const selectList = [
    {
      "cdNm": "선택",
      "cdEnglNm": "Select",
      "cdJpnNm": "選択",
      "value": ""
    },
    {
      "cdNm": "명의고객명",
      "cdEnglNm": "명의고객명",
      "cdJpnNm": "명의고객명",
      "value": "01",
      "show": false
    },
    {
      "cdNm": "납부고객명",
      "cdEnglNm": "납부고객명",
      "cdJpnNm": "납부고객명",
      "value": "02",
      "show": false
    },
    {
      "cdNm": "계약 ID",
      "cdEnglNm": "Subscribe ID",
      "cdJpnNm": "申込みID",
      "value": "03"
    },
    {
      "cdNm": "청구계정 ID",
      "cdEnglNm": "Payment Account ID",
      "cdJpnNm": "納付アカウント ID",
      "value": "04"
    },
    {
      "cdNm": "선박/항공/육상 ID",
      "cdEnglNm": "vessel / aircraft / land mobile ID",
      "cdJpnNm": "vessel / aircraft / land mobile ID",
      "value": "05"
    },
    {
      "cdNm": "선박명",
      "cdEnglNm": "vessel name",
      "cdJpnNm": "船名",
      "value": "06"
    },
    {
      "cdNm": "MSISDN,IMN",
      "cdEnglNm": "MSISDN,IMN",
      "cdJpnNm": "MSISDN,IMN",
      "value": "07"
    },
    {
      "cdNm": "IMSI",
      "cdEnglNm": "IMSI",
      "cdJpnNm": "IMSI",
      "value": "08"
    },
    {
      "cdNm": "IMEI",
      "cdEnglNm": "IMEI",
      "cdJpnNm": "IMEI",
      "value": "09"
    },
    {
      "cdNm": "시리얼번호",
      "cdEnglNm": "S/N",
      "cdJpnNm": "S/N",
      "value": "10"
    },
    {
      "cdNm": "ICC ID",
      "cdEnglNm": "ICC ID",
      "cdJpnNm": "ICC ID",
      "value": "11"
    },
    {
      "cdNm": "Gateway Account",
      "cdEnglNm": "Gateway Account",
      "cdJpnNm": "Gateway Account",
      "value": "12",
      "show": false
    },
    {
      "cdNm": "SP ID",
      "cdEnglNm": "SP ID",
      "cdJpnNm": "SP ID",
      "value": "13",
      "show": false
    },
    {
      "cdNm": "서비스오더번호",
      "cdEnglNm": "서비스오더번호",
      "cdJpnNm": "서비스오더번호",
      "value": "14",
      "show": false
    }
  ];
  const selected = props.value;

  function handleSelect(e) {
    props.getData(e.target.value);
  }

  return (
    <select
      className={props.selectClass}
      style={{ width: props.width }}
      value={selected}
      onChange={handleSelect}
    >
      {
        selectList.map((option, idx) => (
          <option key={idx} value={option.value}>
            {option.cdNm}
          </option>)
        )

      }
    </select >
  );
}

export default SelectBoxComponent;