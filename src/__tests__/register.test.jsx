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
        const button = screen.getByRole("button")

        expect(fName).toBeInTheDocument();
        expect(lName).toBeInTheDocument();
        expect(eMail).toBeInTheDocument();
        expect(password).toBeInTheDocument();
        expect(button).toBeDisabled();

        fireEvent.change(fName , {target : {value : "Muhammed"}})
        fireEvent.change(lName , { target : { value : "Hamza N" }})
        fireEvent.change(eMail , {target : {value : "tester123@gmail.com"}})
        fireEvent.change(password , {target : { value : "Tester@123" }})

    });
    
});
