import { useRouter } from "next/router";
import React from "react";

const Collection_Item = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div id="Collection_Item">
      <div className="w-95">
        <h1>Collection_Item id: {id}</h1>
      </div>
    </div>
  );
};

export default Collection_Item;
