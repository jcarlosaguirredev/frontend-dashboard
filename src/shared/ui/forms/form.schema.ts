import { FormConfig } from "@/shared/ui/forms/form.types";
import { z } from "zod";
import { FormSchema } from "../../components/forms/form.schema";

export const formSchema = (config: FormConfig) => {
  const shape = {} as Record<string, z.ZodTypeAny>;

  for (const [key, field] of Object.entries(config)) {
    switch (field.type) {
      case "email":
        shape[key] = z.email({
          message: "Invalid email address",
        });
        break;

      case "text":
        shape[key] = field.required
          ? z.string().min(1, { message: "Field is required" })
          : z.string().optional();
        break;

      case "select":
        shape[key] = field.required
          ? z.string().min(1, "Selecciona una opción")
          : z.string().optional();
        break;

      case "checkbox":
        shape[key] = field.required
          ? z.boolean().refine((v) => v === true, {
              message: "Debes aceptar",
            })
          : z.boolean().optional();
        break;

      default:
        shape[key] = z.any();
    }
  }

  return z.object(shape);
};

export type FormSchema = z.infer<ReturnType<typeof formSchema>>;
