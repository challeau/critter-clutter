import { Suspense } from "react";

import { Loading, CritterList, CrittersFooter } from "../_components";
import { CritterKinds, getCritters } from "../_lib";

export default async function DeepSeaCreaturesList() {
  const seaCreatures = await getCritters(CritterKinds.DeepSeaCreature, "sea");

  return (
    <>
      <Suspense fallback={<Loading />}>
        <CritterList critters={seaCreatures} />
      </Suspense>
      <CrittersFooter />
    </>
  );
}
