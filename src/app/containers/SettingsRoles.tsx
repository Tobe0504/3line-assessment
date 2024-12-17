"use client";

import React, { useState } from "react";
import Layout from "../components/Layout";
import SectionHeader from "../components/SectionHeader";
import SectionsNav from "../components/SectionsNav";
import { settingsRoutes } from "../utilities/routes";
import { navItemsType } from "../utilities/types";
import SettingsRolesActiveRoles from "./SettingsRolesActiveRoles";
import SettingsRolesConnectedEmail from "./SettingsRolesConnectedEmail";
import SettingsRolesUserRoles from "./SettingsRolesUserRoles";

const SettingsRoles = () => {
  // States
  const [navItems, setNavItems] = useState<navItemsType[]>(settingsRoutes);

  return (
    <Layout>
      <SectionHeader
        title="Settings"
        caption="Manage your team and preferences here."
      />
      <SectionsNav navItems={navItems} setNavItems={setNavItems} />

      <div className="py-8 border-b-2 border-grey-400">
        <SectionHeader
          title="User Roles"
          caption="Update your roles details and information."
          mini
        />
      </div>
      <SettingsRolesConnectedEmail />
      <SettingsRolesActiveRoles />
      <SettingsRolesUserRoles />
    </Layout>
  );
};

export default SettingsRoles;
