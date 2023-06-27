import React from "react";
import { Nav, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./AdminPage.css";
import {
  STUDENTS_ROUTE,
  MENTORS_ROUTE,
  TEAM_LEAD_ROUTE,
  ROLE_ROUTE,
  TEAMS_ROUTE,
  COURSES_ROUTE,
} from "../../utils/consts";

const AdminPage = () => {
  return (
    <>
      <div
        style={{ display: "flex", height: "100vh", overflow: "scroll initial" }}
      >
        <Nav className="flex-column bg-dark text-light sidebar">
          <Nav.Item>
            <Nav.Link href="/admin/admin_page" className="text-decoration-none">
              Admin Page
            </Nav.Link>
          </Nav.Item>
          <NavDropdown title="Users" id="user-dropdown">
            <NavDropdown.Item
              as={NavLink}
              exact
              to={STUDENTS_ROUTE}
              className="nav-link text-dark"
              activeClassName="activeClicked"
            >
              Students
            </NavDropdown.Item>
            <NavDropdown.Item
              as={NavLink}
              exact
              to={MENTORS_ROUTE}
              className="nav-link text-dark"
              activeClassName="activeClicked"
            >
              Mentors
            </NavDropdown.Item>
            <NavDropdown.Item
              as={NavLink}
              exact
              to={TEAM_LEAD_ROUTE}
              className="nav-link text-dark"
              activeClassName="activeClicked"
            >
              Team Lead
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Item>
            <NavLink
              exact
              to={ROLE_ROUTE}
              className="nav-link"
              activeClassName="activeClicked"
            >
              Role
            </NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink
              exact
              to={TEAMS_ROUTE}
              className="nav-link"
              activeClassName="activeClicked"
            >
              Teams
            </NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink
              exact
              to={COURSES_ROUTE}
              className="nav-link"
              activeClassName="activeClicked"
            >
              Courses
            </NavLink>
          </Nav.Item>
        </Nav>
      </div>
    </>
  );
};

export default AdminPage;
