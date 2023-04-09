import { UserAuthApi } from "@/data/api/users/auth";
import { useAppDispatch, useAppSelector } from "@/sp/hooks";
import { Sign_Out_Success, UserSelector } from "@/sp/redux/slice/users";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Button, Nav, Navbar } from "react-bootstrap";

const Hearder = () => {
  const User = useAppSelector(UserSelector.User);
  const accessToken = useAppSelector(UserSelector.accessToken);
  const router = useRouter();

  const dispatch = useAppDispatch();
  const handleSign_Out = async () => {
    await UserAuthApi.Sign_Out(dispatch, Sign_Out_Success);
  };

  //Back to top
  const [show, setShow] = useState(false);

  useEffect(() => {
    const headerTop = window.document.getElementById("headerTop");
    const headerMain = window.document.getElementById("headerMain");
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        headerTop?.classList.add("hide");
        headerMain?.classList.add("header_fix");
        setShow(true);
      } else {
        headerTop?.classList.remove("hide");
        headerMain?.classList.remove("header_fix");
        setShow(false);
      }
    });
  }, []);
  const handleBackTo = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <div id="hearder" className="bg_white bsd">
        <div id="headerTop" className="header_top bg_black">
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

        <div id="headerMain" className="header_main">
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

              <Navbar.Toggle
                aria-controls="basic-navbar-nav"
                id="btn_responsive"
              >
                <span className="material-symbols-outlined">subject</span>
              </Navbar.Toggle>

              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto my-2 my-lg-0 nav_left" navbarScroll>
                  <Nav.Link
                    className={
                      router.asPath === "/" ? "nav_link active" : "nav_link"
                    }
                    href="/"
                  >
                    Home
                  </Nav.Link>
                  <Nav.Link
                    className={
                      router.asPath === "/collections"
                        ? "nav_link active"
                        : "nav_link"
                    }
                    href="/collections"
                  >
                    Collections
                  </Nav.Link>
                  <Nav.Link
                    className={
                      router.asPath === "/for-womens"
                        ? "nav_link active"
                        : "nav_link"
                    }
                    href="/for-womens"
                  >
                    Womens
                  </Nav.Link>
                  <Nav.Link
                    className={
                      router.asPath === "/for-mens"
                        ? "nav_link active"
                        : "nav_link"
                    }
                    href="/for-mens"
                  >
                    Mens
                  </Nav.Link>
                  <Nav.Link
                    className={
                      router.asPath === "/for-kids"
                        ? "nav_link active"
                        : "nav_link"
                    }
                    href="/for-kids"
                  >
                    Kids
                  </Nav.Link>
                  <Nav.Link
                    className={
                      router.asPath === "/accessories"
                        ? "nav_link active"
                        : "nav_link"
                    }
                    href="/accessories"
                  >
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
                  <Nav.Link className="nav_link" href="/wishlist">
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
      {show && (
        <Button id="btn_backTop" onClick={handleBackTo}>
          Back to top
        </Button>
      )}
    </>
  );
};

export default Hearder;
