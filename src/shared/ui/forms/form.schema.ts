import { userRegisterFormConfig } from "@/domains/users/configs/forms/user-register.config";
import { z } from "zod";

export const formSchema = z.object(
  Object.fromEntries(
    Object.entries(userRegisterFormConfig).map(([key, field]) => {
      switch (field.type) {
        case "email":
          return [key, z.email({ message: "Invalid email address" })];

        case "text":
          return [
            key,
            field.required
              ? z.string().min(1, { message: "Field is required" })
              : z.string().optional(),
          ];

        case "select":
          return [
            key,
            field.required
              ? z.string().min(1, "Selecciona una opción")
              : z.string().optional(),
          ];

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
