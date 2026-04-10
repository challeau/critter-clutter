import "./timelapse.css";

import { TimeAvailability } from "@/app/_lib";

import { TimeLapseBlob } from "../Blobs";

function formatTime(time: number, format: "12" | "24") {
  if (format == "24") {
    let time_str = `${time}:00`;
    if (time < 10) {
      time_str = "0" + time_str;
    }
    return time_str;
  }

  const meridiem = time < 12 ? "AM" : "PM";

  if (meridiem === "PM") {
    time -= 12;
  }
  if (meridiem === "AM" && time == 0) {
    time += 12;
  }
  return `${time}:00 ${meridiem}`;
}

export function Timelapse(props: TimeAvailability) {
  if (!props) {
    return null;
  }

  const { start_time, end_time, second_start, second_end } = props;

  const times = [
    <div key="0" className="flex-container-col timestamp">
      <span>{formatTime(start_time, "12")}</span>
      <span className="hint">-</span>
      <span>{formatTime(end_time, "12")}</span>
    </div>,
  ];

  if (second_start && second_end) {
    times.push(
      <div key="1" className="flex-container-col timestamp">
        <span className="and">AND</span>
        <span>{formatTime(second_start, "12")}</span>
        <span className="hint">-</span>
        <span>{formatTime(second_end, "12")}</span>
      </div>,
    );
  }

  return (
    <div className="timelapse flex-container-col">
      <TimeLapseBlob className="background" />
      {times}
    </div>
  );
}
