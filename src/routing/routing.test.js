import render from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom';
import Routing from './Routing' 
import * as Router from "react-router-dom";

jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useNavigate: () => jest.fn(),
  }));
  
  test('react-routing components', () => {
      render(
        <MemoryRouter>
            <Routing/>
        </MemoryRouter>
      )

      const isUserLoggedin = sessionStorage.getItem("isUserLoggedin")
      ? sessionStorage.getItem("isUserLoggedin")
      : false;
    const isAdmin = sessionStorage.getItem("isAdmin")
      ? sessionStorage.getItem("isAdmin")
      : false;
        
  });
  