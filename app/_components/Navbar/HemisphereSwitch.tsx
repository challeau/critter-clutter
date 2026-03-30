"use client";

import Image from "next/image";

import { useHemisphere } from "@/app/_providers/lib";
import { BlobSelector } from "../BlobSelector/BlobSelector";

export function HemisphereSwitch() {
  const { hemisphere, toggleHemisphere } = useHemisphere();

  return (
    <BlobSelector id="hemisphere-switch">
      <div id="earth-icon" onClick={toggleHemisphere}>
        <Image
          src="/earth.svg"
          width={48}
          height={48}
          alt="hemisphere switch"
        />
      </div>
      <div id="hemisphere">{hemisphere}</div>
    </BlobSelector>
  );
}
