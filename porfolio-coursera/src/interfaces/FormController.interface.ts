/* eslint-disable @typescript-eslint/no-explicit-any */
import { Control, FieldErrors, FieldValues } from "react-hook-form";

export interface FormController {
  control: Control<any>;
  errors: FieldErrors;
  name: keyof FieldValues;
  label: string;
  type?: string;
  placeholder?: string;
}
