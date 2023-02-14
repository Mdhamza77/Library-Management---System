import { render , screen , fireEvent } from "@testing-library/react"; 
import Register from '../Components/MainComponents/Register' ;

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => (jest.fn())
  }));
  

describe('register user component', () => {
    it('registeration', () => {
        render(<Register/>) 

        const fName = screen.getByLabelText("First Name");
        const lName = screen.getByLabelText("Last Name");
        const eMail = screen.getByLabelText("Email");
        const password = screen.getByLabelText("Password");

        expect(fName).toBeInTheDocument();
        expect(lName).toBeInTheDocument();
        expect(eMail).toBeInTheDocument();
        expect(password).toBeInTheDocument();

    });
    
});
