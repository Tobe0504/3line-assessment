import DashboardIcon from "../assets/icons/DashboardIcon";
import HomeIcon from "../assets/icons/HomeIcon";
import ProjectsIcon from "../assets/icons/ProjectsIcon";
import ReportingIcon from "../assets/icons/ReportingIcon";
import Settingsicon from "../assets/icons/Settingsicon";
import SupportIcon from "../assets/icons/SupportIcon";
import TasksIcon from "../assets/icons/TasksIcon";
import UsersIcon from "../assets/icons/UsersIcon";

export const routes = Object.freeze({
  BASE_URL: "/",
  DASHBOARD: "/dashboard",
  PROJECTS: "/projects",
  TASKS: "/tasks",
  REPORTING: "/reporting",
  USERS: "/users",
  SUPPORT: "/support",
  SETTINGS: "/settings",
  SETTINGS_ROLES: "/settings/roles",
});

export const sideNavRoutes = [
  {
    title: "Home",
    icon: <HomeIcon />,
    route: routes.BASE_URL,
    notificationsCount: 0,
  },

  {
    title: "Dashboard",
    icon: <DashboardIcon />,
    route: routes.DASHBOARD,
    notificationsCount: 10,
  },

  {
    title: "Projects",
    icon: <ProjectsIcon />,
    route: routes.PROJECTS,
    notificationsCount: 0,
  },
  {
    title: "Tasks",
    icon: <TasksIcon />,
    route: routes.TASKS,
    notificationsCount: 0,
  },
  {
    title: "Reporting",
    icon: <ReportingIcon />,
    route: routes.REPORTING,
    notificationsCount: 0,
  },
  {
    title: "Users",
    icon: <UsersIcon />,
    route: routes.USERS,
    notificationsCount: 0,
  },
  {
    title: "Support",
    icon: <SupportIcon />,
    route: routes.SUPPORT,
    notificationsCount: 0,
  },
  {
    title: "Settings",
    icon: <Settingsicon />,
    route: routes.SETTINGS_ROLES,
    notificationsCount: 0,
  },
];

export const settingsRoutes = [
  {
    title: "My details",
    route: "/my-details",
    isActive: false,
  },
  {
    title: "Profile",
    route: "/profile",
    isActive: false,
  },
  {
    title: "Password",
    route: "/password",
    isActive: false,
  },

  {
    title: "Team",
    route: "/team",
    isActive: false,
  },
  {
    title: "Plan",
    route: "/plan",
    isActive: false,
  },
  {
    title: "Roles",
    route: "/roles",
    isActive: false,
  },
  {
    title: "Notifications",
    route: "/notifications",
    isActive: false,
  },
  {
    title: "Integrations",
    route: "/integrations",
    isActive: false,
  },
  {
    title: "API",
    route: "/api",
    isActive: false,
  },
];
