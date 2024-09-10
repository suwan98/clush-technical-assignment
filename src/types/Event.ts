import {Dayjs} from "dayjs";

export interface Event {
  id: string;
  title: string;
  date: Dayjs;
}
