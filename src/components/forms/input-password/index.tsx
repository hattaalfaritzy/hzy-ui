import { useState } from "react";
import InputText, { type ITextFieldProps } from "../input-text";
import Icons from "@/components/commons/icons";
import { cn } from "@/utils/cn";

export const InputPassword = ({ ...props }: ITextFieldProps) => {
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
            className={cn(props.error && "fill-error")}
          />
        ) : (
          <Icons
            name="eye-slash"
            onClick={() => {
              setShowPassword(!showPassword);
            }}
            className={cn(props.error && "fill-error")}
          />
        )
      }
      {...props}
    />
  );
};

export default InputPassword;
