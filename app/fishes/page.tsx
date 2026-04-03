import { Suspense } from "react";

import { Loading, CritterList } from "../_components";

import { getFishes } from "./_lib";
import { FishesFooter } from "./FishesFooter";

export default async function FishesList() {
  const fishes = await getFishes();

  return (
    <>
      <Suspense fallback={<Loading />}>
        <CritterList critters={fishes} />
        <FishesFooter fishes={fishes} />
      </Suspense>
    </>
  );
}
