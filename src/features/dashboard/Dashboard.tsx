import React, { Suspense } from "react";
import { DashboardContent } from "./pages/DashboardContent";

const Dashboard: React.FC = () => {
  return (
    <Suspense
      fallback={<div className="p-8 text-center">Loading dashboard...</div>}
    >
      <DashboardContent />
    </Suspense>
  );
};

export default Dashboard;
