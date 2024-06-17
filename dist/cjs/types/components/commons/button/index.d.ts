import type { ButtonHTMLAttributes, ReactNode } from "react";
import type { TypeAligns, TypeSizes, TypeVariant } from "./button-styles";
export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    classNameLabel?: string;
    outline?: boolean;
    label?: string;
    iconLeft?: ReactNode;
    iconRight?: ReactNode;
    onClick?: () => void;
    disabled?: boolean;
    loading?: boolean;
    variant?: TypeVariant;
    align?: TypeAligns;
    size?: TypeSizes;
    rounded?: boolean;
}
export declare const Button: ({ onClick, disabled, loading, size, label, variant, align, outline, iconLeft, iconRight, className, classNameLabel, rounded, ...props }: IButtonProps) => import("react/jsx-runtime").JSX.Element;
export default Button;
