import {Calendar as AntCalendar, Badge} from "antd";
import {Dayjs} from "dayjs";
import {Event} from "../../types/Event";
import styles from "./Calendar.module.css";
import locale from "antd/es/date-picker/locale/ko_KR";

interface CalenderProps {
  value: Dayjs;
  onSelectDate: (date: Dayjs) => void;
  events: Event[];
}

function Calendar({value, onSelectDate, events = []}: CalenderProps) {
  const onSelect = (value: Dayjs) => {
    onSelectDate(value);
  };

  const cellRender = (date: Dayjs) => {
    const dayEvents = events.filter((event) => event.date.isSame(date, "day"));
    return (
      <ul className={styles.events}>
        {dayEvents.map((event) => (
          <li key={event.id}>
            <Badge status="success" text={event.title} />
          </li>
        ))}
      </ul>
    );
  };

  return (
    <AntCalendar
      value={value}
      onSelect={onSelect}
      cellRender={cellRender}
      locale={locale}
    />
  );
}

export default Calendar;
