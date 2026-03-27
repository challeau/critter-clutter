import Image from "next/image";
import Link from "next/link";

import "./navbar.css";
import { ColorScheme } from "../../_types";
import BlobSelector from "../BlobSelector/BlobSelector";
import { ButterflyIcon, FishIcon, OctopusIcon } from "./Icons/Icons";
import HemisphereSwitch from "./HemisphereSwitch";

type NavbarProps = {
  scheme: ColorScheme;
};

export default function Navbar({ scheme }: NavbarProps) {
  const pages = [
    <Link key="home" href="/">
      <Image src="/head.svg" width={47} height={56} alt="home page" />
    </Link>,
    <Link key="insects" href="/insects">
      <ButterflyIcon isSelected={scheme === ColorScheme.Insects} />
    </Link>,
    <Link key="fish" href="fish">
      <FishIcon isSelected={scheme === ColorScheme.Fish} />
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
