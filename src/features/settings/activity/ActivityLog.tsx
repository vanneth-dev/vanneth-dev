import { useTranslation } from "react-i18next";
import React, { useEffect, useState } from "react";
import Axios from "src/shared/services/axios";
import { formatDateTime } from "src/shared/utils/global";
import { Activity } from "src/features/settings/activity/types/activity";

const ActivityLog: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [data, setData] = useState<Activity[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [limit, setLimit] = useState(10);
  const [total, setTotal] = useState(0);
  const [sortField, setSortField] = useState<string | null>(null);
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");

  const handleLimitChange = (limit: number) => {
    setPage(1);
    setLimit(limit);
  };

  const handleSort = (field: string) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("asc");
    }
    setPage(1);
  };

  const renderSortIcon = (field: string) => {
    if (sortField !== field) {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 inline-block ml-1 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
          />
        </svg>
      );
    }

    return sortDirection === "asc" ? (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4 inline-block ml-1 text-blue-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 15l7-7 7 7"
        />
      </svg>
    ) : (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4 inline-block ml-1 text-blue-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 9l-7 7-7-7"
        />
      </svg>
    );
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const {
          data: { data, total, currentPage },
        } = await Axios.get("activity-log", {
          params: {
            page: page,
            limit: limit,
            sort_by: sortField,
            sort_direction: sortDirection,
          },
        });
        setData(data);
        setTotal(total);
        setPage(currentPage);
      } catch (error: any) {
        setError(
          error.response?.data?.message ||
            "An error occurred while fetching data.",
        );
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 5);
      }
    };
    fetchData();
  }, [page, limit, sortField, sortDirection]);

  return (
    <div className="">
      <div className="mx-auto container bg-white dark:bg-gray-800 shadow rounded">
        <div className="flex flex-col lg:flex-row p-4 lg:p-8 justify-between items-start lg:items-stretch w-full">
          <div className="w-full lg:w-1/3 flex flex-col lg:flex-row items-start lg:items-center">
            <div className="flex items-center">
              <a
                className="text-gray-600 dark:text-gray-400 p-2 border-transparent border bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 hover:bg-gray-200 cursor-pointer rounded focus:outline-none focus:border-gray-800 focus:shadow-outline-gray"
                href="javascript: void(0)"
              >
                <svg
                  xmlns="http:www.w3.org/2000/svg"
                  className="icon cursor-pointer icon-tabler icon-tabler-edit"
                  width={20}
                  height={20}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <path d="M9 7 h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" />
                  <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3" />
                  <line x1={16} y1={5} x2={19} y2={8} />
                </svg>
              </a>
              <a
                className="text-gray-600 dark:text-gray-400 mx-2 p-2 border-transparent border bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 hover:bg-gray-200 cursor-pointer rounded focus:outline-none focus:border-gray-800 focus:shadow-outline-gray"
                href="javascript: void(0)"
              >
                <svg
                  xmlns="http:www.w3.org/2000/svg"
                  className="icon cursor-pointer icon-tabler icon-tabler-settings"
                  width={20}
                  height={20}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <circle cx={12} cy={12} r={3} />
                </svg>
              </a>
              <a
                className="text-gray-600 dark:text-gray-400 mr-2 p-2 border-transparent border bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 hover:bg-gray-200 cursor-pointer rounded focus:outline-none focus:border-gray-800 focus:shadow-outline-gray"
                href="javascript: void(0)"
              >
                <svg
                  xmlns="http:www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-bookmark"
                  width={20}
                  height={20}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <path d="M9 4h6a2 2 0 0 1 2 2v14l-5-3l-5 3v-14a2 2 0 0 1 2 -2" />
                </svg>
              </a>
              <a
                className="text-gray-600 dark:text-gray-400 mr-2 p-2 border-transparent border bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 hover:bg-gray-200 cursor-pointer rounded focus:outline-none focus:border-gray-800 focus:shadow-outline-gray"
                href="javascript: void(0)"
              >
                <svg
                  xmlns="http:www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-copy"
                  width={20}
                  height={20}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <rect x={8} y={8} width={12} height={12} rx={2} />
                  <path d="M16 8v-2a2 2 0 0 0 -2 -2h-8a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h2" />
                </svg>
              </a>
              <a
                className="text-red-500 p-2 border-transparent border bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 hover:bg-gray-200 cursor-pointer rounded focus:outline-none focus:border-gray-800 focus:shadow-outline-gray"
                href="javascript: void(0)"
              >
                <svg
                  xmlns="http:www.w3.org/2000/svg"
                  className="icon cursor-pointer icon-tabler icon-tabler-trash"
                  width={20}
                  height={20}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <line x1={4} y1={7} x2={20} y2={7} />
                  <line x1={10} y1={11} x2={10} y2={17} />
                  <line x1={14} y1={11} x2={14} y2={17} />
                  <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                  <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                </svg>
              </a>
            </div>
          </div>
          <div className="w-full lg:w-2/3 flex flex-col lg:flex-row items-start lg:items-center justify-end">
            <div className="flex items-center lg:border-l lg:border-r border-gray-300 dark:border-gray-200 py-3 lg:py-0 lg:px-6">
              <p
                className="text-base text-gray-600 dark:text-gray-400"
                id="page-view"
              >
                {t("pagination.showing")} {(page - 1) * limit + 1}{" "}
                {t("pagination.to")} {Math.min(page * limit, total)}{" "}
                {t("pagination.of")} {total}
              </p>
              <button
                onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                disabled={page === 1}
                className="text-gray-600 dark:text-gray-400 ml-2 border-transparent border cursor-pointer rounded"
              >
                <svg
                  xmlns="http:www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-chevron-left"
                  width={20}
                  height={20}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <polyline points="15 6 9 12 15 18" />
                </svg>
              </button>

              <button
                onClick={() => setPage((prev) => prev + 1)}
                disabled={page * limit >= total}
                className="text-gray-600 dark:text-gray-400 border-transparent border rounded focus:outline-none cursor-pointer"
              >
                <svg
                  xmlns="http:www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-chevron-right"
                  width={20}
                  height={20}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <polyline points="9 6 15 12 9 18" />
                </svg>
              </button>
            </div>
            <div className="flex items-center lg:border-r border-gray-300 dark:border-gray-200 pb-3 lg:pb-0 lg:px-6">
              <div className="relative w-32 z-10">
                <div className="pointer-events-none text-gray-600 dark:text-gray-400 absolute inset-0 m-auto mr-2 xl:mr-4 z-0 w-5 h-5">
                  <svg
                    xmlns="http:www.w3.org/2000/svg"
                    className="icon cursor-pointer icon-tabler icon-tabler-chevron-down"
                    width={20}
                    height={20}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </div>
                <select
                  aria-label="Selected tab"
                  className="focus:outline-none border-none border-transparent focus:border-gray-800 focus:shadow-outline-gray text-base form-select block w-full py-2 px-2 xl:px-3 rounded text-gray-600 dark:text-gray-400 appearance-none bg-transparent"
                  value={limit}
                  onChange={(e) => handleLimitChange(Number(e.target.value))}
                >
                  <option value={10}>10</option>
                  <option value={25}>25</option>
                  <option value={50}>50</option>
                  <option value={100}>100</option>
                  <option value={500}>500</option>
                  <option value={1000}>1000</option>
                </select>
              </div>
            </div>
            <div className="lg:ml-6 flex items-center">
              <button className="bg-gray-200 transition duration-150 ease-in-out focus:outline-none border border-transparent focus:border-gray-800 focus:shadow-outline-gray hover:bg-gray-300 rounded text-blue-700 px-5 h-8 flex items-center text-sm">
                Download All
              </button>
            </div>
          </div>
        </div>
        <div className="w-full overflow-x-scroll xl:overflow-x-hidden overflow-y-auto max-h-[68vh]">
          <table className="min-w-full bg-white dark:bg-gray-800">
            <thead>
              <tr className="w-full h-16 border-gray-300 dark:border-gray-200 border-b py-8">
                <th
                  className="pl-4 text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4"
                  style={{ width: "100px" }}
                >
                  {t("no.")}
                </th>
                <th
                  className="text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4 cursor-pointer hover:text-blue-700"
                  onClick={() => handleSort("causerId")}
                  style={{ width: "100px" }}
                >
                  {t("action")} {renderSortIcon("causerId")}
                </th>
                <th
                  className="text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4 cursor-pointer hover:text-blue-700"
                  onClick={() => handleSort("logName")}
                  style={{ width: "100px" }}
                >
                  {t("logName")} {renderSortIcon("logName")}
                </th>
                <th
                  className="text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4 cursor-pointer hover:text-blue-700"
                  onClick={() => handleSort("action")}
                  style={{ width: "100px" }}
                >
                  {t("log.event")} {renderSortIcon("action")}
                </th>
                <th
                  className="text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4 cursor-pointer hover:text-blue-700"
                  onClick={() => handleSort("description")}
                  style={{ width: "300px" }}
                >
                  {t("description")} {renderSortIcon("description")}
                </th>
                <th
                  className="text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4 cursor-pointer hover:text-blue-700"
                  onClick={() => handleSort("createdAt")}
                  style={{ width: "300px" }}
                >
                  {t("created_at")} {renderSortIcon("createdAt")}
                </th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan={7} className="text-center py-4">
                    <div className="flex justify-center items-center">
                      <div className="loader ease-linear rounded-full border-3 border-t-3 border-gray-200 border-t-gray-700 h-8 w-8"></div>
                    </div>
                    <style>{`
                              .loader {
                                animation: spin 0.5s linear infinite;
                              }
                              @keyframes spin {
                                0% {
                                  transform: rotate(0deg);
                                }
                                100% {
                                  transform: rotate(360deg);
                                }
                              }
                            `}</style>
                  </td>
                </tr>
              ) : error ? (
                <tr>
                  <td colSpan={6} className="text-center py-4 text-red-500">
                    {error}
                  </td>
                </tr>
              ) : total <= 0 ? (
                <tr>
                  <td colSpan={6} className="text-center py-4 text-gray-400">
                    {t("no_data")}
                  </td>
                </tr>
              ) : (
                data.map((items, index) => (
                  <tr
                    key={items.id}
                    className="h-24 border-gray-300 dark:border-gray-200 border-b"
                  >
                    <td className="pl-8 pr-6 text-left whitespace-no-wrap text-sm text-gray-800 dark:text-gray-100 tracking-normal leading-4">
                      <div className="relative w-10">{index + 1}</div>
                    </td>
                    <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">
                      {items?.createdBy}
                    </td>
                    <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">
                      {items?.logName}
                    </td>
                    <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">
                      <div className="flex items-center">{items?.action}</div>
                    </td>
                    <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">
                      {items?.description}
                    </td>
                    <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">
                      {items?.createdAt
                        ? formatDateTime(items.createdAt, i18n.language)
                        : ""}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ActivityLog;
