import React from "react";
import {
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

type SortDirection = "asc" | "desc";

export type DataTableColumn<T> = {
  key: string;
  label: string;
  width?: string | number;
  thClass?: string;
  tdClass?: string;
  sortable?: boolean;
  render: (item: T, idx: number) => React.ReactNode;
};

export type DataTableProps<T> = {
  columns: DataTableColumn<T>[];
  data: T[];
  total: number;
  page: number;
  limit: number;
  error?: string;
  loading?: boolean;
  onLimitChange: (limit: number) => void;
  onPageChange: (page: number) => void;
  onSort: (field: string) => void;
  sortField: string | null;
  sortDirection: SortDirection;
  t: (key: string) => string;
  headerLeft?: React.ReactNode;
  headerRight?: React.ReactNode;
};

const theadClassName =
  "pr-6 text-left text-sm font-normal text-gray-600 dark:text-gray-400 cursor-pointer hover:text-blue-700 tracking-normal leading-4";
const tbodyClassName =
  "text-sm pr-6 text-gray-800 dark:text-gray-100 tracking-normal leading-4";

function renderSortIcon(
  field: string,
  sortField: string | null,
  sortDirection: SortDirection,
) {
  if (sortField !== field) {
    return (
      <span className="inline-block ml-1 align-middle">
        <ChevronUp className="h-3 w-3 text-gray-400" />
        <ChevronDown className="h-3 w-3 -mt-1 text-gray-400" />
      </span>
    );
  }
  return sortDirection === "asc" ? (
    <ChevronUp className="h-3 w-3 inline-block ml-1 text-blue-600" />
  ) : (
    <ChevronDown className="h-3 w-3 inline-block ml-1 text-blue-600" />
  );
}

export default function DataTable<T>({
  columns,
  data,
  total,
  page,
  limit,
  error,
  loading,
  onLimitChange,
  onPageChange,
  onSort,
  sortField,
  sortDirection,
  t,
  headerLeft,
  headerRight,
}: DataTableProps<T>) {
  return (
    <div className="mx-auto container bg-white dark:bg-gray-800 shadow rounded">
      <div className="flex flex-col lg:flex-row p-4 lg:p-7 justify-between items-start lg:items-stretch w-full">
        <div className="w-full lg:w-1/3 flex items-center">{headerLeft}</div>
        <div className="w-full lg:w-2/3 flex flex-col lg:flex-row items-center justify-end">
          <div className="flex items-center lg:border-l lg:border-r border-gray-300 dark:border-gray-200 py-3 lg:py-0 lg:px-6">
            <p className="text-base text-gray-600 dark:text-gray-400">
              {t("pagination.showing")} {(page - 1) * limit + 1}{" "}
              {t("pagination.to")} {Math.min(page * limit, total)}{" "}
              {t("pagination.of")} {total}
            </p>
            <button
              onClick={() => onPageChange(page - 1)}
              disabled={page === 1}
              className="ml-2 text-gray-600 dark:text-gray-400 cursor-pointer rounded"
              aria-label={t("pagination.prev")}
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => onPageChange(page + 1)}
              disabled={page * limit >= total}
              className="ml-2 text-gray-600 dark:text-gray-400 cursor-pointer rounded"
              aria-label={t("pagination.next")}
            >
              <ChevronRight size={20} />
            </button>
          </div>
          <div className="flex items-center lg:border-r border-gray-300 dark:border-gray-200 pb-3 lg:pb-0 lg:px-6">
            <div className="relative w-32 z-10">
              <div className="pointer-events-none absolute inset-0 m-auto mr-2 xl:mr-4 z-0 w-5 h-5 text-gray-600 dark:text-gray-400 flex items-center justify-end">
                <ChevronDown size={20} />
              </div>
              <select
                aria-label={t("pagination.rows_per_page")}
                className="appearance-none bg-transparent focus:outline-none border-none text-base form-select block w-full py-2 px-2 xl:px-3 rounded text-gray-600 dark:text-gray-400"
                value={limit}
                onChange={(e) => onLimitChange(Number(e.target.value))}
              >
                {[10, 25, 50, 100, 500, 1000].map((n) => (
                  <option key={n} value={n}>
                    {n}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="lg:ml-6 flex items-center">{headerRight}</div>
        </div>
      </div>

      <div className="overflow-x-auto relative">
        <div className="min-h-[66vh] max-h-[70vh] overflow-y-auto">
          <table className="min-w-full table-fixed bg-white dark:bg-gray-800 text-nowrap">
            <colgroup>
              {columns.map((col) => (
                <col key={col.key} style={{ width: col.width }} />
              ))}
            </colgroup>
            <thead>
              <tr className="h-16 border-b border-gray-300 dark:border-gray-200">
                {columns.map((col) => (
                  <th
                    key={col.key}
                    className={`${col.thClass || ""} ${theadClassName}`}
                    onClick={col.sortable ? () => onSort(col.key) : undefined}
                    style={{
                      cursor: col.sortable ? "pointer" : "default",
                      userSelect: "none",
                    }}
                  >
                    {t(col.label)}{" "}
                    {col.sortable &&
                      renderSortIcon(col.key, sortField, sortDirection)}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {error ? (
                <tr>
                  <td
                    colSpan={columns.length}
                    className="text-center py-4 text-red-500"
                  >
                    {error}
                  </td>
                </tr>
              ) : (
                data.map((item, idx) => (
                  <tr
                    key={(item as any).id ?? idx}
                    className="h-24 border-b border-gray-300 dark:border-gray-200"
                  >
                    {columns.map((col) => (
                      <td
                        key={col.key}
                        className={`${tbodyClassName} ${col.tdClass || ""}`}
                      >
                        {col.render(item, idx)}
                      </td>
                    ))}
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
        {loading && <></>}
      </div>
    </div>
  );
}
