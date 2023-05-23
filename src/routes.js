import {
  ADMIN_ROUTE,
  HOME_ROUTE,
  ABOUT_ROUTE,
  SERVICE_ROUTE,
  CONTACT_ROUTE,
  LOGIN_ROUTE,
  ADMIN_PAGE_ROUTE,
  LOGIN_PAGE_ROUTE,
  STUDENTS_ROUTE,
  ROLE_ROUTE,
  TEAMS_ROUTE,
  COURSES_ROUTE,
  MENTORS_ROUTE,
  TEAM_LEAD_ROUTE,
} from "./utils/consts";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Service from "./pages/Service/Service";
import Contact from "./pages/Contact/Contact";
import Login from "./pages/Login/Login";
import Admin from "./pages/Login/Admin";
import AdminPage from "./pages/AdminPage/AdminPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import Students from "./pages/Students/Students";
import Role from "./pages/Role/Role";
import Teams from "./pages/Teams/Teams";
import Courses from "./pages/Courses/Courses";
import Mentors from "./pages/Mentors/Mentors";
import TeamLead from "./pages/TeamLead/TeamLead";

export const publicRoutes = [
  {
    path: HOME_ROUTE,
    Component: Home,
  },
  {
    path: ABOUT_ROUTE,
    Component: About,
  },
  {
    path: SERVICE_ROUTE,
    Component: Service,
  },
  {
    path: CONTACT_ROUTE,
    Component: Contact,
  },
  {
    path: ADMIN_ROUTE,
    Component: Admin,
  },
  {
    path: LOGIN_ROUTE,
    Component: Login,
  },
];

export const authRoutes = [
  {
    path: ADMIN_PAGE_ROUTE,
    Component: AdminPage,
  },
  {
    path: LOGIN_PAGE_ROUTE,
    Component: LoginPage,
  },
  {
    path: STUDENTS_ROUTE,
    Component: Students,
  },
  {
    path: ROLE_ROUTE,
    Component: Role,
  },
  {
    path: TEAMS_ROUTE,
    Component: Teams,
  },
  {
    path: COURSES_ROUTE,
    Component: Courses,
  },
  {
    path: MENTORS_ROUTE,
    Component: Mentors,
  },
  {
    path: TEAM_LEAD_ROUTE,
    Component: TeamLead,
  },
];
