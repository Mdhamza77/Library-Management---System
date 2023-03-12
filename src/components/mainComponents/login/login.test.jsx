import { render, screen, fireEvent } from "@testing-library/react";
import Login from "./Login"; 
import { userValidate } from "../../../services/user/user.service";
import * as Router from 'react-router-dom' ;
import axios from 'axios' ;
import MockAdapter from "axios-mock-adapter";
import { act } from "react-test-renderer";
const user = [
  {
    "id": 1,
    "firstName": "Muhammed",
    "lastName": "Hamza N",
    "email": "hamza123@gmail.com",
    "type": "Admin",
    "password": "Hamza@123",
    "content": "During my freshman year of high school, I started a business designing and making custom prom dresses. It started with just four or five girls, but by the time I was a senior, everyone wanted to wear one of my gowns. I had two other girls helping me with the sewing, but I did the design work myself. I've known for a long time that I wanted to go into fashion design, but I also know there's a lot I still want to learn about the artistic and business sides of the field. That's why I really want to attend the Fashion Institute of Technology.",
    "img": "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-1659521003.jpg?crop=0.668xw:1.00xh;0.167xw,0&resize=640:*"
  },
  {
    "firstName": "Muhaimin",
    "lastName": "Jamal E.N",
    "img": "https://c4.wallpaperflare.com/wallpaper/379/128/837/cillian-murphy-dark-haired-actor-face-wallpaper-preview.jpg",
    "content": "I've always loved the Victorian period in English literature. Even as a kid, Dickens captured my imagination more thoroughly than the Harry Potter stories or anything else. As an undergraduate at Northwestern University, I studied English with a concentration on Victorian fiction. Now, I hope to continue exploring this fundamentally important literary period as a graduate student.",
    "email": "muhaimin123@gmail.com",
    "password": "Muhaimin@123",
    "id": 2
  },
  {
    "firstName": "Mohmmed",
    "lastName": "Shafaaz",
    "img": "https://c4.wallpaperflare.com/wallpaper/284/792/35/men-christian-bale-actors-2592x3714-people-actors-hd-art-wallpaper-preview.jpg",
    "content": "Shafaaz is an English actor. Known for his versatility and physical transformations for his roles, he has been a leading man in films of several genres. He has received various accolades, including an Academy Award and two Golden Globe Awards",
    "email": "shafaaz123@gmail.com",
    "password": "Shafaaz@123",
    "id": 3
  },
  {
    "firstName": "Ana de",
    "lastName": "Armas",
    "img": "https://wallpaperaccess.com/full/1907859.jpg",
    "content": "I am graduated at oxford university for My bachelor degree in Architectural survey and librarian modules and thus along side my interest is to Read and learn more books.",
    "email": "armas07@gmail.com",
    "password": "Armas@07",
    "id": 4
  },
  {
    "firstName": "Alexander",
    "lastName": "Daddario",
    "email": "alexa007@gmail.com",
    "password": "Alexa@007",
    "img": "https://static.toiimg.com/thumb/msid-65146267,imgsize-151589,width-800,height-600,resizemode-75/65146267.jpg",
    "id": 5
  }
]
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => jest.fn(), 
  useParams : () => ({ id: 2})
}));



describe("login component", () => {
  it("Enables Button when both input field is not empty", () => {
    render(<Login />);
          
    
    const email = screen.getByLabelText("Email");
    const password = screen.getByLabelText("Password");
    const button = screen.getByRole("button"); 
    
    expect(email).toBeInTheDocument();
    expect(password).toBeInTheDocument();
    expect(button).toBeDisabled();

    fireEvent.change(email, { target: { value: "usertest123@gmail.com" } });
    fireEvent.change(password, { target: { value: "User@123" } });

    expect(button).toBeEnabled();
  });

  it("Submit form is disabled ", () => {
    const onSubmit = jest.fn();
    render(<Login onSubmit={onSubmit} />);
    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(onSubmit).toHaveBeenCalledTimes(0);
  });

  it("Submit form button is Enabled", () => {
    const onSubmit = jest.fn(); // creating a “mock” function  
    render(<Login onSubmit={onSubmit} />);
    const email = screen.getByLabelText("Email");
    const password = screen.getByLabelText("Password");
    const button = screen.getByRole("button");
    expect(email).toBeInTheDocument();
    expect(password).toBeInTheDocument();
    expect(button).toBeDisabled();

    fireEvent.change(email, { target: { value: "usertest123@gmail.com" } });
    fireEvent.change(password, { target: { value: "User@123" } });
    expect(button).toBeEnabled();
    expect(onSubmit).toHaveBeenCalledTimes(0)
  });
});


test('api check',async () => {
  jest.spyOn(Router, "useParams").mockReturnValue({id: 2}) ;
  const mock = new MockAdapter(axios) ;
  mock.onGet("  http://localhost:8080/Signup").reply(200, user); 
  render(
      <Router.MemoryRouter>
          <Login/>
      </Router.MemoryRouter>
  ) ;
  await act(() => {}) ;
});

test('api check',async () => {
  jest.spyOn(Router, "useParams").mockReturnValue({id: 2}) ;
  const mock = new MockAdapter(axios) ;
  mock.onGet("  http://localhost:8080/Signup").networkError(); 
  render(
      <Router.MemoryRouter>
          <Login/>
      </Router.MemoryRouter>
  ) ;
  await act(() => {}) ;
}); 


