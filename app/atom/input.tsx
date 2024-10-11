import React, { ChangeEvent, FC, InputHTMLAttributes } from "react";

interface AinputProps extends InputHTMLAttributes<HTMLInputElement> {
  title?: string;
  type?: string;
  name?: string;
  redlabel?: string;
  handleInputChange?: (name: string, value: string) => void;
  required?: boolean;
  value?: string | number | undefined; // Updated to remove null
  readOnly?: boolean;
  errorMessage?: string;
  max?: number | string;
}

const Ainput: FC<AinputProps> = ({
  title,
  type,
  name,
  handleInputChange,
  required,
  value,
  readOnly,
  redlabel,
  errorMessage,
  onKeyDown,
  disabled,
  max,
}) => {
  
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const year = value.split('-')[0];

    if (type === "date") {
      if (year.length <= 4) {
        handleInputChange?.(name || "", value); // Provide fallback for name
      }
    } else {
      if (max !== undefined) {
        // Ensure max is a number before comparison
        const maxLength = typeof max === "number" ? max : Number(max);
        if (value.length <= maxLength) {
          handleInputChange?.(name || "", value); // Provide fallback for name
        }
      } else {
        handleInputChange?.(name || "", value); // Provide fallback for name
      }
    }
  };

  return (
    <div className="relative w-full">
      <label className="flex capitalize text-base ml-2 font-bold mt-1" htmlFor={name}>
        {title?.toLowerCase()}
        {redlabel && <p className="text-exit text-xs -mt-[3px] ml-2">{redlabel}</p>}
        {errorMessage && <p className="text-exit text-xs ml-2">{errorMessage}</p>}
      </label>

      <input
        type={type}
        name={name}
        onChange={handleChange}
        value={value || ""}
        readOnly={readOnly}
        required={required}
        onKeyDown={onKeyDown}
        disabled={disabled}
        max={max}
        className="border-2 px-2 rounded w-full h-9 bg-slate-200"
      />
    </div>
  );
};

export default Ainput;
