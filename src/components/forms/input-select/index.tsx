import { cn } from "@/utils/cn";
import { useState, type ChangeEvent, type KeyboardEvent } from "react";
import InputText, { type IInputTextProps } from "../input-text";
import useClickOutside from "@/hooks/useClickOutside";

export interface IInputSelectProps extends IInputTextProps {
  options: string[];
  onOptionSelect?: (value: string) => void;
}

export const InputSelect = ({
  options,
  onOptionSelect,
  ...props
}: IInputSelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);
  };

  const handleOptionClick = (option: string) => {
    setInputValue(option);
    setIsOpen(false);
    if (onOptionSelect) {
      onOptionSelect(option);
    }
  };

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && options.includes(inputValue)) {
      if (onOptionSelect) {
        onOptionSelect(inputValue);
      }
    }
  };

  const ref = useClickOutside(() => setIsOpen(false));

  return (
    <div ref={ref} className={cn("relative w-full")}>
      <InputText
        {...props}
        value={inputValue}
        onChange={handleInputChange}
        onFocus={toggleDropdown}
        onKeyDown={handleKeyDown}
        readOnly
      />
      {isOpen && (
        <ul className="absolute z-fixed left-0 mt-2 w-full p-1.5 rounded bg-white shadow-lg border border-dark/10">
          {options.map((option, index) => (
            <li
              key={index}
              className={cn(
                "px-4 py-2 cursor-pointer hover:bg-light-300 rounded",
                inputValue === option && "bg-dark/95 hover:bg-dark"
              )}
              onClick={() => handleOptionClick(option)}
            >
              <span
                className={cn(
                  "text-sm",
                  inputValue === option ? "text-light" : "text-dark"
                )}
              >
                {option}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default InputSelect;
