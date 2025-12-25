"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema, FormSchema } from "./form.schema";
import { FieldRenderer } from "./FieldRenderer";
import { FieldConfig } from "@/app/forms/form.types";

type Props = {
  formConfig: Record<string, FieldConfig>;
};

export function DynamicForm({ formConfig }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: FormSchema) => {
    console.log("Submit dinámico:", data);
  };

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
