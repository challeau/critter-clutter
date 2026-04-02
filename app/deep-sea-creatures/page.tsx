import { Suspense } from "react";

import { Loading, CritterList } from "../_components";
import { getSeaCreatures } from "./_lib";
import { SeaCreaturesFooter } from "./SeaCreaturesFooter";

export default async function DeepSeaCreaturesList() {
  const seaCreatures = await getSeaCreatures();

  return (
    <>
      <Suspense fallback={<Loading />}>
        <CritterList critters={seaCreatures} />
      </Suspense>
      <SeaCreaturesFooter />
    </>
  );
}
