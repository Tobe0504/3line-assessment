import { roleTypes } from "./types";

export const roleData: roleTypes[] = [
  {
    title: "Superadmin",
    type: "DEFAULT",
    date: "Jan 1, 2023",
    status: "inactive",
    isActive: true,
  },
  {
    title: "Merchantadmin",
    type: "DEFAULT",
    date: "Jan 1, 2023",
    status: "inactive",
    isActive: false,
  },
  {
    title: "supportadmin",
    type: "DEFAULT",
    date: "Jan 1, 2023",
    status: "inactive",
    isActive: false,
  },
  {
    title: "sales personnel",
    type: "CUSTOM",
    date: "Jan 1, 2023",
    status: "inactive",
    isActive: false,
  },
  {
    title: "Deputy sales personnel",
    type: "CUSTOM",
    date: "Jan 1, 2023",
    status: "inactive",
    isActive: false,
  },
  {
    title: "Developeradmin",
    type: "SYSTEM-CUSTOM",
    date: "Jan 1, 2023",
    status: "inactive",
    isActive: false,
  },
  {
    title: "Developer-basic",
    type: "SYSTEM-CUSTOM",
    date: "Jan 1, 2023",
    status: "inactive",
    isActive: false,
  },
];
