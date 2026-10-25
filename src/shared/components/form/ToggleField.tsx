import React from "react";

interface ToggleFieldProps {
  label: string;
  enabled: boolean;
  onChange: () => void;
  activeLabel?: string;
  inactiveLabel?: string;
}

export const ToggleField: React.FC<ToggleFieldProps> = ({
  label,
  enabled,
  onChange,
  activeLabel = "On",
  inactiveLabel = "Off",
}) => {
  return (
    <div className="space-y-1">
      <span className="block text-lg font-medium text-gray-700">{label}</span>
      <button
        type="button"
        onClick={onChange}
        className={`
          relative inline-flex flex-shrink-0 h-8 w-16 border-2 border-transparent 
          rounded-full cursor-pointer transition-colors ease-in-out duration-200 
          focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
          ${enabled ? "bg-blue-600" : "bg-gray-200"}
        `}
        aria-pressed={enabled}
      >
        <span className="sr-only">Use setting</span>
        <span
          aria-hidden="true"
          className={`
            pointer-events-none inline-block h-7 w-7 rounded-full 
            bg-white shadow transform ring-0 transition ease-in-out duration-200
            ${enabled ? "translate-x-8" : "translate-x-0"}
          `}
        />
      </button>
      <span className="text-sm text-gray-500 block mt-1">
        {enabled ? activeLabel : inactiveLabel}
      </span>
    </div>
  );
};
