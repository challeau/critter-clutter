import Link from "next/link";

import "./navbar.css";

import { ColorTheme, useHemisphere, useTheme } from "@/app/_lib";

import { BlobSelector, Icon, IconKinds } from "../atoms";

function HemisphereSwitch() {
  const { hemisphere, toggleHemisphere } = useHemisphere();

  return (
    <BlobSelector id="hemisphere-switch">
      <Icon id="earth-icon" kind={IconKinds.Earth} onClick={toggleHemisphere} />
      <div id="hemisphere">{hemisphere}</div>
    </BlobSelector>
  );
}

export function Navbar() {
  const { theme } = useTheme();

  const pages = [
    <Link key="home" href="/">
      <Icon kind={IconKinds.Logo} />
    </Link>,
    <Link key="bugs" href="/bugs">
      <Icon
        id="butterfly-icon"
        kind={IconKinds.Butterfly}
        isSelected={theme === ColorTheme.Bugs}
      />
    </Link>,
    <Link key="fishes" href="fishes">
      <Icon
        id="fish-icon"
        kind={IconKinds.Fish}
        isSelected={theme === ColorTheme.Fishes}
      />
    </Link>,
    <Link key="deep-sea-creatures" href="/deep-sea-creatures">
      <Icon
        id="octopus-icon"
        kind={IconKinds.Octopus}
        isSelected={theme === ColorTheme.DeepSeaCreatures}
      />
    </Link>,
  ];

  return (
    <div id="navbar" className={theme}>
      <BlobSelector id="page-selector">{pages}</BlobSelector>
      <HemisphereSwitch />
    </div>
  );
}
