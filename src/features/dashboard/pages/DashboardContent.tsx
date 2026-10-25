import {
  Activity,
  DollarSign,
  Package,
  ShoppingBag,
  Users,
} from "lucide-react";
import { useEffect, useState } from "react";
import Axios from "src/shared/services/axios";

export const DashboardContent = () => {
  const [totalBannedIps, setTotalBannedIps] = useState(0);

  useEffect(() => {
    fetchBannedIps();
  }, []);

  const fetchBannedIps = async () => {
    const response = await Axios.get("/firewall/banned");
    setTotalBannedIps(response.data.total);
  };
  const statCards = [
    {
      title: "Total Banned IPs",
      value: totalBannedIps,
      icon: Users,
      color: "bg-blue-500",
      trend: "+12%",
      trendUp: true,
    },
    {
      title: "Revenue",
      value: "$12,345",
      icon: DollarSign,
      color: "bg-green-500",
      trend: "+8%",
      trendUp: true,
    },
    {
      title: "Orders",
      value: "843",
      icon: ShoppingBag,
      color: "bg-purple-500",
      trend: "+5%",
      trendUp: true,
    },
    {
      title: "Products",
      value: "56",
      icon: Package,
      color: "bg-amber-500",
      trend: "-3%",
      trendUp: false,
    },
  ];

  return (
    <>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
          Dashboard
        </h1>
        <p className="mt-1 text-gray-600 dark:text-gray-400">
          Welcome back! Here's an overview of your business performance.
        </p>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {statCards.map((card, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-900 rounded-lg shadow overflow-hidden transition-all hover:shadow-md"
          >
            <div className="p-5">
              <div className="flex items-center">
                <div className={`${card.color} rounded-lg p-3 text-white`}>
                  <card.icon className="h-6 w-6" />
                </div>
                <div className="ml-5 w-full">
                  <div className="flex justify-between items-center">
                    <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                      {card.title}
                    </h3>
                    <span
                      className={`text-xs font-medium px-2 py-1 rounded-full ${
                        card.trendUp
                          ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
                          : "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400"
                      }`}
                    >
                      {card.trend}
                    </span>
                  </div>
                  <p className="mt-1 text-2xl font-semibold text-gray-900 dark:text-white">
                    {card.value}
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 px-5 py-3">
              <div className="flex items-center text-sm">
                <Activity className="h-4 w-4 text-gray-400 mr-1" />
                <span className="text-gray-500 dark:text-gray-400">
                  Last 30 days
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Additional Content */}
      <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-5">
        {/* Recent Activity */}
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow lg:col-span-2">
          <div className="px-5 py-4 border-b border-gray-200 dark:border-gray-700">
            <h3 className="font-medium text-gray-900 dark:text-white">
              Recent Activity
            </h3>
          </div>
          <div className="p-5">
            <div className="space-y-4">
              {[1, 2, 3].map((_, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="h-8 w-8 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                      <Users className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                    </div>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900 dark:text-white">
                      {index === 0
                        ? "New user registered"
                        : index === 1
                          ? "Product added to inventory"
                          : "Order #45623 completed"}
                    </p>
                    <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                      {index === 0
                        ? "5 minutes ago"
                        : index === 1
                          ? "2 hours ago"
                          : "Yesterday at 4:30 PM"}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 px-5 py-3 text-center rounded-b-lg">
            <button className="text-sm text-blue-600 dark:text-blue-400 hover:underline font-medium">
              View all activity
            </button>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow">
          <div className="px-5 py-4 border-b border-gray-200 dark:border-gray-700">
            <h3 className="font-medium text-gray-900 dark:text-white">
              Performance
            </h3>
          </div>
          <div className="p-5">
            <div className="space-y-4">
              {["Visitors", "Conversions", "Avg. Time"].map((item, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {item}
                  </span>
                  <span className="text-sm font-medium text-gray-900 dark:text-white">
                    {index === 0 ? "8,429" : index === 1 ? "12.3%" : "3m 45s"}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-5 space-y-2">
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-gray-500 dark:text-gray-400">
                    Weekly Goal
                  </span>
                  <span className="text-gray-700 dark:text-gray-300">75%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full"
                    style={{ width: "75%" }}
                  ></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-gray-500 dark:text-gray-400">
                    Monthly Target
                  </span>
                  <span className="text-gray-700 dark:text-gray-300">60%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-green-500 h-2 rounded-full"
                    style={{ width: "60%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
