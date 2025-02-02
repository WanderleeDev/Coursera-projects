import { render } from "@testing-library/react";
import App from "@/App";

jest.mock("@/AppRouter", () => {
  return {
    AppRouter: () => <div>Mocked AppRouter</div>,
  };
});

describe("App Component", () => {
  it("should render AppRouter", () => {
    const { getByText } = render(<App />);

    expect(getByText("Mocked AppRouter")).toBeInTheDocument();
  });
});
