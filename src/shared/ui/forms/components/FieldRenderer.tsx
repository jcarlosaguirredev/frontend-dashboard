import { TextInput } from "@/shared/ui/forms/components/inputs/TextInput";
import { SelectInput } from "@/shared/ui/forms/components/inputs/SelectInput";
import { CheckboxInput } from "@/shared/ui/forms/components/inputs/CheckboxInput";
import { FormSchema } from "@/shared/ui/forms/form.schema";
import { FieldConfig } from "@/shared/ui/forms/form.types";
import { UseFormRegister, FieldErrors } from "react-hook-form";

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
