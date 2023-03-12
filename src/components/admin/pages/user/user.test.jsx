import { render, screen, waitFor } from "@testing-library/react";
import nock from "nock";
import User from "./User";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => jest.fn(),
}));

describe("baseurl", () => {
  it("api baseurl get", () => {
    render(<User />);
    nock("http:localhost/8080").get("/Signup").reply(200, {
      id: 1,
      firstName: "/value from the api",
    });

    waitFor(() => {
      expect(screen.getByText("/value from the api")).toBeInTheDocument();
    });
  });
});
