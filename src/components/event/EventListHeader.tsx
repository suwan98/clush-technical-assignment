import {Dayjs} from "dayjs";

interface EventListHeaderProps {
  selectedDate: Dayjs;
}

function EventListHeader({selectedDate}: EventListHeaderProps) {
  return <div> {selectedDate.format("YYYY년 MMMM D")}일 일정</div>;
}

export default EventListHeader;
