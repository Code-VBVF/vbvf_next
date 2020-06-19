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
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import { Link } from "react-router-dom";
import "../css/global-nav.scss";
import VBVFLogo from "../images/logos/vbvf_logo.png";
import { mapsSelector } from "../util/index";

const GlobalNav = (props) => {
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
      <Navbar className="menu-bar bg-transparent" color="" expand="md">
        <NavbarBrand href="/">
          <img id="menu-bar-icon" src={VBVFLogo} alt="VBVF Logo" />
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
                  <div className="service-time-modal">
                    <div>
                      <h2>Weekend Services</h2>
                      <p>Saturday - 5:30pm</p>
                      <p>Sunday - 10:30am</p>
                    </div>
                    <div>
                      <h2>Mid-Week Studies</h2>
                      <p>Tuesday - 7:00pm</p>
                      <p>Women's Bible Study Tuesday - 10:00am</p>
                    </div>
                    <div>
                      <h2>Location</h2>
                      <p>531 E Nakoma St. San Antonio, TX 78216</p>
                      <Button outline color="dark" onClick={mapsSelector}>
                        Open in Maps
                      </Button>
                      <p className="contact-page-link">
                        Looking for our <strong>mailing address?</strong> Check
                        out our{" "}
                        <Link onClick={dualToggle} to="/contact">
                          Contact Page
                        </Link>
                      </p>
                    </div>
                  </div>
                </ModalBody>
                <ModalFooter>
                  <Button outline color="dark" onClick={modalToggle}>
                    Close
                  </Button>{" "}
                </ModalFooter>
              </Modal>
            </NavItem>
            <NavItem>
              <NavLink href="/about">About</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Ministries
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <NavLink
                    className="sub-menu"
                    href="/ministries/childrens-ministry"
                  >
                    Children's Ministry
                  </NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavItem>
                    <NavLink
                      className="sub-menu"
                      href="/ministries/youth-ministry"
                    >
                      Youth Ministry
                    </NavLink>
                  </NavItem>
                </DropdownItem>
                <DropdownItem>
                  <NavLink className="sub-menu" href="/ministries/small-groups">
                    Small Groups
                  </NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink className="sub-menu" href="/ministries/serve">
                    Serving at VBVF
                  </NavLink>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <NavLink href="/bible-studies">Bible Studies</NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                target="_blank"
                href="https://vbvf.churchcenter.com/giving?open-in-church-center-modal=true"
              >
                Give
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                target="_blank"
                href="https://www.versebyverseministry.org/bible-studies/gospel-of-matthew"
              >
                Sermons
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/contact">Contact</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default GlobalNav;
