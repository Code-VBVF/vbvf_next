import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import Link from "next/link";
import styles from "../css/global-nav.module.scss";
import VBVFLogo from "../public/images/logos/vbvf_logo.png";
import { getMobileOperatingSystem } from "../util/index";
import Button from "../components/button";
import Image from "next/image";

export default function GlobalNav(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [modal, setModal] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const modalToggle = () => setModal(!modal);
  const dualToggle = () => {
    if (isOpen) {
      setIsOpen(!isOpen);
    }
    setModal(!modal);
  };

  return (
    <div>
      <Navbar className={styles.menuBar} color="light" light expand="xl">
        <NavbarBrand href="/">
          <Image
            alt="VBVF Logo"
            src={VBVFLogo}
            layout="intrinsic"
            width={209}
            height={44.16}
          />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="#" onClick={modalToggle}>
                Service Times & Directions
              </NavLink>
              <Modal isOpen={modal} toggle={modalToggle}>
                <ModalHeader toggle={modalToggle}>
                  Service Times & Directions
                </ModalHeader>
                <ModalBody>
                  <div className={styles.serviceTimeModal}>
                    <div>
                      <h2>Weekend Services</h2>

                      <p>Sunday 9:00am & 11:00am</p>
                    </div>
                    <div>
                      <h2>Mid-Week Bible Studies</h2>
                      <p>
                        Adult Study <br />
                        Wednesday - 7:00pm
                      </p>
                      <p>
                        Women's Study <br></br> Tuesday - 10:00am
                      </p>
                    </div>
                    <div>
                      <h2>Location</h2>
                      <p>551 E Nakoma St. San Antonio, TX 78216</p>
                      <Button
                        size="medium"
                        title="Open in Maps"
                        color="green"
                        buttonFunc={() => {
                          getMobileOperatingSystem() === "iOS"
                            ? window.open(
                                "http://maps.apple.com/?q=Verse+By+Verse+Fellowship"
                              )
                            : window.open(
                                "https://www.google.com/maps/dir/?api=1&destination=Verse+by+verse+fellowship"
                              );
                        }}
                      />

                      <p className="contact-page-link">
                        Looking for our <strong>mailing address?</strong> Check
                        out our{" "}
                        <Link href="/contact">
                          <a onClick={dualToggle}>Contact Page</a>
                        </Link>
                      </p>
                    </div>
                  </div>
                </ModalBody>
                <ModalFooter>
                  <Button
                    size="medium"
                    color="green"
                    buttonFunc={modalToggle}
                    title="Close"
                  />
                </ModalFooter>
              </Modal>
            </NavItem>
            <NavItem>
              <NavLink href="/about/faq">About</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Ministries
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <NavLink
                    className={styles.subMenu}
                    href="/childrens-ministry"
                  >
                    Children's Ministry
                  </NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavItem>
                    <NavLink className={styles.subMenu} href="/youth-ministry">
                      Youth Ministry
                    </NavLink>
                  </NavItem>
                </DropdownItem>
                <DropdownItem>
                  <NavLink className={styles.subMenu} href="/small-groups">
                    Small Groups
                  </NavLink>
                </DropdownItem>
                {/* <DropdownItem>
                  <NavLink className={styles.subMenu} href="/serve">
                    Serving at VBVF
                  </NavLink>
                </DropdownItem> */}
                <DropdownItem>
                  <NavLink className={styles.subMenu} href="/care-ministry">
                    Care Ministry
                  </NavLink>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <NavLink href="/registration-redirect">Events</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/bible-studies">Bible Teaching</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/giving">Give</NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="/contact">Contact</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}
