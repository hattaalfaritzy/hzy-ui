import { cn } from "@/utils/cn";
import { useState } from "react";
import InputText, { type IInputTextProps } from "../input-text";
import Icons from "@/components/commons/icons";

export interface IInputPasswordProps extends IInputTextProps {}

export const InputPassword = ({ ...props }: IInputPasswordProps) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <InputText
      type={showPassword ? "text" : "password"}
      iconRight={
        showPassword ? (
          <Icons
            name="eye"
            onClick={() => {
              setShowPassword(!showPassword);
            }}
            className={cn(props.errorMessage && "fill-error")}
          />
        ) : (
          <Icons
            name="eye-slash"
            onClick={() => {
              setShowPassword(!showPassword);
            }}
            className={cn(props.errorMessage && "fill-error")}
          />
        )
      }
      {...props}
    />
  );
};

export default InputPassword;
