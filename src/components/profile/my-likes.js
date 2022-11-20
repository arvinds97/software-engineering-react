import Tuits from "../tuits/tuit";
import * as service from "../../services/likes-service";
import {useEffect, useState} from "react";
import Tuit from "../tuits/tuit";

const MyLikes = () => {
    const [likedTuits, setLikedTuits] = useState([]);
    const findTuitsILike = () =>
        service.findAllTuitsLikedByUser("me")
            .then((tuits) => setLikedTuits(tuits));

    useEffect(findTuitsILike, []);

    return (
        <div>
            <Tuits tuits={likedTuits}
                   refreshTuits={findTuitsILike}/>
        </div>
    );
};
export default MyLikes;