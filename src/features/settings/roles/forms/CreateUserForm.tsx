import React, { useEffect, useState } from "react";
import { Eye, EyeOff, Save, X, CheckSquare, Square } from "lucide-react";
import { useFormValidation } from "src/shared/hooks/useFormValidation";
import { Role } from "src/features/auth/types/auth";
import Axios from "src/shared/services/axios";
import {
  UserFormData,
  Locale,
  User,
} from "src/features/settings/users/types/user";
import { InputField } from "../../../../shared/components/form/InputField";
import { ToggleField } from "../../../../shared/components/form/ToggleField";
import { SelectField } from "../../../../shared/components/form/SelectField";

interface CreateUserFormProps {
  onSubmit: (data: UserFormData) => void;
  onCancel: () => void;
  responseData: (data: User) => void;
}

const CreateUserForm: React.FC<CreateUserFormProps> = ({
  onSubmit,
  onCancel,
  responseData,
}) => {
  const [availableRoles, setAvailableRoles] = useState<Role[]>([]);
  const [page, setPage] = useState(1);
  const [error, setError] = useState<string | null>(null);
  const [limit, setLimit] = useState(10);
  const [allRolesChecked, setAllRolesChecked] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    setLimit(0);
    setPage(1);
    const fetchData = async () => {
      setError(null);
      try {
        const {
          data: { data },
        } = await Axios.get("setting/roles", {
          params: { page: page, limit: limit },
        });
        setAvailableRoles(data);
      } catch (error: any) {
        setError(
          error.response?.data?.message ||
            "An error occurred while fetching data.",
        );
      } finally {
        setTimeout(() => {}, 5);
      }
    };
    fetchData();
  }, [page, limit]);

  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState<UserFormData>({
    name: "",
    nameKm: "",
    roles: [],
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    locale: Locale.EN,
    active: "Y",
    order: 0,
  });

  useEffect(() => {
    if (availableRoles.length > 0) {
      setAllRolesChecked(
        availableRoles.length > 0 &&
          formData.roles.length === availableRoles.length &&
          availableRoles.every((role) => formData.roles.includes(role.id)),
      );
    }
  }, [formData.roles, availableRoles]);

  const { errors, validateForm } = useFormValidation();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleRoleChange = (roleId: number, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      roles: checked
        ? [...prev.roles, roleId]
        : prev.roles.filter((id) => id !== roleId),
    }));
  };

  const handleToggleAllRoles = () => {
    if (allRolesChecked) {
      // Uncheck all roles
      setFormData((prev) => ({
        ...prev,
        roles: [],
      }));
    } else {
      // Check all roles
      setFormData((prev) => ({
        ...prev,
        roles: availableRoles.map((role) => role.id),
      }));
    }
  };

  const handleToggleActive = () => {
    setFormData((prev) => ({
      ...prev,
      active: prev.active === "Y" ? "N" : "Y",
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const isValid = validateForm(formData);
    if (!isValid) return;

    setIsSubmitting(true);
    try {
      const response = await Axios.post("/users/create", formData);
      onSubmit(formData);
      responseData(response.data);
    } catch (error: any) {
      console.error("Error creating user:", error);
      setError(
        error.response?.data?.message ||
          "An error occurred while creating the user.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-6">
          <InputField
            label="Name (English)"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            error={errors.name}
            required
          />

          <InputField
            label="Name (Khmer)"
            name="nameKm"
            value={formData.nameKm}
            onChange={handleInputChange}
            error={errors.nameKm}
            required
          />

          <InputField
            label="Username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            error={errors.username}
            required
          />

          <InputField
            label="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            error={errors.email}
            required
          />

          <div className="space-y-2">
            <ToggleField
              label="Status"
              enabled={formData.active === "Y"}
              onChange={handleToggleActive}
              activeLabel="Active"
              inactiveLabel="Inactive"
            />
          </div>
        </div>

        <div className="space-y-6">
          <div className="relative">
            <InputField
              label="Password"
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              error={errors.password}
              // minLength={6}
              required
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-3 top-10.5 text-gray-500 hover:text-gray-700 transition-colors"
            >
              {showPassword ? <EyeOff size={22} /> : <Eye size={22} />}
            </button>
          </div>
          <div className="relative">
            <InputField
              label="Confirm Password"
              type={showPassword ? "text" : "password"}
              name="confirmPassword"
              value={formData.confirmPassword || ""}
              onChange={handleInputChange}
              error={errors.confirmPassword}
              // minLength={6}
              required
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-3 top-10.5 text-gray-500 hover:text-gray-700 transition-colors"
            >
              {showPassword ? <EyeOff size={22} /> : <Eye size={22} />}
            </button>
          </div>

          <SelectField
            label="Locale"
            name="locale"
            value={formData.locale}
            onChange={handleInputChange}
            error={errors.locale}
            required
          >
            <option value={Locale.EN}>English</option>
            <option value={Locale.KH}>Khmer</option>
          </SelectField>

          {/* <InputField
            label="Display Order"
            type="number"
            name="order"
            value={formData.order?.toString() || '0'}
            onChange={handleInputChange}
            error={errors.order}
          /> */}

          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <label className="block text-lg font-medium text-gray-700">
                Roles <span className="text-red-500">*</span>
              </label>
              <button
                type="button"
                onClick={handleToggleAllRoles}
                className="flex items-center text-sm text-gray-500 hover:text-gray-700 transition-colors"
              >
                {allRolesChecked ? (
                  <>
                    <CheckSquare size={22} className="mr-1" />
                    Uncheck All
                  </>
                ) : (
                  <>
                    <Square size={22} className="mr-1" />
                    Check All
                  </>
                )}
              </button>
            </div>
            <div className="space-y-2 bg-white p-3 rounded-md border border-gray-200">
              {availableRoles.map((role) => (
                <div key={role.id} className="flex items-center p-1">
                  <div className="pretty p-svg p-plain p-bigger p-smooth">
                    <input
                      type="checkbox"
                      id={`role-${role.id}`}
                      checked={formData.roles.includes(role.id)}
                      onChange={(e) =>
                        handleRoleChange(role.id, e.target.checked)
                      }
                      className="p-default"
                    />
                    <div className="state">
                      <img
                        className="svg "
                        src={`${
                          import.meta.env.VITE_NODE_PUBLIC_URL
                        }/assets/icon/check-circle.svg`}
                        alt="check-circle"
                      />
                      <label className="px-2">{role.name}</label>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {errors.roles && (
              <p className="text-sm text-red-600 mt-1">{errors.roles}</p>
            )}
            {error && <p className="text-sm text-red-600 mt-1">{error}</p>}
          </div>
        </div>
      </div>

      <div className="flex justify-end space-x-3 pt-4 border-t border-gray-200">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
        >
          <span className="flex items-center">
            <X size={16} className="mr-2" />
            Cancel
          </span>
        </button>
        <button
          type="submit"
          disabled={isSubmitting}
          className={`px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white flex items-center justify-center ${
            isSubmitting
              ? "bg-blue-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {isSubmitting ? (
            <>
              <svg
                className="animate-spin h-4 w-4 mr-2 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 100 16v-4l-3 3 3 3v-4a8 8 0 01-8-8z"
                />
              </svg>
              Creating...
            </>
          ) : (
            <>
              <Save size={16} className="mr-2" />
              Create
            </>
          )}
        </button>
      </div>
    </form>
  );
};

export default CreateUserForm;
