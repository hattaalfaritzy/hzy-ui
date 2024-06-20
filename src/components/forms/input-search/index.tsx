import { cn } from "@/utils/cn";
import InputText, { type IInputTextProps } from "../input-text";
import Icons from "@/components/commons/icons";

export const InputSearch = ({ ...props }: IInputTextProps) => {
  return (
    <InputText
      type={"search"}
      iconRight={
        <Icons name="search" className={cn(props.error && "fill-error")} />
      }
      {...props}
    />
  );
};

export default InputSearch;
