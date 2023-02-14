import { render, screen, fireEvent } from "@testing-library/react";

import Login from "../Components/MainComponents/Login";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => jest.fn(),
}));

describe("login component", () => {
  it("Enables Button when both input field is not empty", () => {
    render(<Login />);

    const email = screen.getByLabelText("Email");
    const password = screen.getByLabelText("Password");
    const button = screen.getByRole("button");
    expect(email).toBeInTheDocument();
    expect(password).toBeInTheDocument();
    expect(button).toBeDisabled();

    fireEvent.change(email, { target: { value: "usertest123@gmail.com" } });
    fireEvent.change(password, { target: { value: "User@123" } });
    expect(button).toBeEnabled();
  });

  it("Submit form is disabled ", () => {
    const onSubmit = jest.fn();
    render(<Login onSubmit={onSubmit} />);
    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(onSubmit).toHaveBeenCalledTimes(0);
  });

  it("Submit form button is Enabled", () => {
    const onSubmit = jest.fn(); // creating a “mock” functio
    render(<Login onSubmit={onSubmit} />);
    const email = screen.getByLabelText("Email");
    const password = screen.getByLabelText("Password");
    const button = screen.getByRole("button");
    expect(email).toBeInTheDocument();
    expect(password).toBeInTheDocument();
    expect(button).toBeDisabled();

    fireEvent.change(email, { target: { value: "usertest123@gmail.com" } });
    fireEvent.change(password, { target: { value: "User@123" } });
    expect(button).toBeEnabled();
  });
});
