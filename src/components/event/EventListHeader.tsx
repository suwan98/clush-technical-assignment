import {Dayjs} from "dayjs";
import styles from "./EventListHeader.module.css";

interface EventListHeaderProps {
  selectedDate: Dayjs;
  eventCount: number;
}

function EventListHeader({selectedDate, eventCount}: EventListHeaderProps) {
  return (
    <div className={styles.eventListHeaderContainer}>
      <div className={styles.date}>
        {selectedDate.format("YYYY년 MM월 DD일")} 일정
      </div>
      <div className={styles.eventCount}>{eventCount}개의 일정</div>
    </div>
  );
}

export default EventListHeader;
