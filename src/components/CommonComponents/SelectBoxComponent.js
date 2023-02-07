function SelectBoxComponent(props) {
  const selectList = props.list;
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