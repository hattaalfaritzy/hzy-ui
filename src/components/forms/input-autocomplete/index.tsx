import { cn } from "@/utils/cn";
import {
  useState,
  type ChangeEvent,
  type KeyboardEvent,
  useEffect,
} from "react";
import InputText, { type IInputTextProps } from "../input-text";
import useClickOutside from "@/hooks/useClickOutside";
import { Icons } from "@/components/commons";

export interface IInputAutocompleteProps
  extends Omit<IInputTextProps, "onChange"> {
  classNameOption?: string;
  options: string[];
  onChange?: (value: string) => void;
  emptyMessage?: string;
}

export const InputAutocomplete = ({
  classNameOption,
  options,
  emptyMessage = "No options available",
  value,
  onChange,
  ...props
}: IInputAutocompleteProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState<string>(value?.toString() || "");
  const [filteredOptions, setFilteredOptions] = useState<string[]>([]);

  useEffect(() => {
    setInputValue(value?.toString() || "");
  }, [value, options]);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);

    if (onChange) {
      onChange(value);
    }

    const newFilteredOptions = options.filter((option) =>
      option.toLowerCase().includes(value.toLowerCase())
    );

    setFilteredOptions(newFilteredOptions);
    setIsOpen(true);
  };

  const handleOptionClick = (option: string) => {
    setInputValue(option);
    setFilteredOptions([option]);
    setIsOpen(false);
    if (onChange) {
      onChange(option);
    }
  };

  const handleInputFocus = () => {
    setIsOpen(true);
  };

  const handleInputBlur = () => {
    if (!isOpen) {
      setIsOpen(false);
    }
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && filteredOptions.length > 0) {
      const option = filteredOptions[0];
      if (option !== undefined) {
        handleOptionClick(option);
      }
    }
  };

  const handleInputClick = () => {
    if (inputValue.trim() !== "") {
      const newFilteredOptions = options.filter((option) =>
        option.toLowerCase().includes(inputValue.toLowerCase())
      );

      setFilteredOptions(newFilteredOptions);
      setIsOpen(true);
    } else {
      setFilteredOptions(options);
    }
  };

  const ref = useClickOutside(() => setIsOpen(false));

  return (
    <div ref={ref} className={cn("relative w-full")}>
      <InputText
        {...props}
        value={inputValue}
        onChange={handleInputChange}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        onKeyDown={handleKeyDown}
        onClick={handleInputClick}
        iconRight={
          <Icons
            name="caret-down"
            className={cn(
              "fill-[#C4C4C4] cursor-pointer",
              isOpen && "transform rotate-180",
              props.errorMessage && "fill-error"
            )}
          />
        }
      />
      {isOpen && (
        <ul
          className={cn(
            "absolute z-fixed left-0 mt-2 w-full p-1.5 h-auto max-h-96 overflow-y-auto rounded bg-white shadow-lg border border-dark/10",
            classNameOption
          )}
        >
          {filteredOptions.length > 0 ? (
            filteredOptions.map((option, index) => (
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

export default InputAutocomplete;
