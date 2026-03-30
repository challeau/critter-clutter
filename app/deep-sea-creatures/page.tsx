import { Suspense } from "react";

import { Loading, CritterList } from "../_components";
import { getSeaCreatures } from "./_lib";

export default function DeepSeaCreaturesList() {
  const seaCreatures = getSeaCreatures();

  return (
    <Suspense fallback={<Loading />}>
      <CritterList data={seaCreatures} />
    </Suspense>
  );
}
