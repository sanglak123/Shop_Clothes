import Accessories from "@/components/categorys/Accessories";
import Collections from "@/components/categorys/Collections";
import SingleCate from "@/components/categorys/SingleCate";
import Last_Products from "@/layouts/Last_Products";
import { useRouter } from "next/router";
import React from "react";

const Categorys = () => {
  const router = useRouter();
  const { cate } = router.query;
  const handle_Render_Category = () => {
    switch (cate) {
      case "collections":
        return <Collections />;
      case "for-womens":
        return <SingleCate />;
      case "for-mens":
        return <SingleCate />;
      case "for-kids":
        return <SingleCate />;
      case "accessories":
        return <Accessories />;

      default:
        return <Collections />;
    }
  };
  return (
    <section id="categorys">
      <div className="categorys_content w-95">
        <div className="cate_left">
          <div className="cate_search bsd">
            <input placeholder="Enter key word." />
          </div>
          <Last_Products />
        </div>
        <div className="cate_right">{handle_Render_Category()}</div>
      </div>
    </section>
  );
};

export default Categorys;
