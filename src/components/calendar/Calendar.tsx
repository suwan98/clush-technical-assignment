import {Calendar as AntCalendar} from "antd";
import {Dayjs} from "dayjs";

interface CalenderProps {
  value: Dayjs;
  onSelectDate: (date: Dayjs) => void;
}

function Calendar({value, onSelectDate}: CalenderProps) {
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
