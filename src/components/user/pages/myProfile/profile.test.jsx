import { render, screen, waitFor, fireEvent } from "@testing-library/react";

import Myprofile from "./Myprofile";

import { getAll } from "../../../../services/user/user.service";
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => jest.fn(),
}));

describe("My Profile", () => {
  it("rendering My Profile component", () => {
    render(<Myprofile />);
    const isUserLoggedin = sessionStorage.getItem("isUserLoggedin")
      ? sessionStorage.getItem("isUserLoggedin")
      : false;
    const isAdmin = sessionStorage.getItem("isAdmin")
      ? sessionStorage.getItem("isAdmin")
      : false;
  });
});

describe("Mocking axios Api Request ", () => {
  const [data, getData] = [];
  const email = sessionStorage.getItem("email");
  it("Mocking axios api My profile Component", async () => {
    await getAll()
      .then((res) => getData(res.data))
      .catch((err) => console.log(err));

    render(<Myprofile />);
  });
  waitFor(() => {
    expect(screen.getByText("/value from the api")).toBeInTheDocument();
    expect(email).toBeInTheDocument();
    expect(filter).toBeInTheDocument();
    const filter = async () => {
      data
        .filter((item) => {
          if (item.email === email) {
            return email;
          }
        })
        .map((mail) => <div key={mail.id}></div>);
    };
  });
});
