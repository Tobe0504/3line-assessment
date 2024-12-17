"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Layout from "./components/Layout";

const page = () => {
  // Router
  const router = useRouter();

  // Effects
  useEffect(() => {
    router.push("/settings/roles");
  }, []);

  return (
    <Layout>
      <div className="font-medium text-xl mb-4">Routing to settings roles.</div>
    </Layout>
  );
};

export default page;
