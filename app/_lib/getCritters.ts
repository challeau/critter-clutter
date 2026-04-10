/* eslint-disable @typescript-eslint/no-explicit-any */
import { getMonthsAvailability, getTimeAvailability } from "./availability";
import { Bug, Critter, CritterKinds, DeepSeaCreature, Fish } from "./types";

function formatBugs(data: any) {
  const bugs: Bug[] = [];

  Object.values(data).forEach((bug: any) => {
    bugs.push({
      name: bug.name,
      index: bug.number,
      rarity: bug.rarity,
      location: bug.location,
      weather: bug.weather,

      nook_price: bug.sell_nook,
      flick_price: bug.sell_flick,

      image_url: bug.image_url,
      render_url: bug.render_url,

      months_availability: {
        N: getMonthsAvailability(bug.north.months_array),
        S: getMonthsAvailability(bug.south.months_array),
      },
      time_availability: getTimeAvailability(
        bug.north.availability_array[0].time,
      ),
    });
  });

  // remove duplicates
  const uniqueBugs = bugs.filter(
    (bug: Bug, index, array: Bug[]) =>
      array.findIndex((obj) => obj.index === bug.index) === index,
  );

  return uniqueBugs;
}

function formatFishes(data: any): Critter[] {
  const fishes: Fish[] = [];

  Object.values(data).forEach((fish: any) => {
    fishes.push({
      name: fish.name,
      index: fish.number,
      rarity: fish.rarity,
      location: fish.location,
      shadow_size: fish.shadow_size,

      nook_price: fish.sell_nook,
      cj_price: fish.sell_cj,

      image_url: fish.image_url,
      render_url: fish.render_url,

      months_availability: {
        N: getMonthsAvailability(fish.north.months_array),
        S: getMonthsAvailability(fish.south.months_array),
      },
      time_availability: getTimeAvailability(
        fish.north.availability_array[0].time,
      ),
    });
  });

  return fishes;
}

function formatDeepSeaCreatures(data: any) {
  const deepSeaCreatures: DeepSeaCreature[] = [];

  Object.values(data).forEach((creature: any) => {
    deepSeaCreatures.push({
      name: creature.name,
      index: creature.number,
      rarity: creature.rarity,
      shadow_size: creature.shadow_size,
      speed: creature.shadow_speed,

      nook_price: creature.sell_nook,

      image_url: creature.image_url,
      render_url: creature.render_url,

      months_availability: {
        N: getMonthsAvailability(creature.north.months_array),
        S: getMonthsAvailability(creature.south.months_array),
      },
      time_availability: getTimeAvailability(
        creature.north.availability_array[0].time,
      ),
    });
  });

  return deepSeaCreatures;
}

export async function getCritters(type: CritterKinds, route: string) {
  const res = await fetch(`https://api.nookipedia.com/nh/${route}`, {
    headers: {
      "X-API-KEY": process.env.NOOKIPEDIA_API_KEY ?? "",
    },
    cache: "force-cache",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch external API");
  }

  const data = await res.json();

  switch (type) {
    case CritterKinds.Bug:
      return formatBugs(data);
    case CritterKinds.Fish:
      return formatFishes(data);
    case CritterKinds.DeepSeaCreature:
      return formatDeepSeaCreatures(data);
  }
}
