import { Tooltip } from "@/components/ui/tooltip";
import { Button } from "../../ui/button";
import { SubmitHandler, useForm } from "react-hook-form";
import { contactSchema, ContactType } from "@/schemas/Contact.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import FieldForm from "./FieldForm";
import { Flex } from "@chakra-ui/react";
import SelectForm from "./SelectForm";
import TextareaForm from "./TextareaForm";
import { handlerError } from "@/utils/handlerError";
import { sendEmail } from "@/lib/emailJs";
import { useRef } from "react";

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors, isValid, isSubmitting },
  } = useForm<ContactType>({
    resolver: zodResolver(contactSchema),
    mode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });
  const tooltipMessage = !isValid
    ? "Fill the form"
    : isSubmitting
    ? "..."
    : "Submit form";

  const onSubmit: SubmitHandler<ContactType> = async (values: ContactType) => {
    const parseValues = contactSchema.safeParse(values);

    if (!parseValues.success) {
      return handlerError(parseValues.error);
    }

    await sendEmail(formRef.current!);
    reset();
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit(onSubmit)} noValidate>
      <Flex direction={"column"} gap="4">
        <FieldForm
          type="text"
          label="First name"
          control={control}
          errors={errors}
          name="name"
        />
        <FieldForm
          type="email"
          label="Email address"
          control={control}
          errors={errors}
          name="email"
        />
        <SelectForm
          options={["React", "Vue", "Angular", "Svelte"]}
          label="Type of enquiry"
          control={control}
          errors={errors}
          name="subject"
        />
        <TextareaForm
          control={control}
          errors={errors}
          label="Message"
          name="message"
          placeholder="Max 500 characters"
        />

        <Tooltip content={tooltipMessage}>
          <Button type="submit" disabled={!isValid || isSubmitting}>
            {isSubmitting ? "...Submitting" : "Submit"}
          </Button>
        </Tooltip>
      </Flex>
    </form>
  );
}
