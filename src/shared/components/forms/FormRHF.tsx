"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldRenderer } from "./FieldRenderer";
import { FieldConfig } from "@/shared/components/forms/form.types";
import { useUserStore } from "@/domains/users/user.store";
import { UserStore } from "@/domains/users/user.store";
import { formSchema, FormSchema } from "@/shared/components/forms/form.schema";
import { User } from "@/domains/users/user.type";

type Props = {
  formConfig: Record<string, FieldConfig>;
};

export function DynamicForm({ formConfig }: Props) {
  const setUser = useUserStore((state: UserStore) => state.setUser);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: FormSchema) => {
    console.log("FormRHF -> Submit dinámico:", data);
    setUser(data as User);
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
