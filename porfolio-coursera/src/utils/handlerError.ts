import { EmailJSResponseStatus } from "@emailjs/browser/es/models/EmailJSResponseStatus";
import { ZodError } from "zod";
import { toaster } from "@/components/ui/toaster";

export function handlerError(e: unknown) {
  let message = "Unknown error, try again later.";

  if (e instanceof ZodError) {
    message = e.errors[0].message;
  }

  if (e instanceof EmailJSResponseStatus) {
    message = e.text;
  }

  if (e instanceof Error) {
    message = e.message;
  }

  toaster.error({
    title: "Error",
    description: message,
  });
}
