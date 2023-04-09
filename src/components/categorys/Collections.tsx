import { Data_Example } from "@/data/DataExample";
import Paginations from "@/layouts/Paginations";
import Link from "next/link";
import React from "react";
import { Col, Row } from "react-bootstrap";

const Collections = () => {
  return (
    <section id="collections">
      <div className="collections_content">
        <Row>
          {Data_Example.Collections?.map((item, index) => {
            return (
              <Col key={index} xs={12} sm={12} md={4}>
                <Link
                  href={`/collections/${item.id}`}
                  className="collections_item"
                >
                  <div className="overlay"></div>
                  <img src={item.url} alt={item.name} />
                  <div className="item_title">
                    <h1>{item.name}</h1>
                  </div>
                </Link>
              </Col>
            );
          })}
          <Paginations />
        </Row>
      </div>
    </section>
  );
};

export default Collections;
