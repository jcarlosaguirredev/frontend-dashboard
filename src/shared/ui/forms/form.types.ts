export type FieldType = "text" | "email" | "select" | "checkbox";

export interface BaseFieldConfig {
  label: string;
  required?: boolean;
}

export interface TextFieldConfig extends BaseFieldConfig {
  type: "text" | "email";
  placeholder?: string;
}

export interface SelectFieldConfig extends BaseFieldConfig {
  type: "select";
  options: { label: string; value: string }[];
}

export interface CheckboxFieldConfig extends BaseFieldConfig {
  type: "checkbox";
}

export type FieldConfig =
  | TextFieldConfig
  | SelectFieldConfig
  | CheckboxFieldConfig;

export type FormConfig = Record<string, FieldConfig>;
