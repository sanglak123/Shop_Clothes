import { useRouter } from "next/router";
import React from "react";

const SingleCate = () => {
  const router = useRouter();
  const { cate } = router.query;
  return (
    <div id="single_cate">
      <div className="w-95">
        <h1>SingleCate {cate}</h1>
      </div>
    </div>
  );
};

export default SingleCate;
