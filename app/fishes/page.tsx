import { Suspense } from "react";

import { CritterList, CrittersFooter, Loading } from "../_components";
import { CritterKinds, getCritters } from "../_lib";

export default async function FishesList() {
  const fishes = await getCritters(CritterKinds.Fish, "fish");

  return (
    <>
      <Suspense fallback={<Loading />}>
        <CritterList critters={fishes} />
        <CrittersFooter />
      </Suspense>
    </>
  );
}
