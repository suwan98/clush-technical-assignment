import {Calendar as AntCalendar} from "antd";
import {Dayjs} from "dayjs";

interface CalenderProps {}

function Calendar({value, onSelectDate}) {
  const onSelect = (value: Dayjs) => {
    onSelectDate(value);
  };

  const onPanelChange = (value: Dayjs) => {
    onSelectDate(value);
  };

  return (
    <>
      <AntCalendar
        value={value}
        onSelect={onSelect}
        onPanelChange={onPanelChange}
      />
    </>
  );
}

export default Calendar;
