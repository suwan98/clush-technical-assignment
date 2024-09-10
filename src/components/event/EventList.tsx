import {Dayjs} from "dayjs";
import {Event} from "../../types/Event";
import {List} from "antd";
import EventListHeader from "./EventListHeader";

interface EventListProps {
  events: Event[];
  selectedDate: Dayjs;
}

function EventList({events, selectedDate}: EventListProps) {
  const filteredEvents = events.filter((event) =>
    event.date.isSame(selectedDate, "day")
  );
  return (
    <List
      header={<EventListHeader selectedDate={selectedDate} />}
      bordered
      dataSource={filteredEvents}
      renderItem={(item) => <List.Item>{item.title}</List.Item>}
    />
  );
}

export default EventList;
