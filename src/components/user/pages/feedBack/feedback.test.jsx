import { render} from '@testing-library/react' ;
import axios from 'axios' ;
import * as React from 'react'
import MockAdapter from "axios-mock-adapter";
import { act } from "react-test-renderer"; 
import Feedback from './Feedback'; 
import * as Router from "react-router-dom"; 
import { textArea } from '../../../../utils/validation/RegexValidator';


const feed = [
    {
        "User": "James Gunn",
        "feed": "When I look back, I am so impressed again with the life-giving power of literature. If I were a young person today, trying to gain a sense of myself in the world, I would do that again by reading, just as I did when I was young.",
        "id": 1
      },
      {
        "User": "Ana de armas",
        "feed": "All the girls in the world were divided into two classes: one class included all the girls in the world except her, and they had all the usual human feelings and were very ordinary girls; while the other class -herself alone- had no weaknesses and was superior to all humanity.",
        "id": 2
      },
      {
        "User": "armas07@gmail.com",
        "feed": "Academic libraries have for centuries played critically important roles in supporting the education system. A statistically significant correlation between library use and academic productivity has been found. Recently, libraries have not been used at the optimum level. To design library services, user studies are being conducted by many researchers",
        "id": 3
      }
]

jest.mock("react-router-dom" , () =>({
    ...jest.requireActual("react-router-dom") ,
    useParams : () => ({ id : 2}) ,
}))  

test('api check',async () => {
    jest.spyOn(Router, "useParams").mockReturnValue({id: 2}) ;
    const mock = new MockAdapter(axios) ;
    mock.onGet("  http://localhost:8080/FeedBack").reply(200, feed); 
    render(
        <Router.MemoryRouter>
            <Feedback/>
        </Router.MemoryRouter>
    ) ;
    await act(() => {}) ;
});


