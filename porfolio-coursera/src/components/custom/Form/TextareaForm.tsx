import Required from "@/components/icons/Required";
import { FormController } from "@/interfaces/FormController.interface";
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
} from "@chakra-ui/form-control";
import { Textarea } from "@chakra-ui/react";
import { Controller } from "react-hook-form";

export default function TextareaForm({
  control,
  errors,
  label,
  name,
  placeholder,
}: FormController) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <FormControl isInvalid={!!errors?.[name]}>
          <FormLabel>
            {label} <Required />
          </FormLabel>
          <Textarea
            {...field}
            variant={"flushed"}
            placeholder={placeholder}
            resize="none"
          />
          {errors?.[name] && (
            <FormErrorMessage fontSize={"small"} color="#f9afaf">
              {`${errors?.[name]?.message}`}
            </FormErrorMessage>
          )}
        </FormControl>
      )}
    />
  );
}
