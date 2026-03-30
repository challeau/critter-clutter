import { Suspense } from "react";

import { getFishes } from "./_lib";
import { Loading, CritterList } from "../_components";

export default function FishesList() {
  const fishes = getFishes();

  return (
    <Suspense fallback={<Loading />}>
      <CritterList data={fishes} />
    </Suspense>
  );
}
