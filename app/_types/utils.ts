// For prototyping components that accept children nodes
export type ChildrenProps = {
  children: React.ReactNode;
};

// Defines the color theme of a page (defaults to green)
export enum ColorTheme {
  Bugs = "green",
  Fishes = "light-blue",
  DeepSeaCreatures = "dark-blue",
}

// Month numerical representation
export type Month = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

// North/South hemisphere
export type HemisphereType = "N" | "S";

// Critter shadow size options
export type ShadowSize =
  | "Tiny"
  | "Small"
  | "Medium"
  | "Large"
  | "Very Large"
  | "Very large (finned)"
  | "Huge"
  | "Long & Thin";

// Critter speed options
export type Speed =
  | "Stationary"
  | "Very slow"
  | "Slow"
  | "Medium"
  | "Fast"
  | "Very fast";

// Critter rarity options
export type Rarity = "Common" | "Uncommon" | "Rare" | "Ultra-rare";
