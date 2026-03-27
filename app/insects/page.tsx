import { Suspense } from "react";

import CritterList from "../_components/CritterList/CritterList";
import Loading from "../_components/Loading/Loading";
import { getInsects } from "./_lib";

export default async function InsectsList() {
  const insects = getInsects();

  return (
    <Suspense fallback={<Loading />}>
      <CritterList data={insects} />
    </Suspense>
  );
}
