import Image from "next/image";
import { use } from "react";

import "./critterList.css";
import { Critter } from "../../_types";

export default function CritterList({ data }: { data: Promise<Critter[]> }) {
  const critters = use(data);

  // TODO: make pages ! 4 * 9 members max
  return (
    <ul id="critter-list">
      {critters.map((critter, index) => (
        <li key={index} className="critter">
          <Image src={critter.image_url} width={130} height={130} alt="" />
        </li>
      ))}
    </ul>
  );
}
