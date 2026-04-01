import Image from "next/image";
import Link from "next/link";

import "./navbar.css";

import { useTheme } from "@/app/_providers/lib";

import { ColorTheme } from "../../_types";
import { BlobSelector } from "../BlobSelector/BlobSelector";
import { ButterflyIcon, FishIcon, OctopusIcon } from "./Icons/Icons";
import { HemisphereSwitch } from "./HemisphereSwitch";

export function Navbar() {
  const { theme } = useTheme();

  const pages = [
    <Link key="home" href="/">
      <Image
        src="/head.svg"
        width={47}
        height={56}
        alt="home page"
        loading="eager"
      />
    </Link>,
    <Link key="bugs" href="/bugs">
      <ButterflyIcon isSelected={theme === ColorTheme.Bugs} />
    </Link>,
    <Link key="fishes" href="fishes">
      <FishIcon isSelected={theme === ColorTheme.Fishes} />
    </Link>,
    <Link key="deep-sea-creatures" href="/deep-sea-creatures">
      <OctopusIcon isSelected={theme === ColorTheme.DeepSeaCreatures} />
    </Link>,
  ];

  return (
    <div id="navbar" className={theme}>
      <BlobSelector id="page-selector">{pages}</BlobSelector>
      <HemisphereSwitch />
    </div>
  );
}
