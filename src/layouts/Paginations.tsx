import React from "react";
import { Button } from "react-bootstrap";

const Paginations = () => {
  return (
    <div id="Paginations" className="txt_right">
      <Button className="btn_prev">
        <span className="material-symbols-outlined">trending_flat</span>
      </Button>
      <Button className="btn_number active">1</Button>
      <Button className="btn_number">2</Button>
      <Button className="btn_next">
        <span className="material-symbols-outlined">trending_flat</span>
      </Button>
    </div>
  );
};

export default Paginations;
