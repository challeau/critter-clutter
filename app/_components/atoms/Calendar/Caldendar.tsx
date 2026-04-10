import "./calendar.css";

import { AvailabilityCalendar, ColorTheme } from "@/app/_lib";

type CalendarProps = {
  months: AvailabilityCalendar;
  theme: ColorTheme;
};

export function Calendar({ months, theme }: CalendarProps) {
  const getClassName = (month: boolean) => (month ? theme : "");

  return (
    <ul className={`calendar ${theme}`}>
      <li className={getClassName(months[1])}>JAN</li>
      <li className={getClassName(months[2])}>FEB</li>
      <li className={getClassName(months[3])}>MAR</li>
      <li className={getClassName(months[4])}>APR</li>
      <li className={getClassName(months[5])}>MAY</li>
      <li className={getClassName(months[6])}>JUN</li>
      <li className={getClassName(months[7])}>JUL</li>
      <li className={getClassName(months[8])}>AUG</li>
      <li className={getClassName(months[9])}>SEP</li>
      <li className={getClassName(months[10])}>OCT</li>
      <li className={getClassName(months[11])}>NOV</li>
      <li className={getClassName(months[12])}>DEC</li>
    </ul>
  );
}
