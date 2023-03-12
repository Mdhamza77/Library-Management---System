import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Item } from "semantic-ui-react";
import Home from "./Home";

describe("rendering Home test ", () => {
  it("home components test", () => {
    render(<MemoryRouter><Home/>

    </MemoryRouter>);
  });
});
