import { DeepSeaCreature } from "../_types";
import { getHemisphereAvailability } from "../_utils";

/**
 * Query the Nookipedia API and return a formatted list of all sea creatures
 */
export async function getSeaCreatures(): Promise<DeepSeaCreature[]> {
  const deepSeaCreatures: DeepSeaCreature[] = [];

  const res = await fetch("https://api.nookipedia.com/nh/sea", {
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

      availability: {
        N: getHemisphereAvailability(creature.north.times_by_month),
        S: getHemisphereAvailability(creature.south.times_by_month),
      },
    });
  });
  return deepSeaCreatures;
}
