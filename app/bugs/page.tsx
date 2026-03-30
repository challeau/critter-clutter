import { Suspense } from "react";

import { Loading, CritterList } from "../_components";
import { getBugs } from "./_lib";

export default async function BugsList() {
  const bugs = getBugs();

  return (
    <Suspense fallback={<Loading />}>
      <CritterList data={bugs} />
    </Suspense>
  );
}
