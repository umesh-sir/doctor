import { Input } from "@mui/material";
import React, { ChangeEvent, FC, InputHTMLAttributes } from "react";

interface AinputProps extends InputHTMLAttributes<HTMLInputElement> {
  title: string;
  type: string;
  name: string;
  redlabel: string;
  onInput: (name: string, value: string) => void;
  handleInputChange: (name: string, value: string) => void;
  required?: boolean;
  value: string | number | null;
  readOnly?: string; // Should be readOnly, not readonly
  errorMessage?: string;
  max?:number | string;
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
  onInput,
  onKeyDown,
  disabled,
  max
}) => {

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const year = value.split('-')[0];
    if (type === "date") {
      if (year.length <= 4) {
        handleInputChange(name, value);
      }
    } else {
      if (max !== undefined) {
        if (value.length <= max) {
          handleInputChange(name, value);
        }
      } else {
        handleInputChange(name, value);
      }
    }
  };

  return (
    <div className="relative  w-full">
      <label className="flex capitalize text-base ml-2 font-bold  mt-1" htmlFor={name}>
        {title?.toLowerCase()}{redlabel && <p className="text-exit text-xs -mt-[3px] ml-2 ">{redlabel}</p>}{errorMessage && <p className="text-exit text-xs ml-2 ">{errorMessage}</p>}
      </label>

      <input
        type={type}
        name={name}
        redlabel={redlabel}
        onChange={handleChange}
        value={value || ""}
        readOnly={readOnly}
        required={required}
        onInput={onInput}
        onKeyDown={onKeyDown}
        disabled={disabled}
        max={max}
        className="border-2 px-2 rounded w-full h-9  bg-slate-200"
      ></input>

    </div>
  );
};

export default Ainput;
