import { HemisphereAvailability } from "./availability";
import { Rarity, ShadowSize, Speed } from "./utils";

export type Critter = {
  // General info
  name: string;
  index: number;
  rarity: Rarity;
  nook_price: number;

  // Availability by hemisphere
  availability: HemisphereAvailability;

  // Images
  image_url: string;
  render_url: string;
};

export type Bug = Critter & {
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
  speed: Speed;
};
