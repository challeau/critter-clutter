import {
  ColorTheme,
  AvailabilityCalendar,
  TimeAvailability,
  Month,
} from "./_types";

/**
 * Returns a color theme based on the current url. Default: green.
 */
export function getColorThemeFromPathname(pathname: string) {
  switch (pathname) {
    case "/fishes":
      return ColorTheme.Fishes;
    case "/deep-sea-creatures":
      return ColorTheme.DeepSeaCreatures;
    case "/bugs":
    default:
      return ColorTheme.Bugs;
  }
}

/**
 * Returns the current month and hours
 */
export function getCurrentDateTime() {}

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

type GetHemisphereAvailabilityInput = Record<Month, string>;

/**
 * Return a critter's availability by time and month
 */
export function getHemisphereAvailability(
  input: GetHemisphereAvailabilityInput,
): AvailabilityCalendar {
  const strToTimestamps = (str: string) => {
    // critter is not available
    if (str === "NA") {
      return null;
    }

    // critter is available all day
    if (str === "All day") {
      return {
        start_time: 0,
        end_time: 23,
      };
    }

    const time = str.split(/\s+/);

    // critter is available only once a day
    if (time.length == 5) {
      const start = Number(time[0]);
      const end = Number(time[3]);

      return {
        start_time: time[1] === "AM" ? start : start + 12,
        end_time: time[4] === "AM" ? end : end + 12,
      };
    }
    // critter is available twice a day
    else {
      const start = Number(time[0]);
      const end = Number(time[3]);
      const second_start = Number(time[6]);
      const second_end = Number(time[9]);

      return {
        start_time: time[1] === "AM" ? start : start + 12,
        end_time: time[4] === "AM" ? end : end + 12,
        second_start: time[7] === "AM" ? second_start : second_start + 12,
        second_end: time[10] === "AM" ? second_end : second_end + 12,
      };
    }
  };

  const availability = {
    1: strToTimestamps(input["1"]),
    2: strToTimestamps(input["2"]),
    3: strToTimestamps(input["3"]),
    4: strToTimestamps(input["4"]),
    5: strToTimestamps(input["5"]),
    6: strToTimestamps(input["6"]),
    7: strToTimestamps(input["7"]),
    8: strToTimestamps(input["8"]),
    9: strToTimestamps(input["9"]),
    10: strToTimestamps(input["10"]),
    11: strToTimestamps(input["11"]),
    12: strToTimestamps(input["12"]),
  };

  return availability;
}
