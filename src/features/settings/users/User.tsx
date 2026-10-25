import { useTranslation } from "react-i18next";
import React, { useEffect, useState } from "react";
import Axios from "src/shared/services/axios";
import type { User } from "src/features/settings/users/types/user";
import { formatDate } from "src/shared/utils/global";
import { Link } from "react-router-dom";
import {
  Edit,
  Settings,
  Bookmark,
  Copy,
  Trash,
  MoreVertical,
} from "lucide-react";
import DataTable, {
  DataTableColumn,
} from "src/shared/components/layouts/DataTable";
import { Router } from "src/router/routes";
const columns: DataTableColumn<User>[] = [
  {
    key: "no",
    label: "no.",
    width: "100px",
    sortable: false,
    render: (_: User, idx: number) => (
      <span className="pl-8 pr-6 text-left text-sm text-gray-800 dark:text-gray-100 tracking-normal leading-4">
        {idx + 1}
      </span>
    ),
    thClass: "pl-4 pr-6",
  },
  {
    key: "name",
    label: "name",
    width: "300px",
    sortable: true,
    render: (user: User) => user.name,
  },
  {
    key: "nameKm",
    label: "nameKm",
    width: "300px",
    sortable: true,
    render: (user: User) => user.nameKm,
  },
  {
    key: "username",
    label: "username",
    width: "300px",
    sortable: true,
    render: (user: User) => user.username,
  },
  {
    key: "email",
    label: "email",
    width: "700px",
    sortable: true,
    render: (user: User) => user.email,
  },
  {
    key: "roles",
    label: "role",
    width: "150px",
    sortable: false,
    render: (user: User) => user.roles?.map((r) => r.name).join(", "),
  },
  {
    key: "createdAt",
    label: "created_at",
    width: "500px",
    sortable: true,
    render: (user: User) => (user.createdAt ? formatDate(user.createdAt) : ""),
  },
  {
    key: "active",
    label: "status",
    width: "120px",
    sortable: true,
    render: (user: User) => (
      <div
        className={`w-2 h-2 rounded-full ${user.active === "Y" ? "bg-green-500" : "bg-red-500"}`}
      />
    ),
    tdClass: "ps-3",
  },
  {
    key: "more",
    label: "more",
    width: "70px",
    sortable: false,
    render: () => (
      <button className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700">
        <MoreVertical size={20} />
      </button>
    ),
    thClass: "pr-8",
    tdClass: "pr-8 relative",
  },
];

const User: React.FC = () => {
  const { t } = useTranslation();
  const [data, setData] = useState<User[]>([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [total, setTotal] = useState(0);
  const [sortField, setSortField] = useState<string | null>(null);
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleLimitChange = (newLimit: number) => {
    setPage(1);
    setLimit(newLimit);
  };

  const handleSort = (field: string) => {
    if (sortField === field) {
      setSortDirection((d) => (d === "asc" ? "desc" : "asc"));
    } else {
      setSortField(field);
      setSortDirection("asc");
    }
    setPage(1);
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const {
          data: { data: users, total, currentPage },
        } = await Axios.get("users", {
          params: {
            page,
            limit,
            sort_by: sortField,
            sort_direction: sortDirection,
          },
        });
        setData(users);
        setTotal(total);
        setPage(currentPage);
      } catch (err: any) {
        setError(
          err.response?.data?.message ||
            "An error occurred while fetching data.",
        );
      } finally {
        setTimeout(() => setLoading(false), 200);
      }
    };
    fetchData();
  }, [page, limit, sortField, sortDirection]);

  return (
    <DataTable
      columns={columns}
      data={data}
      total={total}
      page={page}
      limit={limit}
      error={error || ""}
      loading={loading}
      onLimitChange={handleLimitChange}
      onPageChange={setPage}
      onSort={handleSort}
      sortField={sortField}
      sortDirection={sortDirection}
      t={t}
      headerLeft={
        <>
          <a className="p-2 text-gray-600">
            <Edit size={20} />
          </a>
          <a className="p-2 mx-2">
            <Settings size={20} />
          </a>
          <a className="p-2 mr-2">
            <Bookmark size={20} />
          </a>
          <a className="p-2 mr-2">
            <Copy size={20} />
          </a>
          <a className="p-2 text-red-500">
            <Trash size={20} />
          </a>
        </>
      }
      headerRight={
        <>
          <Link to={Router.SETTINGS.USERS.CREATE}>
            <button className="bg-blue-700 hover:bg-blue-800 rounded text-white px-5 h-8 flex items-center text-sm focus:outline-none transition-colors">
              Create
            </button>
          </Link>
        </>
      }
    />
  );
};

export default User;
