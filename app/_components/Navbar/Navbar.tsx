import Image from "next/image";
import Link from "next/link";

import "./navbar.css";
import { ColorScheme } from "../../_types";
import { BlobSelector } from "../BlobSelector/BlobSelector";
import { ButterflyIcon, FishIcon, OctopusIcon } from "./Icons/Icons";
import { HemisphereSwitch } from "./HemisphereSwitch";

type NavbarProps = {
  scheme: ColorScheme;
};

export function Navbar({ scheme }: NavbarProps) {
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
      <ButterflyIcon isSelected={scheme === ColorScheme.Bugs} />
    </Link>,
    <Link key="fishes" href="fishes">
      <FishIcon isSelected={scheme === ColorScheme.Fishes} />
    </Link>,
    <Link key="deep-sea-creatures" href="/deep-sea-creatures">
      <OctopusIcon isSelected={scheme === ColorScheme.DeepSeaCreatures} />
    </Link>,
  ];

  return (
    <div id="navbar" className={scheme}>
      <BlobSelector id="page-selector">{pages}</BlobSelector>
      <HemisphereSwitch />
    </div>
  );
}
