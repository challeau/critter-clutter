"use client";

import Image from "next/image";
import { use } from "react";

import "./critterList.css";
import { Critter, Month } from "../../_types";
import { checkHourAvailibility } from "@/app/_utils";
import { useDateTime, useHemisphere } from "@/app/_providers/lib";

type CritterListProps = {
  data: Promise<Critter[]>;
  rightNow?: Date;
};

export function CritterList(props: CritterListProps) {
  const { data } = props;
  const critters = use(data);

  const { hemisphere } = useHemisphere();
  const { month, hours } = useDateTime();

  const crittersList = critters.map((critter, index) => {
    const monthAvailability = critter.availability[hemisphere][month as Month];
    const isInSeason = monthAvailability !== null;
    const isAvailable = checkHourAvailibility(monthAvailability, hours);

    const className = `critter ${isInSeason ? "in-season" : ""} ${isAvailable ? "available" : ""}`;
    return (
      <li key={index} className={className}>
        <Image
          src={critter.image_url}
          width={130}
          height={130}
          alt={critter.name}
          loading="eager"
        />
      </li>
    );
  });

  // TODO: make pages ! 4 * 9 members max
  return <ul id="critter-list">{crittersList}</ul>;
}
