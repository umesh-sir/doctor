import React, { FC, SelectHTMLAttributes } from "react";

interface AselectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  title?: string;
  name?: string;
  options: { name: string; value: string }[]; // Array of name-value pairs
  handleInputChange?: (name: string, value: string) => void;
  required?: boolean;
  value?: string | undefined; // Updated to remove null
  errorMessage?: string;
}

const Aselect: FC<AselectProps> = ({
  title,
  name,
  options,
  handleInputChange,
  required,
  value,
  errorMessage,
  disabled,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    handleInputChange?.(name || "", selectedValue); // Provide fallback for name
  };

  return (
    <div className="relative w-full">
      {title && (
        <label className="flex capitalize text-base ml-2 font-bold mt-1" htmlFor={name}>
          {title.toLowerCase()}
          {required && <span className="text-red-400">*</span>}
        </label>
      )}

      <select
        name={name}
        onChange={handleChange}
        value={value || ""}
        required={required}
        disabled={disabled}
        className="border-2 px-2 rounded w-full h-9 bg-slate-200"
      >
        <option value="" disabled>
          {title}
        </option>   
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>

      {errorMessage && (
        <p className="text-exit text-xs ml-2 text-red-400">{errorMessage}</p>
      )}
    </div>
  );
};

export default Aselect;
