import { waitFor } from "@testing-library/react";  
import { getRentedData , getData , rentBooks , returnBook } from "./rent.service";

describe('get Rented Books data', (id) => {
    it('get rented book data from api service', () => {
        getRentedData(id).then( (res) => (console.log(res.data)) )
        .catch(err => console.log(err))
    });
    waitFor(() => {
        expect(screen.getByText("/value from the api")).toBeInTheDocument();
      });
          
}); 

describe('get Data from service api', () => {
    it('get rented book service api ', () => {
        getData().then( (res) => (console.log(res.data)))
        .catch(err => console.log(err))
    });
    waitFor(() => {
        expect(screen.getByText("/value from the api")).toBeInTheDocument();
      });
        
    
});

describe('renting books from service api', (book) => {
    it('rent books from api service', () => {
        rentBooks(book).then( (res)  => (res.data))
        .catch( err => console.log(err))
    });
    waitFor(() => {
        expect(screen.getByText("/value from the api")).toBeInTheDocument();
      });
        
    
});

describe('return rented book service api', (id) => {
    it('return service api call', () => {
        returnBook(id).then ((res) => console.log(res.data))
        .catch( err => console.log(err))
    });
    waitFor(() => {
        expect(screen.getByText("/value from the api")).toBeInTheDocument();
      });
        
    
});

