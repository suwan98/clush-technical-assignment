import {Dayjs} from "dayjs";

interface EventListHeaderProps {
  selectedDate: Dayjs;
}

function EventListHeader({selectedDate}: EventListHeaderProps) {
  return <div> {selectedDate.format("'YYYY년 MM월 DD일")}일 일정</div>;
}

export default EventListHeader;
