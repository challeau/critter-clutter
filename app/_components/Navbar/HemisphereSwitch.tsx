"use client";

import { useState } from "react";
import Image from "next/image";

import BlobSelector from "../BlobSelector/BlobSelector";

export default function HemisphereSwitch() {
  const [hemisphere, setHemisphere] = useState(
    localStorage.getItem("hemisphere") ?? "N",
  );

  const toggleHemisphere = () => {
    const selection = hemisphere == "N" ? "S" : "N";
    setHemisphere(selection);
    localStorage.setItem("hemisphere", selection);
  };

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
