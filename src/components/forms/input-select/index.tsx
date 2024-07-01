import { cn } from "@/utils/cn";
import {
  useState,
  type ChangeEvent,
  type KeyboardEvent,
  useEffect,
} from "react";
import InputText, { type IInputTextProps } from "../input-text";
import useClickOutside from "@/hooks/useClickOutside";

export interface IInputSelectProps extends Omit<IInputTextProps, "onChange"> {
  classNameOption?: string;
  options: string[];
  emptyMessage?: string;
  onChange?: (value: string) => void;
}

export const InputSelect = ({
  classNameOption,
  options,
  emptyMessage = "No options available",
  value,
  onChange,
  ...props
}: IInputSelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState<string>(value?.toString() || "");

  useEffect(() => {
    setInputValue(value?.toString() || "");
  }, [value]);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setInputValue(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  const handleOptionClick = (option: string) => {
    setInputValue(option);
    setIsOpen(false);
    if (onChange) {
      onChange(option);
    }
  };

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && options.includes(inputValue)) {
      if (onChange) {
        onChange(inputValue);
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
        <ul
          className={cn(
            "absolute z-fixed left-0 mt-2 w-full p-1.5 h-auto max-h-96 overflow-y-auto rounded bg-white shadow-lg border border-dark/10",
            classNameOption
          )}
        >
          {options.length > 0 ? (
            options.map((option, index) => (
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
            ))
          ) : (
            <li className="px-4 py-2 text-sm text-center text-dark">
              {emptyMessage}
            </li>
          )}
        </ul>
      )}
    </div>
  );
};

export default InputSelect;
