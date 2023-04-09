import Link from "next/link";
import React from "react";
import { Col, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <div id="footer" className="bg_black">
      <div className="w-95">
        <div className="footer_main p-4">
          <Row>
            <Col xs={12} sm={12} md={6} xl={3}>
              <div className="footer_item">
                <div className="logo">
                  <h1>M01</h1>
                  <p>FASHION</p>
                  <p className="sologan">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Veritatis vero doloribus quisquam delectus praesentium quis
                    libero at aperiam voluptate dignissimos.
                  </p>
                  <div className="logo_pay">
                    <i
                      className="fab fa-cc-jcb me-2 ms-2"
                      style={{ fontSize: "2rem" }}
                    ></i>
                    <i
                      className="fab fa-cc-paypal me-2 ms-2"
                      style={{ fontSize: "2rem" }}
                    ></i>
                    <i
                      className="fab fa-cc-mastercard me-2 ms-2"
                      style={{ fontSize: "2rem" }}
                    ></i>
                    <i
                      className="fab fa-cc-visa me-2 ms-2"
                      style={{ fontSize: "2rem" }}
                    ></i>
                  </div>
                </div>
              </div>
            </Col>

            <Col xs={12} sm={12} md={6} xl={3}>
              <div className="footer_item">
                <h4>LOCATE US</h4>
                <div className="footer_link">
                  <div className="link_item">
                    <Link href={"/"}>
                      <span className="material-symbols-outlined">
                        distance
                      </span>
                      <span>487 Eighth Avenue West Street, New York</span>
                    </Link>
                  </div>

                  <div className="link_item">
                    <Link href={"/"}>
                      <span className="material-symbols-outlined">phone</span>
                      <span>+84 123456789</span>
                    </Link>
                  </div>

                  <div className="link_item">
                    <Link href={"/"}>
                      <span className="material-symbols-outlined">email</span>
                      <span>admin@gmail.com</span>
                    </Link>
                  </div>
                </div>
              </div>
            </Col>

            <Col xs={12} sm={12} md={6} xl={3}>
              <div className="footer_item">
                <h4>QUICK LINKS</h4>
                <div className="footer_link">
                  <div className="link_item">
                    <Link href={"/collections"}>
                      <span>Collections</span>
                    </Link>
                  </div>

                  <div className="link_item">
                    <Link href={"/for-woment"}>
                      <span>For Women</span>
                    </Link>
                  </div>

                  <div className="link_item">
                    <Link href={"/for-men"}>
                      <span>For Men</span>
                    </Link>
                  </div>

                  <div className="link_item">
                    <Link href={"/for-men"}>
                      <span>For Kid</span>
                    </Link>
                  </div>

                  <div className="link_item">
                    <Link href={"/for-men"}>
                      <span>Accessories</span>
                    </Link>
                  </div>
                </div>
              </div>
            </Col>

            <Col xs={12} sm={12} md={6} xl={3}>
              <div className="footer_item">
                <h4>FEEDBACK</h4>
                <div className="footer_link">
                  <div className="link_item">
                    <Link href={"/"}>
                      <span className="material-symbols-outlined">
                        distance
                      </span>
                      <span>487 Eighth Avenue West Street, New York</span>
                    </Link>
                  </div>

                  <div className="link_item">
                    <Link href={"/"}>
                      <span className="material-symbols-outlined">phone</span>
                      <span>+84 123456789</span>
                    </Link>
                  </div>

                  <div className="link_item">
                    <Link href={"/"}>
                      <span className="material-symbols-outlined">email</span>
                      <span>admin@gmail.com</span>
                    </Link>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <div className="footer_bottom">
          <span className="txt_center">
            © 2018 Qode Interactive, All Rights Reserved
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
