"use client";

import Image from "next/image";
import { use, useState } from "react";

import "./critterList.css";
import { Critter, Month } from "../../_types";
import { checkHourAvailibility } from "@/app/_utils";
import { useDateTime, useHemisphere } from "@/app/_providers/lib";
import { PageSelect } from "../PageSelect/PageSelect";

const PAGE_SIZE = 40;

type CritterListProps = {
  data: Promise<Critter[]>;
};

export function CritterList(props: CritterListProps) {
  const { data } = props;

  const { hemisphere } = useHemisphere();
  const { month, hours } = useDateTime();

  const critters = use(data);
  const critterList = critters.map((critter, index) => {
    const monthAvailability = critter.availability[hemisphere][month as Month];
    const isInSeason = monthAvailability !== null;
    const isAvailable = checkHourAvailibility(monthAvailability, hours);

    const className = `critter ${isInSeason ? "in-season" : ""} ${isAvailable ? "available" : ""}`;
    return (
      <li key={index} className={className}>
        <Image
          src={critter.image_url}
          width={100}
          height={100}
          alt={critter.name}
          loading="eager"
        />
      </li>
    );
  });

  const [page, setPage] = useState(1);
  const totalPages = critterList.length / PAGE_SIZE;
  const start = (page - 1) * PAGE_SIZE;
  const end = start + PAGE_SIZE;
  const currentCritters = critterList.slice(start, end);

  return (
    <div id="critter-list-container">
      <ul id="critter-list">{currentCritters}</ul>
      {totalPages > 1 && (
        <PageSelect page={page} totalPages={totalPages} setPage={setPage} />
      )}
    </div>
  );
}
