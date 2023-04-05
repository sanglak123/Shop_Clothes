import { UserAuthApi } from "@/data/api/users/auth";
import { useAppDispatch, useAppSelector } from "@/sp/hooks";
import { Sign_Out_Success, UserSelector } from "@/sp/redux/slice/users";
import { useRouter } from "next/router";
import React from "react";
import { Button, Container, Dropdown, Nav, Navbar } from "react-bootstrap";

const Hearder = () => {
  const User = useAppSelector(UserSelector.User);
  const accessToken = useAppSelector(UserSelector.accessToken);

  const dispatch = useAppDispatch();
  const handleSign_Out = async () => {
    await UserAuthApi.Sign_Out(dispatch, Sign_Out_Success);
  };

  const router = useRouter();
  return (
    <div id="hearder">
      <Navbar
        collapseOnSelect
        expand="xl"
        className="bg_blue_300"
        variant="dark"
      >
        <Container>
          <Navbar.Brand href="/">
            <div className="logo">
              <h1>DOITHE/247</h1>
              <span>www.doithe247.com.vn</span>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link
                className={router.asPath === "/" ? "li_active" : "hearder_link"}
                href="/"
              >
                Home
              </Nav.Link>

              <Nav.Link
                className={
                  router.asPath === "/doi-the" ? "li_active" : "hearder_link"
                }
                href="/doi-the"
              >
                Đổi thẻ
              </Nav.Link>
              <Nav.Link
                className={
                  router.asPath === "/mua-the" ? "li_active" : "hearder_link"
                }
                href="/mua-the"
              >
                Mua thẻ
              </Nav.Link>

              <Nav.Link
                className={
                  router.asPath === "/nap-tien" ? "li_active" : "hearder_link"
                }
                href="/nap-tien"
              >
                Nạp Tiền
              </Nav.Link>

              <Nav.Link
                className={
                  router.asPath === "/rut-tien" ? "li_active" : "hearder_link"
                }
                href="/rut-tien"
              >
                Rút Tiền
              </Nav.Link>

              <Nav.Link
                className={
                  router.asPath === "/connect-api"
                    ? "li_active"
                    : "hearder_link"
                }
                href="/connect-api"
              >
                Api
              </Nav.Link>
              <Nav.Link
                className={
                  router.asPath === "/lien-he" ? "li_active" : "hearder_link"
                }
                href="/lien-he"
              >
                Liên hệ
              </Nav.Link>
            </Nav>
            <Nav>
              {accessToken && User ? (
                <>
                  <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                      {User?.username?.toLocaleUpperCase()} {User?.surplus}
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item
                        href={`/${User?.username}/thong-tin-tai-khoan`}
                      >
                        Thông tin tài khoản
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-2">Quỷ số dư</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">
                        Something else
                      </Dropdown.Item>
                      <Button onClick={handleSign_Out}>Đăng xuất</Button>
                    </Dropdown.Menu>
                  </Dropdown>
                </>
              ) : (
                <>
                  <Nav.Link
                    className="ms-5 btn_success d-flex align-items-center"
                    href="/auth/sign-in"
                  >
                    <span className="material-symbols-outlined me-2">
                      person
                    </span>
                    <span className="me-2"> Sign In</span>
                  </Nav.Link>
                  <Nav.Link
                    className="btn_success_active d-flex align-items-center"
                    href="/auth/sign-up"
                  >
                    <span className="material-symbols-outlined me-2">lock</span>
                    <span className="me-2">Sign Up</span>
                  </Nav.Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Hearder;
