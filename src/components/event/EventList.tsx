import {Dayjs} from "dayjs";
import {Event} from "../../types/Event";
import {Button, List} from "antd";
import EventListHeader from "./EventListHeader";
import styles from "./EventList.module.css";
import {DeleteOutlined} from "@ant-design/icons";

interface EventListProps {
  events: Event[];
  selectedDate: Dayjs;
  onDeleteEvent: (id: string) => void;
}

function EventList({events, selectedDate, onDeleteEvent}: EventListProps) {
  const filteredEvents = events.filter((event) =>
    event.date.isSame(selectedDate, "day")
  );

  return (
    <List
      className={styles.eventList}
      header={
        <div className={styles.eventListHeader}>
          <EventListHeader selectedDate={selectedDate} />
        </div>
      }
      bordered
      dataSource={filteredEvents}
      renderItem={(item) => (
        <List.Item
          className={styles.eventItem}
          actions={[
            <Button
              icon={<DeleteOutlined />}
              onClick={() => onDeleteEvent(item.id)}
            />,
          ]}>
          {item.title}
        </List.Item>
      )}
      locale={{
        emptyText: <div className={styles.emptyText}>일정이 없습니다.</div>,
      }}
    />
  );
}

export default EventList;
