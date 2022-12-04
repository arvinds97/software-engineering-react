import * as service from "../../services/auth-service"
import {Link, Route, Routes, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import MyTuits from "./my-tuits";
import MyLikes from "./my-likes";
import MyDislikes from "./my-dislikes";
const Profile = () => {
    const navigate = useNavigate();
    const [profile, setProfile] = useState({});
    useEffect(async () => {
        try {
            const user = await service.profile();
            setProfile(user);
        } catch (e) {
            navigate('/login');
        }
    }, []);
    const logout = () => {
        service.logout()
            .then(() => navigate('/login'));
    }
    return(
        <div>
            <h4>{profile.username}</h4>
            <h6>@{profile.username}</h6>
            <button onClick={logout}>
                Logout</button>
            {/*<div className={"row"}>
                <div className={"col"}>
                    <MyTuits/>
                </div>
            </div>
            <div className={"row"}>
                <div className={"col"}>
                    <MyLikes/>
                </div>
            </div>*/}
            <ul>
                <li>
                    <Link to="/profile/mytuits">
                        My Tuits</Link>
                </li>
                <li>
                    <Link to="/profile/mylikes">
                        My Liked Tuits</Link>
                </li>
                <li>
                    <Link to="/profile/mydislikes">
                        My Disliked Tuits</Link>
                </li>
            </ul>
            <Routes>
                <Route path="/mytuits"
                       element={<MyTuits/>}/>
                <Route path="/mylikes"
                       element={<MyLikes/>}/>
                <Route path="/mydislikes"
                       element={<MyDislikes/>}/>
            </Routes>
        </div>
    );
};
export default Profile;