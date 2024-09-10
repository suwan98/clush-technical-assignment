import {useState} from "react";
import Calendar from "./components/calendar/Calendar";
import dayjs, {Dayjs} from "dayjs";
import EventList from "./components/event/EventList";
import "dayjs/locale/ko";
import {v4 as uuidv4} from "uuid";
import EventForm from "./components/event/EventForm";
import {Event} from "./types/Event";
import {Modal} from "antd";

function App() {
  const [selectedDate, setSelectedDate] = useState<Dayjs>(dayjs());
  const [events, setEvents] = useState<Event[]>([]);

  /* 모달을 통한 이벤트 폼 렌더링 상태 */
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleDateSelect = (date: Dayjs) => {
    setSelectedDate(date);
    setIsModalVisible(true);
  };

  const handleAddEvent = (newEvent: {title: string; date: Dayjs}) => {
    const event: Event = {
      id: uuidv4(),
      title: newEvent.title,
      date: newEvent.date,
    };
    setEvents([...events, event]);
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Calendar value={selectedDate} onSelectDate={handleDateSelect} />
      <EventList events={events} selectedDate={selectedDate} />
      <Modal
        title="새로운 일정 추가하기"
        open={isModalVisible}
        onCancel={handleCancel}
        footer={null}>
        <EventForm onSubmit={handleAddEvent} initialDate={selectedDate} />
      </Modal>
    </>
  );
}

export default App;
