import { Month, HemisphereType } from "./utils";

// Splits critter availability in one or two periods
export type TimeAvailability = {
  start_time: number; // european time representation
  end_time: number;
  second_start?: number; // if gap
  second_end?: number;
};

// Critter availability by time and month
export type AvailabilityCalendar = Record<Month, boolean>;

// Critter availability by hemisphere
export type HemisphereAvailability = Record<
  HemisphereType,
  AvailabilityCalendar
>;
