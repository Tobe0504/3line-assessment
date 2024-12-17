"use client";

import { useRouter } from "next/navigation";
import React from "react";
import Button from "../components/Button";
import Layout from "../components/Layout";
import { routes } from "../utilities/routes";

const ErrorPage = () => {
  // Router
  const router = useRouter();
  return (
    <Layout className="flex flex-col justify-center items-center h-full">
      <div className="font-medium text-xl mb-4">
        Oops... nothing to see here.
      </div>
      <Button
        type="primary"
        onClick={() => {
          router.push(routes.SETTINGS_ROLES);
        }}
      >
        Return to settings role page
      </Button>
    </Layout>
  );
};

export default ErrorPage;
