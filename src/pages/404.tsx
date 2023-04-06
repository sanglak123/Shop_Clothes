import { useRouter } from "next/router";
import React from "react";
import { Button } from "react-bootstrap";

const Page_Not_Found = () => {
  const router = useRouter();
  return (
    <div id="page_not_found">
      <div className="w-95">
        <div className="page_not_found_content bg_white bsd mt-5 mb-5 w-60">
          <div className="page_not_found_item">
            <h1>Page not found.</h1>
            <Button className="btn_over" onClick={() => router.push("/")}>
              Back to home.
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page_Not_Found;
