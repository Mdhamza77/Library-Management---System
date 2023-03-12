import { render , screen , fireEvent } from "@testing-library/react";
import { MemoryRouter, useNavigate } from "react-router-dom";
import Navigation from './Navigation'
import {Link} from 'react-router-dom'


jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useNavigate: () => jest.fn(),
  }));

it('render the component', () => {
    
  render(
    <MemoryRouter>
      <Navigation/>
    </MemoryRouter>
  );

    const isUserLoggedin = sessionStorage.getItem("isUserLoggedin") ? sessionStorage.getItem("isUserLoggedin") : false ;
    const isAdmin = sessionStorage.getItem("isAdmin") ? sessionStorage.getItem("isAdmin") : false ;

    const home = () => {
      navigate("/")
    }

    const logout = () => {
      toast("Logging out");
      sessionStorage.clear();
      navigate("/login");
      window.location.reload(true);
    };
    
    const navigate = useNavigate();
    const button = screen.getAllByRole("button")
    
       

});

it('Component renderiing links', () => {
  render(
    <MemoryRouter>
      <Navigation />
    </MemoryRouter>
  );

const button = screen.getByRole("button") 

expect(button).toBeInTheDocument();
});

