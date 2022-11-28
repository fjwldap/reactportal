function SelectBoxComponent(props) {

  function updateValue(value) {
    console.log(value);
  }

  return (
    <select
      className={props.selectClass}
      style={{ width: props.width }}
      value={props.value}
      input={() => updateValue(props.value)}
    >
      {/* <option v-for="(option, idx) in options" :key="idx" :value="option.value">
      {{ showValue(option) }}
    </option> */}
    </select >
  );
}

export default SelectBoxComponent;