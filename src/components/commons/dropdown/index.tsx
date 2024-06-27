import { cn } from "@/utils/cn";
import { useEffect, useState } from "react";
import type { ButtonHTMLAttributes } from "react";
import Icons from "../icons";

interface Option {
  label: string;
  value: string;
}

export interface IDropdownProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onSelect"> {
  className?: string;
  classNameWrapper?: string;
  classNameLabel?: string;
  label?: string;
  important?: boolean;
  placeholder?: string;
  options: Option[];
  initialSelected?: Option | null;
  onSelect: (option: Option) => void;
}

export const Dropdown = ({
  className,
  classNameWrapper,
  classNameLabel,
  label,
  important = false,
  placeholder = "Select an option",
  options,
  initialSelected = null,
  onSelect,
  ...props
}: IDropdownProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<Option | null>(
    initialSelected
  );

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectOption = (option: Option) => {
    setSelectedOption(option);
    setIsOpen(false);
    onSelect(option);
  };

  return (
    <div className={cn("relative", classNameWrapper)}>
      {label && (
        <div
          className={cn(
            classNameLabel || "block font-semibold text-sm text-dark pb-1.5",
            important && "after:content-['*'] text-error"
          )}
        >
          {label}
        </div>
      )}
      <button
        type="button"
        className={cn(
          "flex items-center justify-between w-full px-4 py-2 bg-white border border-light rounded focus:border-dark",
          className
        )}
        onClick={toggleDropdown}
        {...props}
      >
        <span
          className={cn(
            "text-sm font-medium",
            selectedOption ? "text-dark" : "text-light"
          )}
        >
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <Icons
          name="caret-down"
          className={cn(
            "fill-black cursor-pointer",
            isOpen && "transform rotate-180"
          )}
        />
      </button>

      {isOpen && (
        <div className="absolute left-0 mt-2 w-full p-1.5 rounded bg-white shadow-lg border border-dark/10">
          {options.map((option) => (
            <div
              key={option.value}
              className={cn(
                "px-4 py-2 cursor-pointer hover:bg-light-300",
                selectedOption === option && "bg-dark/95 hover:bg-dark",
                "rounded"
              )}
              onClick={() => handleSelectOption(option)}
            >
              <span
                className={cn(
                  "text-sm",
                  selectedOption === option ? "text-light" : "text-dark"
                )}
              >
                {option.label}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
