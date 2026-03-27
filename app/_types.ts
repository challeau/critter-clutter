export enum ColorScheme {
  Insects = "green",
  Fish = "light-blue",
  DeepSeaCreatures = "dark-blue",
}

type HemisphereAvailability = {
  months: number[];
  times: {
    "1": string;
    "2": string;
    "3": string;
    "4": string;
    "5": string;
    "6": string;
    "7": string;
    "8": string;
    "9": string;
    "10": string;
    "11": string;
    "12": string;
  };
};

type ShadowSize =
  | "Tiny"
  | "Small"
  | "Medium"
  | "Large"
  | "Very Large"
  | "Very large (finned)"
  | "Huge"
  | "Long & Thin";

type ShadowSpeed =
  | "Stationary"
  | "Very slow"
  | "Slow"
  | "Medium"
  | "Fast"
  | "Very fast";

type Rarity = "Common" | "Uncommon" | "Rare" | "Ultra-rare";

/**
 * Information common to all critters
 */
export type Critter = {
  // General info
  name: string;
  number: number;
  rarity: Rarity;
  nook_price: number;

  // Availability by hemisphere
  north: HemisphereAvailability;
  south: HemisphereAvailability;

  // Images
  image_url: string;
  render_url: string;
};

export type Insect = Critter & {
  weather: string;
  location: string;
  flick_price: number;
};

export type Fish = Critter & {
  shadow_size: ShadowSize;
  location: string;
  cj_price: number;
};

export type DeepSeaCreature = Critter & {
  shadow_size: ShadowSize;
  shadow_speed: ShadowSpeed;
};
