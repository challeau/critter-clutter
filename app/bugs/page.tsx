import { Suspense } from "react";

import { Loading, CritterList } from "../_components";

import { getBugs } from "./_lib";
import { BugsFooter } from "./BugsFooter";

export default async function BugsList() {
  const bugs = await getBugs();

  return (
    <>
      <Suspense fallback={<Loading />}>
        <CritterList critters={bugs} />
      </Suspense>
      <BugsFooter />
    </>
  );
}
