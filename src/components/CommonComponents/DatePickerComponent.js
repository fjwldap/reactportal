
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ko } from 'date-fns/esm/locale';

function DatePickerComponent(props) {
  const date = props.date;

  function handleDateChange(e) {
    props.getData(e);
  }

  return (
    <DatePicker
      selected={date}
      // onSelect={handleDateSelect}  // 요일이 클릭된 경우 
      onChange={handleDateChange}
      locale={ko}
      dateFormat={props.dateFormat}
      placeholderText={props.placeholder}
      isClearable
      showMonthYearPicker
      className='calender_input'
    />
  );
}
DatePickerComponent.defaultProps = {
  placeholder: '날짜를 입력하세요',
  dateFormat: 'yyyy.MM.dd'
}
export default DatePickerComponent;

