import {Tuits} from "../components/tuits";
import {screen, render} from "@testing-library/react";
import {HashRouter} from "react-router-dom";
import * as axios from "axios";
import {UserList} from "../components/profile/user-list";
import Tuit from "../components/tuits/tuit";

//jest.mock('axios');

const MOCKED_USERS = [
    {username: 'alice', password: 'lv426', email: 'repley@weyland.com', _id: "123"},
    {username: 'bob', password: 'illbeback', email: 'sarah@bigjeff.com', _id: "234"},
    {username: 'charlie', password: 'illbeback', email: 'sarah@bigjeff.com', _id: "234"}
]

const MOCKED_TUITS = [
    {
        tuit: "alice's tuit",
        postedBy: MOCKED_USERS[0]
    },
    {
        tuit: "bob's tuit",
        postedBy: MOCKED_USERS[1]
    }
    ,{
        tuit: "charlie's tuit",
        postedBy: MOCKED_USERS[2]
    }
];

test('tuit list renders static tuit array', () => {
  render(
      <HashRouter>
        <Tuit tuit={MOCKED_TUITS}/>
      </HashRouter>);
  const linkElement = screen.getByText(/alice's tuit/);
  expect(linkElement).toBeInTheDocument();
});

test('tuit list renders async', async () => {
  // TODO: implement this
})

test('tuit list renders mocked', async () => {
  // TODO: implement this
});
