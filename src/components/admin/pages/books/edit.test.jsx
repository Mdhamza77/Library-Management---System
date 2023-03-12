import { render } from "@testing-library/react";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { act } from "react-test-renderer";
import EditBooks from './EditBooks'
import * as Router from "react-router-dom"; 

const books = [
    {
        "title": "Origin",
        "Description": "Edmond Kirsch, a billionaire philanthropist, computer scientist, futurist, and strident atheist, attends a meeting at the Santa Maria de Montserrat Abbey in Catalonia (Spain) with Roman Catholic Bishop Antonio Valdespino,[4] Jewish Rabbi Yehuda Köves, and Muslim Imam Syed al-Fadl, members of the Parliament of the World's Religions. He informs them that he has made a revolutionary discovery that he plans to release to the public in a month. He has informed them out of respect, despite his hatred of organized religion, which he blames for his mother's death. The three learn that he is presenting it in three days' time, prompting Valdespino to demand that he stop.\n\nKirsch hosts an event at the Guggenheim Museum in Bilbao. Among those in attendance are Kirsch's former teacher, Robert Langdon, and the Guggenheim's curator Ambra Vidal, the fiancée of the future King of Spain, Prince Julián. The guests receive a headset through which they communicate with a voice named Winston, which reveals to Langdon that it is an artificial intelligence invented by Kirsch. Winston leads Langdon to a private meeting with Kirsch, who claims that his presentation will reveal humanity's origins and future.",
        "AuthorName": "Robert Langdon",
        "Quantity": "11",
        "price": "200",
        "Image": "https://m.media-amazon.com/images/I/91ZeWa2jVaL.jpg",
        "id": 1
      },
      {
        "title": "Inferno",
        "Description": "Harvard symbolism professor Robert Langdon wakes up in a hospital in Florence, Italy with a head wound and no memory of the last few days. Dr. Sienna Brooks, one of the doctors tending to him, reveals that he is suffering from amnesia and hearing a woman's voice repeatedly saying \"seek and find\". When Vayentha, an assassin, shows up in the hospital and kills one of the doctors, while attempting to kill Langdon, Brooks helps Langdon escape, and they flee to her apartment. Brooks plays a tape recording on which Langdon repeats what sounds like \"Very sorry\".\n\nLangdon finds a cylinder with a biohazard sign in his jacket and decides to call the U.S. consulate. He learns that they are searching for him, but, prompted by Brooks, claims to be across the street from her apartment, to avoid getting her more involved. Soon, Langdon sees Vayentha pull up to the location he gave the consulate. He deduces that the U.S. government wants to kill him. Langdon opens the container and finds a small medieval bone cylinder fitted with a hi-tech projector (Faraday Pointer) that displays a modified version of Botticelli's Map of Hell, which is based on Dante's Inferno. A trail of clues leads them toward the Old City.",
        "AuthorName": "Robert Langdon",
        "category": "Thriller",
        "Quantity": "20",
        "price": "200",
        "id": 2,
        "Image": "https://m.media-amazon.com/images/P/055217212X.01._SCLZZZZZZZ_SX500_.jpg"
      },
      {
        "title": "Daisy Jones & The Six",
        "AuthorName": " Taylor Jenkins Reid",
        "Description": "Everyone knows DAISY JONES & THE SIX, but nobody knows the reason behind their split at the absolute height of their popularity . . . until now.\n\nDaisy is a girl coming of age in L.A. in the late sixties, sneaking into clubs on the Sunset Strip, sleeping with rock stars, and dreaming of singing at the Whisky a Go Go. The sex and drugs are thrilling, but it’s the rock ’n’ roll she loves most. By the time she’s twenty, her voice is getting noticed, and she has the kind of heedless beauty that makes people do crazy things.\n\nAlso getting noticed is The Six, a band led by the brooding Billy Dunne. On the eve of their first tour, his girlfriend Camila finds out she’s pregnant, and with the pressure of impending fatherhood and fame, Billy goes a little wild on the road.\n\nDaisy and Billy cross paths when a producer realizes that the key to supercharged success is to put the two together. What happens next will become the stuff of legend.\n\nThe making of that legend is chronicled in this riveting and unforgettable novel, written as an oral history of one of the biggest bands of the seventies. Taylor Jenkins Reid is a talented writer who takes her work to a new level with Daisy Jones & The Six, brilliantly capturing a place and time in an utterly distinctive voice.",
        "Quantity": "20",
        "category": "Drama",
        "price": "450",
        "id": 3,
        "Image": "https://m.media-amazon.com/images/I/71l+w6TvBML.jpg"
      },
      {
        "title": "No Plan B",
        "Description": "\nGerrardsville, Colorado. One tragic event. Two witnesses. Two conflicting accounts. One witness sees a woman throw herself in front of a bus - clearly suicide. The other witness is Jack Reacher. And he sees what really happened - a man in grey hoodie and jeans, swift and silent as a shadow, pushing the victim to her death, before grabbing her bag and sauntering away.\n\nReacher follows the killer, not knowing that this was no random act of violence. It is part of something much bigger...a sinister, secret conspiracy, with powerful people on the take, enmeshed in an elaborate plot that leaves no room for error. If any step is compromised, the threat will have to be quickly and permanently removed.\n",
        "AuthorName": "Jack Reacher",
        "category": "Thriller",
        "Quantity": "10",
        "price": "100",
        "id": 4,
        "Image": "https://m.media-amazon.com/images/I/81EwJoYM6jL.jpg"
      }
] ; 

jest.mock("react-router-dom" , () =>({
    ...jest.requireActual("react-router-dom") ,
    useParams : () => ({ id : 3}) ,
}))

test('api check',async () => {
    jest.spyOn(Router, "useParams").mockReturnValue({id: 3}) ;
    const mock = new MockAdapter(axios) ;
    mock.onPut(" http://localhost:8080/Books").reply(200, books); 
    render(
        <Router.MemoryRouter>
            <EditBooks />
        </Router.MemoryRouter>
    ) ;
    await act(() => {}) ;
}); 

test('api check',async () => {
    jest.spyOn(Router, "useParams").mockReturnValue({id: 3}) ;
    const mock = new MockAdapter(axios) ;
    mock.onPut(" http://localhost:8080/Books").networkError(); 
    render(
        <Router.MemoryRouter>
            <EditBooks />
        </Router.MemoryRouter>
    ) ;
    await act(() => {}) ;
}); 
