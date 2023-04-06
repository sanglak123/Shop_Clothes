import { UserAuthApi } from "@/data/api/users/auth";
import { useAppDispatch, useAppSelector } from "@/sp/hooks";
import { Sign_Out_Success, UserSelector } from "@/sp/redux/slice/users";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import {
  Button,
  Container,
  Dropdown,
  Form,
  InputGroup,
  Nav,
  NavDropdown,
  Navbar,
} from "react-bootstrap";

const Hearder = () => {
  const User = useAppSelector(UserSelector.User);
  const accessToken = useAppSelector(UserSelector.accessToken);

  const dispatch = useAppDispatch();
  const handleSign_Out = async () => {
    await UserAuthApi.Sign_Out(dispatch, Sign_Out_Success);
  };

  const router = useRouter();
  return (
    <div id="hearder" className="bg_white bsd">
      <div className="header_top bg_black">
        <div className="w-95">
          <div className="header_top_content">
            <div className="top_left">
              <span>Free shipping on domestic orders over $150</span>
            </div>
            <div className="top_right">
              <Link className="nav_link" href={"/auth"}>
                SIGN IN
              </Link>
              <Link className="nav_link" href={"/auth"}>
                CONTACT US
              </Link>
              <Link className="nav_link" href={"/auth"}>
                FAQ
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="header_main">
        <div className="w-95">
          <Navbar
            collapseOnSelect
            expand="xl"
            className="bg_white nav_top"
            variant="light"
          >
            <Navbar.Brand className="me-4" href="/">
              <div className="logo">
                <h1>M01</h1>
              </div>
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="basic-navbar-nav" id="btn_responsive">
              <span className="material-symbols-outlined">subject</span>
            </Navbar.Toggle>

            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto my-2 my-lg-0 nav_left" navbarScroll>
                <Nav.Link className="nav_link" href="#action1">
                  Home
                </Nav.Link>
                <Nav.Link className=" nav_link" href="#action2">
                  Collections
                </Nav.Link>
                <Nav.Link className=" nav_link" href="#action2">
                  For Womens
                </Nav.Link>
                <Nav.Link className=" nav_link" href="#action2">
                  For Mens
                </Nav.Link>
                <Nav.Link className=" nav_link" href="#action2">
                  For Kids
                </Nav.Link>
                <Nav.Link className=" nav_link" href="#action2">
                  Accessories
                </Nav.Link>
              </Nav>

              <Nav className="ms-auto my-2 my-lg-0 nav_right" navbarScroll>
                <Nav.Link onClick={() => alert("he")} className="nav_link">
                  <span className="d-flex">
                    <span className="material-symbols-outlined me-2">
                      search
                    </span>
                    <span>Search</span>
                  </span>
                </Nav.Link>
                <Nav.Link className="nav_link" href="#action2">
                  Wishlist
                </Nav.Link>

                <Nav.Link onClick={() => alert("he")} className="nav_link">
                  <span className="d-flex">
                    <span className="material-symbols-outlined me-2">
                      shopping_bag
                    </span>
                    <span className="m-0 p-0">0/0.00</span>
                  </span>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </div>
    </div>
  );
};

export default Hearder;
