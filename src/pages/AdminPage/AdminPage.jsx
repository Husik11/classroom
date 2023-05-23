// import React from "react";
// import {
//   CDBSidebar,
//   CDBSidebarContent,
//   CDBSidebarHeader,
//   CDBSidebarMenu,
//   CDBSidebarMenuItem,
// } from "cdbreact";
// import { NavLink } from "react-router-dom";
// import NavDropdown from 'react-bootstrap/NavDropdown';

// const AdminPage = () => {

//   return (
//     <>
//       <div
//         style={{ display: "flex", height: "100vh", overflow: "scroll initial" }}
//       >
//         <CDBSidebar textColor="#fff" backgroundColor="#437f97">
//           <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
//             <a
//               href="/admin/admin_page"
//               className="text-decoration-none"
//               style={{ color: "inherit" }}
//             >
//               Admin Page
//             </a>
//           </CDBSidebarHeader>

//           <CDBSidebarContent clTeCamsassName="sidebar-content">
//             <CDBSidebarMenu>
//               <NavLink
//                 exact
//                 to="/admin/admin_panel/students"
//                 activeClassName="activeClicked"
//               >
//                 <CDBSidebarMenuItem icon="columns">Students</CDBSidebarMenuItem>

//               </NavLink>
//               <NavLink
//                 exact
//                 to="/admin/admin_panel/role"
//                 activeClassName="activeClicked"
//               >
//                 <CDBSidebarMenuItem icon="table">Role</CDBSidebarMenuItem>
//               </NavLink>
//               <NavLink
//                 exact
//                 to="/admin/admin_panel/teams"
//                 activeClassName="activeClicked"
//               >
//                 <CDBSidebarMenuItem icon="user">Teams</CDBSidebarMenuItem>
//               </NavLink>
//               <NavLink
//                 exact
//                 to="/admin/admin_panel/courses"
//                 activeClassName="activeClicked"
//               >
//                 <CDBSidebarMenuItem icon="chart-line">
//                   Courses
//                 </CDBSidebarMenuItem>
//               </NavLink>
//             </CDBSidebarMenu>

//           </CDBSidebarContent>
//         </CDBSidebar>
//       </div>
//     </>
//   );
// };

// export default AdminPage;

import React from "react";
import { Nav, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./AdminPage.css";

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
          <NavDropdown title="Users" id="students-dropdown">
            <NavDropdown.Item>
              <NavLink
                exact
                to="/admin/admin_panel/students"
                className="nav-link text-dark"
                activeClassName="activeClicked"
              >
                Students
              </NavLink>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <NavLink
                exact
                to="/admin/admin_panel/mentors"
                className="nav-link text-dark"
                activeClassName="activeClicked"
              >
                Mentors
              </NavLink>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <NavLink
                exact
                to="/admin/admin_panel/team_lead"
                className="nav-link text-dark"
                activeClassName="activeClicked"
              >
                Team Lead
              </NavLink>
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Item>
            <NavLink
              exact
              to="/admin/admin_panel/role"
              className="nav-link"
              activeClassName="activeClicked"
            >
              Role
            </NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink
              exact
              to="/admin/admin_panel/teams"
              className="nav-link"
              activeClassName="activeClicked"
            >
              Teams
            </NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink
              exact
              to="/admin/admin_panel/courses"
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
