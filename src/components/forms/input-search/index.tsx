import { cn } from "@/utils/cn";
import InputText, { type IInputTextProps } from "../input-text";
import Icons from "@/components/commons/icons";

export interface IInputSearchProps extends IInputTextProps {}

export const InputSearch = ({ ...props }: IInputSearchProps) => {
  return (
    <InputText
      type={"search"}
      iconRight={
        <Icons
          name="search"
          className={cn(props.errorMessage && "fill-error")}
        />
      }
      {...props}
    />
  );
};

export default InputSearch;
