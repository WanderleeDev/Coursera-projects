/**
import ContactForm from "@/components/custom/Form/ContactForm";
import { screen, render, fireEvent } from "@testing-library/react";

describe("Contact form", () => {
  test("The user can submit the form as long as the fields are complete, otherwise the submit button will be disabled", () => {
    const firstName = "Wanderlee";
    const email = "xamperu@gmail.com";
    const enquiry = "Develop a project together";
    const message =
      "Let's work on the creation of an ecommerce, estimated duration 3 months";
    const handleSubmit = jest.fn();

    render(<ContactForm onSubmit={handleSubmit} />);

    const inputName = screen.getByLabelText("/First name/");
    fireEvent.change(inputName, { target: { value: firstName } });
    const inputEmail = screen.getByLabelText("/Email address/");
    fireEvent.change(inputEmail, { target: { value: email } });
    const enquirySelect = screen.getByLabelText("/Type of enquiry/");
    fireEvent.change(enquirySelect, { target: { value: enquiry } });
    const textAreaMessage = screen.getByLabelText("/Message/");
    fireEvent.change(textAreaMessage, { target: { value: message } });
    const submitBtn = screen.getByRole("button");
    fireEvent.click(submitBtn);
  });
});
 */
