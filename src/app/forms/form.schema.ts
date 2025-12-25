import { formConfig } from "@/app/forms/form.config";
import { z } from "zod";

export const formSchema = z.object(
  Object.fromEntries(
    Object.entries(formConfig).map(([key, field]) => {
      switch (field.type) {
        case "email":
          return [key, z.email({ message: "Invalid email address" })];

        case "text":
          return [key, z.string().min(1, { message: "Field is required" })];

        case "select":
          return [key, z.string().min(1, "Selecciona una opción")];

        case "checkbox":
          return [
            key,
            field.required
              ? z.boolean().refine((v) => v === true, {
                  message: "Debes aceptar",
                })
              : z.boolean().optional(),
          ];

        default:
          return [key, z.any()];
      }
    })
  )
);

export type FormSchema = z.infer<typeof formSchema>;
