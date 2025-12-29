"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldConfig } from "@/shared/ui/forms/form.types";
import { formSchema, FormSchema } from "@/shared/ui/forms/form.schema";
import { FieldRenderer } from "@/shared/ui/forms/components/FieldRenderer";

type Props = {
  formConfig: Record<string, FieldConfig>;
  onSubmit: (data: FormSchema) => void;
};

export function DynamicForm({ formConfig, onSubmit }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormSchema>({
    resolver: zodResolver(formSchema(formConfig)),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {Object.entries(formConfig).map(([name, field]) => (
        <FieldRenderer
          key={name}
          name={name}
          field={field}
          register={register}
          errors={errors}
        />
      ))}

      <button type="submit" className="px-4 py-2 bg-black text-white">
        Submit
      </button>
    </form>
  );
}
