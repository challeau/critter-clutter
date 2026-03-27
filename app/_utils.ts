import { ColorScheme } from "./_types";

export function getColorSchemeFromPathname(pathname: string) {
  switch (pathname) {
    case "/insects":
      return ColorScheme.Insects;
    case "/fish":
      return ColorScheme.Fish;
    case "/deep-sea-creatures":
      return ColorScheme.DeepSeaCreatures;
    default:
      return ColorScheme.Insects;
  }
}
