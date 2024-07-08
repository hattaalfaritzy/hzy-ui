import { cn } from "@/utils/cn";
import { Message } from "@/components/commons";
import { InputHTMLAttributes, useState } from "react";

export interface IInputSwitchProps
  extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  classNameWrapper?: string;
  classNameLabel?: string;
  label?: string;
  important?: boolean;
  errorMessage?: string;
  onColor?: string;
  disabled?: boolean;
}

export const InputSwitch = ({
  className,
  classNameLabel,
  classNameWrapper,
  label,
  important = false,
  errorMessage,
  onColor = "bg-dark",
  checked,
  onChange,
  disabled,
  ...props
}: IInputSwitchProps) => {
  const [isChecked, setIsChecked] = useState(checked || false);

  const handleToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
    if (onChange) {
      onChange(e);
    }
  };

  return (
    <div className={cn("flex flex-col w-full", classNameWrapper)}>
      {label && (
        <div
          className={
            (cn("block font-semibold text-sm text-dark pb-1.5"), classNameLabel)
          }
        >
          {label}
          {important && (
            <span className={cn("after:content-['*'] text-error")} />
          )}
        </div>
      )}
      <div className="flex flex-col items-start bg-red-200">
        <label className="flex items-center cursor-pointer">
          <div
            className={cn("w-14 h-8 flex items-center rounded-full p-1", {
              "bg-gray-300": !isChecked,
              [onColor]: isChecked,
            })}
          >
            <div
              className={cn(
                "bg-white w-6 h-6 rounded-full shadow-md transform transition-transform",
                {
                  "translate-x-6": isChecked,
                  "translate-x-0": !isChecked,
                },
                className
              )}
            />
          </div>
          <input
            type="checkbox"
            className="hidden"
            checked={isChecked}
            onChange={handleToggle}
            disabled={disabled}
            {...props}
          />
        </label>
        {errorMessage && <Message className="mt-2" label={errorMessage} />}
      </div>
    </div>
  );
};

export default InputSwitch;
