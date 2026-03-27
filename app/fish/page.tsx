import { Suspense } from "react";

import CritterList from "../_components/CritterList/CritterList";
import Loading from "../_components/Loading/Loading";
import { getFish } from "./_lib";

export default async function FishList() {
  const fish = getFish();

  return (
    <Suspense fallback={<Loading />}>
      <CritterList data={fish} />
    </Suspense>
  );
}
