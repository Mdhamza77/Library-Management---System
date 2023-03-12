import {  screen , waitFor  } from "@testing-library/react";

import { getHomeData , getCards , getFeedBack , postFeedBack } from "./home.service"; 

describe('get Home data api service', () => {
    it('get Home data axios api service',async () => {
      await  getHomeData().then((res) => console.log(res.data))
        .catch( err => console.log(err))
    });
    waitFor(() => {
        expect(screen.getByText("/value from the api")).toBeInTheDocument();
      });
});


describe('post Feedback service api', (feed) => {
    it('post feedback user axios api',async () => {
       await postFeedBack(feed).then( (res) => console.log(res.data))
        .catch( err => console.log(err))
    });
    
});
