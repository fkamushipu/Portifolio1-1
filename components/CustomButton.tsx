"use client";
import { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "success" | "danger";

type CustomButtonProps = {
  text: string;
  icon?: ReactNode;
  variant?: ButtonVariant;
  onClick?: () => void;
};

const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-[#FF6A3D] text-white",   // your orange
  secondary: "bg-gray-700 text-white",
  success: "bg-gray-100 text-[#FF6A3D]",
  // success: "bg-green-500 text-white",
  danger: "bg-red-500 text-white",
};

export default function CustomButton({
  text,
  icon,
  variant = "primary",
  onClick,
}: CustomButtonProps) {
  return (
    <div className="flex justify-center items-center pt-12 text-xs">
      <button
        type="button"
        onClick={onClick}
        className={`${variantStyles[variant]} py-2 px-6 rounded-full text-md uppercase flex items-center justify-center gap-2 shadow-md hover:scale-105 transition`}
      >
        {icon}
        {text}
      </button>
    </div>
  );
}
