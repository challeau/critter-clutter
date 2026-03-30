import { Bug } from "../_types";
import { getHemisphereAvailability } from "../_utils";

/**
 * Query the Nookipedia API and return a formatted list of all bugs
 */
export async function getBugs(): Promise<Bug[]> {
  const bugs: Bug[] = [];

  const res = await fetch("https://api.nookipedia.com/nh/bugs", {
    headers: {
      "X-API-KEY": process.env.NOOKIPEDIA_API_KEY ?? "",
    },
    cache: "force-cache",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch external API");
  }

  const data = await res.json();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
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

      availability: {
        N: getHemisphereAvailability(bug.north.times_by_month),
        S: getHemisphereAvailability(bug.south.times_by_month),
      },
    });
  });
  return bugs;
}
