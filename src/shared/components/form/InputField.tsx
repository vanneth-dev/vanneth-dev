interface InputFieldProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  minLength?: number | null;
  maxLength?: number | null;
}

export const InputField: React.FC<InputFieldProps> = ({
  label,
  name,
  value,
  onChange,
  error,
  type = "text",
  required = false,
  placeholder = "",
  minLength = null,
  maxLength = null,
}) => {
  return (
    <div className="space-y-1">
      <label htmlFor={name} className="block text-lg font-medium text-gray-700">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        minLength={minLength || undefined}
        maxLength={maxLength || undefined}
        className={`
          mt-1 block w-full rounded-md px-3 py-2
          transition-all duration-200 ease-in-out 
          border border-gray-200
          ${
            error
              ? "border-red-300 text-red-900 placeholder-red-300"
              : "border-gray-300 text-gray-900"
          }
        `}
      />
      {error && <p className="text-sm text-red-600 mt-1">{error}</p>}
    </div>
  );
};
