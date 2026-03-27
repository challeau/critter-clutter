import { Suspense } from "react";

import CritterList from "../_components/CritterList/CritterList";
import Loading from "../_components/Loading/Loading";
import { getSeaCreatures } from "./_lib";

export default async function DeepSeaCreaturesList() {
  const seaCreatures = getSeaCreatures();
  return (
    <Suspense fallback={<Loading />}>
      <CritterList data={seaCreatures} />
    </Suspense>
  );
}
