import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { emailValidator, passwordValidator } from "./RegexValidator";

describe("Email Regex Validator", (email) => {
  it("email Api valdator", () => {
    render(
      <MemoryRouter>
        <emailValidator />
      </MemoryRouter>
    );

    const emailRegex = /^[^\s@]+@[^\s@]+$/;

    // return emailRegex.test(email);
  });
});

describe("Email Regex Validator", (password) => {
  it("email Api valdator", () => {
    render(
      <MemoryRouter>
        <passwordValidator />
      </MemoryRouter>
    );

    const passwordRegex =
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#@!?$%^&*-]).{8,20}$/;

    // return passwordRegex.test(password);
  });
});

describe("login check", (email) => {
  it("login", () => {
    if (!emailValidator(email)) {
      return <p>No Match</p>;
    } else {
      return <p>Render From Api</p>;
    }
  });
});

describe("", (password) => {
  it("login", () => {
    if (!passwordValidator(password)) {
      return <p>No Match</p>;
    } else {
      return <p>Render From Api</p>;
    }
  });
});
