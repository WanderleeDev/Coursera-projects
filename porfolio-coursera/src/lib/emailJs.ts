import emailjs from "@emailjs/browser";
import { toaster } from "@/components/ui/toaster";
import { getEnv } from "@/utils/getEnv";
import { handlerError } from "@/utils/handlerError";

export async function sendEmail(form: HTMLFormElement) {
  try {
    const response = await emailjs.sendForm(
      getEnv("VITE_EMAIL_JS_SERVICE_ID"),
      getEnv("VITE_EMAIL_JS_TEMPLATE_ID"),
      form,
      { publicKey: getEnv("VITE_EMAIL_JS_KEY") }
    );

    if (response.status !== 200) {
      throw new Error("Email send failed");
    }

    toaster.success({
      title: "Success",
      description: "Email send successfully!",
    });
  } catch (error) {
    handlerError(error);
  }
}
