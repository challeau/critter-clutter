import { Critter } from "../_types";

/**
 * Query the Nookipedia API and return a formatted list of all insects
 */
export async function getInsects(): Promise<Critter[]> {
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

  return Object.values(data);
}
