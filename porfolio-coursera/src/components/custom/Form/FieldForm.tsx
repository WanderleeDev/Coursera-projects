import Required from "@/components/icons/Required";
import { FormController } from "@/interfaces/FormController.interface";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
} from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/react";
import { Controller } from "react-hook-form";

export default function FieldForm({
  label,
  control,
  errors,
  name,
  type = "text",
  placeholder,
}: FormController) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <FormControl isInvalid={!!errors[name]}>
          <FormLabel>
            {label} <Required />
          </FormLabel>
          <Input
            variant="flushed"
            {...field}
            type={type}
            placeholder={placeholder}
          />
          {errors[name] && (
            <FormErrorMessage fontSize={"small"} color="#f9afaf">
              {`${errors[name]?.message}`}
            </FormErrorMessage>
          )}
        </FormControl>
      )}
    />
  );
}
