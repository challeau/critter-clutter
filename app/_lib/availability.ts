import { TimeAvailability, Month, AvailabilityCalendar } from "./types";

/**
 * Checks if a critter is available at a certain hour
 */
export function checkHourAvailibility(
  availability: TimeAvailability,
  hours: number,
) {
  if (!availability) {
    return false;
  }

  // for critters that become available in the PM
  if (availability.start_time > availability.end_time) {
    return (
      (hours >= 0 && availability.end_time > hours) ||
      availability.start_time <= hours
    );
  }

  // check the second availability period if there's one
  if (availability.second_start && availability.second_end) {
    return (
      availability.second_start <= hours && availability.second_end > hours
    );
  }

  return availability.start_time <= hours && availability.end_time > hours;
}

/**
 * Return a critter's availability by month
 */
export function getMonthsAvailability(
  months_array: Month[],
): AvailabilityCalendar {
  const isAvailable = (month: Month) => {
    return months_array.includes(month);
  };
  return {
    1: isAvailable(1),
    2: isAvailable(2),
    3: isAvailable(3),
    4: isAvailable(4),
    5: isAvailable(5),
    6: isAvailable(6),
    7: isAvailable(7),
    8: isAvailable(8),
    9: isAvailable(9),
    10: isAvailable(10),
    11: isAvailable(11),
    12: isAvailable(12),
  };
}

/**
 * Return a critter's availability by time
 */
export function getTimeAvailability(time: string) {
  // critter is available all day
  if (time === "All day") {
    return {
      start_time: 0,
      end_time: 23,
    };
  }

  const splitTime = time.split(/\s+/);

  // critter is available only once a day
  if (splitTime.length == 5) {
    const start = Number(splitTime[0]);
    const end = Number(splitTime[3]);

    return {
      start_time: splitTime[1] === "AM" ? start : start + 12,
      end_time: splitTime[4] === "AM" ? end : end + 12,
    };
  }
  // critter is available twice a day
  else {
    const start = Number(splitTime[0]);
    const end = Number(splitTime[3]);
    const second_start = Number(splitTime[6]);
    const second_end = Number(splitTime[9]);

    return {
      start_time: splitTime[1] === "AM" ? start : start + 12,
      end_time: splitTime[4] === "AM" ? end : end + 12,
      second_start: splitTime[7] === "AM" ? second_start : second_start + 12,
      second_end: splitTime[10] === "AM" ? second_end : second_end + 12,
    };
  }
}
