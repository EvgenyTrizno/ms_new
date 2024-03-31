import { Layout } from "../Layout";
import { Input } from "@/shared/ui/Input";
import { FieldValues, RegisterOptions, UseFormRegister } from "react-hook-form";

type Props<T extends FieldValues> = {
  hookFormData?: {
    register: UseFormRegister<T>;
    registerName: string;
    options?: RegisterOptions;
  };
  verify: boolean;
};

export const Email = <T extends FieldValues>({ hookFormData, verify }: Props<T>) => {
  return (
    <Layout
      input={<Input type="text" hookFormData={hookFormData} />}
      verify={verify}
      text="Эл. почта"
    />
  );
};
