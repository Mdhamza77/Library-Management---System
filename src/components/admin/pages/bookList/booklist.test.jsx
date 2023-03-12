import { render} from '@testing-library/react' ;
import axios from 'axios' ;
import MockAdapter from "axios-mock-adapter";
import { act } from "react-test-renderer"; 
import BookList from './BookList' ;  
import * as Router from "react-router-dom";

const Book = [
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
      },
      {
        "title": "A Passage to India",
        "Description": "British schoolmistress, Adela Quested, and her elderly friend, Mrs. Moore, visit the fictional Indian city of Chandrapore. Adela is to decide if she wants to marry Mrs. Moore's son, Ronny Heaslop, the city magistrate.\n\nMeanwhile, Dr. Aziz, a young Indian Muslim physician, is called from dining with friends by Major Callendar, Aziz's superior at the hospital, but is delayed. Disconsolate at finding him gone, Aziz walks back and enters his favourite mosque on impulse. Seeing Mrs Moore there, he yells at her not to profane this sacred place, but the two then chat and part as friends. When Mrs. Moore relates her experience later, Ronny becomes indignant at the native's presumption.\n\n",
        "AuthorName": " E. M. Forster ",
        "Quantity": "20",
        "category": "Drama",
        "price": "200",
        "Image": "https://m.media-amazon.com/images/I/91JSfRQAhYL.jpg",
        "id": 5
      },
      {
        "title": "The Great Mughals and Their India",
        "Description": "A definitive, comprehensive and engrossing chronicle of one of the greatest dynasties of the world – the Mughal – from its founderBabur to Bahadur Shah Zafar, the last of the clanThe magnificent Mughal legacy – the world-famous Taj Mahal being the most prominent among countless other examples – is an inexhaustible source of inspiration to historians, writers, moviemakers, artists and ordinary mortals alike.Mughal history abounds with all the ingredients of classical drama: ambition and frustration, hope and despair, grandeur and decline, love and hate and loyalty and betrayal. In other words: it is great to read and offers ample food for thought on the human condition.Much more importantly, Mughal history deserves to be widely read and reflected upon, because of its lasting cultural and socio-political relevance to today’s world in general and the Indian subcontinent in particular.The Mughals have left us with a legacy that cannot be erased. With regard to the eventful reigns of Babur, Humayun, Akbar, Jahangir, Shah Jahan, Aurangzeb and their successors, crucial questions arise: Where did they succeed? Where did they fail? And more importantly, what should we learn from their triumphs and failures?The author believes that history books should be accurate, informative and entertaining. In The Great Mughals and Their India, he has kept these objectives in mind in an attempt to narrate Mughal history from their perspective. At the same time, he does not shy away from dealing with controversial issues.Here is a fascinating and riveting saga that brings alive a spectacular bygone era – authentically and convincingly.",
        "AuthorName": " Dirk Collier ",
        "category": "History",
        "Quantity": "30",
        "price": "450",
        "id": 6,
        "Image": "https://m.media-amazon.com/images/I/81Szrt2KiPL.jpg"
      },
      {
        "title": "Genghis Khan and the Making of the Modern World",
        "Description": "New York Times Bestseller • The startling true history of how one extraordinary man from a remote cornerof the world created an empire that led the world into the modern age.The Mongol army led by Genghis Khan subjugated more lands and people in twenty-five years than the Romans did in four hundred. In nearly every country the Mongols conquered, they brought an unprecedented rise in cultural communication, expanded trade, and a blossoming of civilization. Vastly more progressive than his European or Asian counterparts, Genghis Khan abolished torture, granted universal religious freedom, and smashed feudal systems of aristocratic privilege. From the story of his rise through the tribal culture to the explosion of civilization that the Mongol Empire unleashed, this brilliant work of revisionist history is nothing less than the epic story of how the modern world was made.",
        "AuthorName": "Jack Weatherford",
        "category": "History",
        "Quantity": "20",
        "price": "400",
        "id": 7,
        "Image": "https://m.media-amazon.com/images/P/0609809644.01._SCLZZZZZZZ_SX500_.jpg"
      },
      {
        "title": "The Time Machine",
        "Description": "A compelling science fiction, the Time Machine is a first-hand account of a Time Traveler's journey into the future. a pull of the lever and the machine sends him to the year 802,701, when humanity has split into two bizarre races?the ethereal Eloi and the subterranean Morlocks. Here, his machine is stolen and with the help of Weena, an Eloi he saved from drowning, the traveler is able to retrieve it. Whizzing thirty million years further into the future, he finds a slowly dying earth, where the bloated red sun sits motionless in the sky and the only sign of life is a black blob with tentacles.He returns to the Victorian time, overwhelmed, just three hours after he originally left..Credited with inventing the time machine in this masterpiece, the provocative insight of H. G. Wells continues to enthrall the readers. the Time Machine has since been adapted into many feature films and television series and has inspired many more works of fiction.",
        "AuthorName": " H. G. Wells",
        "Quantity": "10",
        "price": "450",
        "id": 8,
        "Image": "https://m.media-amazon.com/images/I/61kIHuopR0L.jpg"
      },
      {
        "title": "The Art of War",
        "AuthorName": " Sun Tzu",
        "Description": "Sun Tzu was a Chinese general, military strategist and a philosopher whose books have universal resonance even in the contemporary time. The Art of War has inspired Mao Zedong’s writings about Guerrilla warfare. Ho Chi Minh translated The Art of War for his generals to study. Sun Tzu’s Art of War is a widely acclaimed book on military strategy that has influenced and shaped the idea of Western and Eastern nations military philosophy. It presents complete instructions on how to win battles and manage conflicts. The theories proposed in Art of War are extremely beneficial on the battle ground and has been tried and tested by many successful military generals around the world. It is difficult to ascertain exactly when was this book written and many historians have ascribed it to different times. The Art of War has established its significance not just as a valuable book for military strategies but it also gives lesson in diplomacy and public administration and planning. It stresses on the need for healthy and friendly relations with other nations. In the context of changing world politics and rising interest in foreign policy affairs, The Art of War is a valuable read to understand about what idea goes behind shaping the strategies and policy with our neighbouring nations. This book is an ideal read if you are looking out for some inspiration to win over daily battles in your life. This book will be of special interest to people who want to read philosophy, the amazing quotes about life, winning battles and how to tide over daily struggles then it’s a must read for you. Grab a copy of this book from A now and learn the secrets to wining every battle whether personal or professional.",
        "Quantity": "20",
        "category": "History",
        "price": "300",
        "id": 9,
        "Image": "https://m.media-amazon.com/images/I/41-0lBgMGvL.jpg"
      },
      {
        "title": "Lies and Deception",
        "Description": "What do you do when the one person you thought you knew turns out to be the one you knew the least?Twenty-three year old Marissa Chase, and soon to be college graduate, has everything going for her: wonderful friends, a lucrative degree, and a chance to explore the world. What made it even better  or so she thought  was when her path crossed with the alluring Alec Holden. Unable to stay away from him, Marissa experiences a love like no other, and falls into his world of passion and intrigue. However, things begin to shift when this path takes a deadly turn.Her trust is put to the test when hidden dangers unfold before her, revealing secrets that have been buried for years. Secrets that were meant to stay hidden. Murder, lies, and betrayal  will Marissa figure it all out in time and escape with her life intact, or will she be too late and fall into the trap of deception?",
        "AuthorName": "Chris Taylor",
        "Quantity": "10",
        "price": "250",
        "Image": "https://m.media-amazon.com/images/I/51pnprnaZHL._BG0,0,0,0_FMpng_AC_SY320_SX320_.jpg",
        "id": 10
      },
      {
        "title": "Sherlock Holmes",
        "AuthorName": "Conan Doyle",
        "Description": "Sir Arthur Conan Doyle was born in Edinburgh in 1859 and died in 1930. Within those years was crowded a variety of activity and creative work that made him an international figure and inspired the French to give him the epithet 'the good giant'. He was the nephew of 'Dickie Doyle' the artist, and was educated at Stonyhurst, and later studied medicine at Edinburgh University, where the methods of diagnosis of one of the professors provided the idea for the methods of deduction used by Sherlock Holmes.\n\nHe set up as a doctor at Southsea and it was while waiting for patients that he began to write. His growing success as an author enabled him to give up his practice and turn his attention to other subjects. He was a passionate advocate of many causes, ranging from divorce law reform and the Channel Tunnel to the issuing of inflatable life-jackets to sailors. He also campaigned to prove the innocence of individuals, and his work on the Edjalji case was instrumental in the introduction of the Court of Criminal Appeal. He was a volunteer physician in the Boer War and later in life became a convert to spiritualism.",
        "Quantity": "10",
        "price": "1200",
        "category": "Crime",
        "id": 11,
        "Image": "https://m.media-amazon.com/images/I/71bhR8QDlPL.jpg"
      },
      {
        "title": "The Lost Symbol",
        "Description": "Renowned Harvard symbologist Robert Langdon is invited to give a lecture at the United States Capitol, at the invitation apparently from his mentor, a 33rd degree Mason named Peter Solomon, who is the head of the Smithsonian Institution. Solomon has also asked him to bring a small, sealed package which he had entrusted to Langdon years earlier. When Langdon arrives at the Capitol, however, he learns that the invitation he received was not from Solomon, but from Solomon's kidnapper, Mal'akh posing as Solomon's assistant, who has left Solomon's severed right hand in the middle of the Capitol Rotunda in a recreation of the Hand of Mysteries. Mal'akh then contacts Langdon, charging him with finding both the Mason's Pyramid, which Masons believe is hidden somewhere in Washington, D.C., and the Lost Word, lest Solomon be murdered.\n\nLangdon meets Inoue Sato, the head of the CIA's Office of Security. Sato claims that Mal'akh poses a threat to the national security of the U.S. and that his capture is more important than Peter's rescue, although she refuses to elaborate. ",
        "AuthorName": "Robert Langdon",
        "Quantity": "20",
        "price": "220",
        "id": 12,
        "Image": "https://m.media-amazon.com/images/P/059305427X.01._SCLZZZZZZZ_SX500_.jpg"
      }
] ;

jest.mock("react-router-dom" , () =>({
    ...jest.requireActual("react-router-dom") ,
    useParams : () => ({ id : 6}) ,
}))


test('api check',async () => {
    jest.spyOn(Router, "useParams").mockReturnValue({id: 6}) ;
    const mock = new MockAdapter(axios) ;
    mock.onGet(" http://localhost:8080/Books").reply(200, Book); 
    render(
        <Router.MemoryRouter>
            <BookList/>
        </Router.MemoryRouter>
    ) ;
    await act(() => {}) ;
});



test('api check',async () => {
    jest.spyOn(Router, "useParams").mockReturnValue({id: 6}) ;
    const mock = new MockAdapter(axios) ;
    mock.onGet(" http://localhost:8080/Books").networkError(); 
    render(
        <Router.MemoryRouter>
            <BookList/>
        </Router.MemoryRouter>
    ) ;
    await act(() => {}) ;
});