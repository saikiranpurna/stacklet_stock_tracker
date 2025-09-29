import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";

const InputField = ({
  name,
  label,
  placeholder,
  type = "text",
  register,
  error,
  validation,
  disabled = false,
  value,
}: FormInputProps) => {
  return (
    <div className="space-y-2">
      <Label htmlFor={name} className="form-label">
        {label}
      </Label>
      <Input
        id={name}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        defaultValue={value}
        aria-invalid={error ? "true" : "false"}
        aria-describedby={error ? `${name}-error` : undefined}
        className={cn(
          "form-input",
          { "opacity-50 cursor-not-allowed": disabled },
          { "border-red-500 focus:border-red-500 focus:ring-red-500": error }
        )}
        {...register(name, validation)}
      />
      {error && (
        <p className="text-red-500 text-sm mt-1" id={`${name}-error`}>
          {error.message}
        </p>
      )}
    </div>
  );
};

export default InputField;
