import { Suspense } from "react";

import { Loading, CritterList, CrittersFooter } from "../_components";

import { CritterKinds, getCritters } from "../_lib";

export default async function BugsList() {
  const bugs = await getCritters(CritterKinds.Bug, "bugs");

  return (
    <>
      <Suspense fallback={<Loading />}>
        <CritterList critters={bugs} />
      </Suspense>
      <CrittersFooter />
    </>
  );
}
