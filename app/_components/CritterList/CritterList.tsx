"use client";

import Image from "next/image";
import { use, useState } from "react";

import "./critterList.css";

import { useDateTime, useHemisphere, useTheme } from "@/app/_providers/lib";

import { Critter, Month } from "../../_types";
import { checkHourAvailibility } from "@/app/_utils";
import { PageSelect } from "../PageSelect/PageSelect";

const PAGE_SIZE = 40;

type CritterListProps = {
  critters: Critter[];
};

export function CritterList(props: CritterListProps) {
  const { critters } = props;
  const { theme } = useTheme();

  const { hemisphere } = useHemisphere();
  const { month, hours } = useDateTime();

  const [selected, setSelected] = useState(""); // TODO: reset selected when info modal closed

  const critterList = critters.map((critter, index) => {
    const monthAvailability = critter.availability[hemisphere][month as Month];
    let className = "critter";

    // check if critter is in season
    if (monthAvailability !== null) {
      className = className.concat(" ", "in-season");
    }

    // check if critter is available
    if (checkHourAvailibility(monthAvailability, hours)) {
      className = className.concat(" ", "available");
    }

    // check if critter is selected
    if (critter.name === selected) {
      className = className.concat(" ", "selected");
    }

    return (
      <li
        key={index}
        className={className}
        onClick={() => {
          setSelected(critter.name);
        }}
      >
        <div className="tooltip">
          <span className="tooltip-text">{critter.name}</span>
          <Image
            src={critter.image_url}
            width={100}
            height={100}
            alt={critter.name}
            loading="eager"
          />
        </div>
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
      <ul id="critter-list" className={theme}>
        {currentCritters}
      </ul>
      {totalPages > 1 && (
        <PageSelect page={page} totalPages={totalPages} setPage={setPage} />
      )}
    </div>
  );
}
