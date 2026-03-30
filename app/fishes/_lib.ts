import { Fish } from "../_types";
import { getHemisphereAvailability } from "../_utils";

/**
 * Query the Nookipedia API and return a formatted list of all fishes
 * Note : it's "fishes" and not "fish" cause there are several species
 */
export async function getFishes(): Promise<Fish[]> {
  const fishes: Fish[] = [];

  const res = await fetch("https://api.nookipedia.com/nh/fish", {
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

      availability: {
        N: getHemisphereAvailability(fish.north.times_by_month),
        S: getHemisphereAvailability(fish.south.times_by_month),
      },
    });
  });
  return fishes;
}
