import { render , screen } from "@testing-library/react";
import NoMatch from '../Components/MainComponents/NoMatch'
describe('No Match', () => {
   it('Return 404 error', () => {
       render(<NoMatch/>)
   });
   it('no Error Found', () => {
         render(<NoMatch/>)

   });
       
});
