import { HemisphereAvailability, TimeAvailability } from "./availability";
import { Rarity, ShadowSize, Speed } from "./utils";

export enum CritterKinds {
  Bug,
  Fish,
  DeepSeaCreature,
}

export type Critter = {
  // General info
  name: string;
  index: number;
  rarity: Rarity;
  nook_price: number;

  months_availability: HemisphereAvailability;
  time_availability: TimeAvailability;

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
