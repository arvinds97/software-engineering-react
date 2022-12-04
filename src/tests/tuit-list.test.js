import {screen, render} from "@testing-library/react";
import {HashRouter} from "react-router-dom";
import Tuit from "../components/tuits/tuit";
import {createUser} from "../services/users-service";
import {createTuit} from "../services/tuits-service";
import Tuits from "../components/tuits";



const MOCKED_USERS = [
    {username: 'alice', password: 'lv426', email: 'repley@weyland.com'},
    {username: 'bob', password: 'illbeback', email: 'sarah@bigjeff.com', _id: "234"},
    {username: 'charlie', password: 'illbeback', email: 'sarah@bigjeff.com', _id: "234"}
]

const MOCKED_TUITS = [
    {
        tuit: "alice's tuit",
        postedBy: MOCKED_USERS[0],
        postedOn: "2022-11-15T00:00:00.000Z",
        stats: {likes: 1, dislikes: 0, retuits: 0, replies: 0}
    },
    {
        tuit: "bob's tuit",
        postedBy: MOCKED_USERS[1],
        postedOn: "2022-11-15T00:00:00.000Z",
        stats: {likes: 1, dislikes: 1, retuits: 0, replies: 0}
    }
    ,{
        tuit: "charlie's tuit",
        postedBy: MOCKED_USERS[2],
        postedOn: "2022-11-15T00:00:00.000Z",
        stats: {likes: 1, dislikes: 0, retuits: 0, replies: 0}
    }
];

test('tuit list renders static tuit array', () => {
  render(
      <HashRouter>
        <Tuits tuit={MOCKED_TUITS}/>
      </HashRouter>);
  const linkElement = screen.getByText(/alice's tuit/i);
  expect(linkElement).toBeInTheDocument();
});


test('tuit list renders async', async () => {
    const ripley = {
        username: 'alice', password: 'lv426', email: 'repley@weyland.com'
    }
    let newUser;
    newUser = await createUser(ripley);
    const newTuit1 = await createTuit(newUser._id, MOCKED_TUITS[0]);
    const newTuit2 = await createTuit(newUser._id, MOCKED_TUITS[1]);
    const newTuit3 = await createTuit(newUser._id, MOCKED_TUITS[2]);
    render(
        <HashRouter>
            <Tuit tuit={newTuit1}/>
            <Tuit tuit={newTuit2}/>
            <Tuit tuit={newTuit3}/>
        </HashRouter>);
    const linkElement = screen.getByText(/alice's tuit/i);
    expect(linkElement).toBeInTheDocument();
})







