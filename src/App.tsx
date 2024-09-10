import {useState} from "react";
import Calendar from "./components/calendar/Calendar";
import dayjs, {Dayjs} from "dayjs";
import EventList from "./components/event/EventList";

function App() {
  const [selectedDate, setSelectedDate] = useState<Dayjs>(dayjs());
  const [events, setEvents] = useState<
    {id: string; title: string; date: Dayjs}[]
  >([]);

  return (
    <>
      <Calendar value={selectedDate} onSelectDate={setSelectedDate} />
      <EventList events={events} selectedDate={selectedDate} />
    </>
  );
}

export default App;
