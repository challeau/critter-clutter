import { ColorTheme } from "./types";

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
