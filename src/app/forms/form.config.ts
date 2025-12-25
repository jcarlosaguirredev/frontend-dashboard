import { FieldConfig } from "./form.types";

export const formConfig: Record<string, FieldConfig> = {
  email: {
    type: "email",
    label: "Email",
    placeholder: "Ingresa tu email",
  },
  name: {
    type: "text",
    label: "Name",
    placeholder: "Ingresa tu nombre",
  },
  lastName: {
    type: "text",
    label: "Last Name",
    placeholder: "Ingresa tu apellido",
  },
  role: {
    type: "select",
    label: "Rol",
    options: [
      { label: "Admin", value: "admin" },
      { label: "User", value: "user" },
    ],
  },
  terms: {
    type: "checkbox",
    label: "Aceptar términos",
  },
};
