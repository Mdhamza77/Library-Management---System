import { render  } from "@testing-library/react";
import Home from "./home";

jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useNavigate: () => jest.fn(),
  }));
  

describe('user Components', () => {
     it('rendering user home Functionality', () => {
         render(<Home/>)
     });
     
});
