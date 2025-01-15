import Required from "@/components/icons/Required";
import { FormController } from "@/interfaces/FormController.interface";
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
} from "@chakra-ui/form-control";
import { NativeSelectRoot, NativeSelectField } from "@chakra-ui/react";
import { Controller } from "react-hook-form";

interface Props extends FormController {
  options: string[];
  label: string;
}

export default function SelectForm({ options, label, ...rest }: Props) {
  return (
    <Controller
      name={rest.name}
      control={rest.control}
      render={({ field }) => (
        <FormControl isInvalid={!!rest.errors[rest.name]}>
          <FormLabel>
            {label} <Required />
          </FormLabel>

          <NativeSelectRoot variant="subtle" {...field}>
            <NativeSelectField placeholder="-- select an option --">
              {options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </NativeSelectField>
          </NativeSelectRoot>

          {rest.errors[rest.name] && (
            <FormErrorMessage fontSize={"small"} color="#f9afaf">
              {`${rest.errors[rest.name]?.message}`}
            </FormErrorMessage>
          )}
        </FormControl>
      )}
    />
  );
}
