import React, { ReactNode } from "react";
import { ChevronDown } from "lucide-react";

interface SelectFieldProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  error?: string;
  required?: boolean;
  children: ReactNode;
  placeholder?: string;
}

export const SelectField: React.FC<SelectFieldProps> = ({
  label,
  name,
  value,
  onChange,
  error,
  required = false,
  children,
  placeholder,
}) => {
  return (
    <div className="space-y-2">
      <label htmlFor={name} className="block text-lg font-medium text-gray-700">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <div className="relative">
        <select
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          className={`
            block w-full rounded-md px-2 py-2
            appearance-none
            bg-white
            font-medium
            transition-all duration-200
            focus:ring-2 focus:ring-offset-0 focus:outline-none
            ${
              error
                ? "border-red-300 text-red-700 focus:border-red-500 focus:ring-red-200"
                : "border-gray-300 text-gray-800 focus:border-blue-500 focus:ring-blue-200"
            }
            ${value ? "border" : "border-2"}
          `}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {children}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500">
          <ChevronDown
            size={18}
            className="transition-transform duration-200"
          />
        </div>
      </div>
      {error && (
        <p className="text-sm text-red-600 mt-1 font-medium">{error}</p>
      )}
    </div>
  );
};
