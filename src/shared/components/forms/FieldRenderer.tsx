import { UseFormRegister, FieldErrors } from "react-hook-form";
import { FormSchema } from "./form.schema";
import { FieldConfig } from "./form.types";
import { TextInput } from "./inputs/TextInput";
import { SelectInput } from "@/shared/components/forms/inputs/SelectInput";
import { CheckboxInput } from "@/shared/components/forms/inputs/CheckboxInput";

type Props = {
  name: string;
  field: FieldConfig;
  register: UseFormRegister<FormSchema>;
  errors: FieldErrors<FormSchema>;
};

export function FieldRenderer({ name, field, register, errors }: Props) {
  switch (field.type) {
    case "text":
    case "email":
      return (
        <TextInput
          label={field.label}
          type={field.type}
          placeholder={field.placeholder}
          {...register(name as keyof FormSchema)}
          error={errors[name]?.message as string | undefined}
        />
      );

    case "select":
      return (
        <SelectInput
          label={field.label}
          options={field.options}
          {...register(name)}
          error={errors[name]?.message as string}
        />
      );

    case "checkbox":
      return (
        <CheckboxInput
          label={field.label}
          {...register(name)}
          error={errors[name]?.message as string}
        />
      );

    default:
      return null;
  }
}
