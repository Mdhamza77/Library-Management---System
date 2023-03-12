import { render , screen } from "@testing-library/react";
import Admin from './Admin'


jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useNavigate: () => jest.fn(),
  }));
  
describe('Admin Functional ', () => {
      it('admin rendering components', () => {
            render(<Admin/>)
      });
      
});
