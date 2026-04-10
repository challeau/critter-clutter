"use client";

import Image from "next/image";
import { Dispatch, SetStateAction, useState } from "react";

import "./critterList.css";

import {
  Critter,
  useTheme,
  useHemisphere,
  useDateTime,
  Month,
  checkHourAvailibility,
} from "@/app/_lib";

import { PageSelect, Tooltip } from "../atoms";
import { CritterViewModal } from "../CritterViewModal/CritterViewModal";

const PAGE_SIZE = 40;

type CritterListProps = {
  critters: Critter[];
};

export function CritterList(props: CritterListProps) {
  const { critters } = props;
  const { theme } = useTheme();

  const { hemisphere } = useHemisphere();
  const { month, hours } = useDateTime();

  const [selectedCritter, setSelectedCritter] = useState<Critter>();

  const [isCritterViewOpen, setIsCritterViewOpen] = useState(false);
  const closeCritterView: Dispatch<SetStateAction<boolean>> = () => {
    setIsCritterViewOpen(false);
    setSelectedCritter(undefined);
  };

  const [isCaught, setIsCaught] = useState(true);

  const critterList = critters.map((critter, index) => {
    const monthAvailability =
      critter.months_availability[hemisphere][month as Month];

    let className = "critter";

    // check if critter is in season
    if (monthAvailability) {
      className = className.concat(" ", "in-season");

      // check if critter is available right now
      if (checkHourAvailibility(critter.time_availability, hours)) {
        className = className.concat(" ", "available");
      }
    }

    // check if critter is selected
    if (critter.name === selectedCritter?.name) {
      className = className.concat(" ", "selected");
    }

    return (
      <li
        key={index}
        className={className}
        onClick={() => {
          setSelectedCritter(critter);
          setIsCritterViewOpen(true);
        }}
      >
        <Tooltip
          element={
            <Image
              src={critter.image_url}
              width={100}
              height={100}
              alt={critter.name}
              loading="eager"
            />
          }
          tooltipText={critter.name}
          theme={theme}
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
    <>
      <div id="critter-list-container">
        <ul id="critter-list" className={theme}>
          {currentCritters}
        </ul>
        {totalPages > 1 && (
          <PageSelect page={page} totalPages={totalPages} setPage={setPage} />
        )}
      </div>
      <CritterViewModal
        critter={selectedCritter}
        isCaught={isCaught}
        setIsCaught={setIsCaught}
        isOpen={isCritterViewOpen}
        setIsOpen={closeCritterView}
        hemisphere={hemisphere}
        theme={theme}
      />
    </>
  );
}
