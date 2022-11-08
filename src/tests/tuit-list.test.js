import {screen, render} from "@testing-library/react";
import {HashRouter} from "react-router-dom";
import Tuit from "../components/tuits/tuit";
import {createUser} from "../services/users-service";
import {createTuit} from "../services/tuits-service";



const MOCKED_USERS = [
    {username: 'alice', password: 'lv426', email: 'repley@weyland.com', _id: "123"},
    {username: 'bob', password: 'illbeback', email: 'sarah@bigjeff.com', _id: "234"},
    {username: 'charlie', password: 'illbeback', email: 'sarah@bigjeff.com', _id: "234"}
]

const MOCKED_TUITS = [
    {
        tuit: "alice's tuit",
        postedBy: MOCKED_USERS[0],
        postedOn: "2022-11-15T00:00:00.000Z",
        _id: "123"
    },
    {
        tuit: "bob's tuit",
        postedBy: MOCKED_USERS[1],
        postedOn: "2022-11-15T00:00:00.000Z",
        _id: "234"
    }
    ,{
        tuit: "charlie's tuit",
        postedBy: MOCKED_USERS[2],
        postedOn: "2022-11-15T00:00:00.000Z",
        _id:"456"
    }
];

test('tuit list renders static tuit array', () => {
  render(
      <HashRouter>
        <Tuit tuit={MOCKED_TUITS[0]}/>
          <Tuit tuit={MOCKED_TUITS[1]}/>
          <Tuit tuit={MOCKED_TUITS[2]}/>
      </HashRouter>);
  const linkElement = screen.getByText(/alice's tuit/i);
  expect(linkElement).toBeInTheDocument();
});


test('tuit list renders async', async () => {
    const ripley = {
        username: 'ellenripley',
        password: 'lv426',
        email: 'ellenripley@aliens.com'
    }
    let newUser;
    newUser = await createUser(ripley);
    const newTuit = await createTuit(newUser._id, MOCKED_TUITS[0]);

    expect(newTuit.tuit).toEqual(MOCKED_TUITS[0].tuit);
    expect(newTuit.postedOn).toEqual(MOCKED_TUITS[0].postedOn);
    expect(newTuit.postedBy).toEqual(MOCKED_TUITS[0].postedBy);
})







