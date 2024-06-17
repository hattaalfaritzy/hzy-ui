import * as react_jsx_runtime from 'react/jsx-runtime';
import { ButtonHTMLAttributes, ReactNode } from 'react';

type TypeVariant = "primary" | "light" | "error" | "transparent";
type TypeAligns = "start" | "center" | "end";
type TypeSizes = "sm" | "md";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
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
declare const Button: ({ onClick, disabled, loading, size, label, variant, align, outline, iconLeft, iconRight, className, classNameLabel, rounded, ...props }: IButtonProps) => react_jsx_runtime.JSX.Element;

export { Button };
