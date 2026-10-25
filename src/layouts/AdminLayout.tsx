import React, { useState } from "react";
import { useNavigate, useLocation, Outlet } from "react-router-dom";
import Breadcrumbs from "src/shared/components/layouts/Breadcrumbs";
import { Header } from "src/shared/components/layouts/Header";
import { Sidebar } from "src/shared/components/layouts/Sidebar";

const AdminLayout: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900 overflow-hidden">
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-opacity-30 lg:hidden z-20"
          onClick={() => setSidebarOpen(false)}
        />
      )}
      <Sidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        navigate={navigate}
        currentPath={location.pathname}
      />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header onMenuClick={() => setSidebarOpen(true)} />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <Breadcrumbs />
          <div className="container mx-auto px-2 py-6 max-w-7xl">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
