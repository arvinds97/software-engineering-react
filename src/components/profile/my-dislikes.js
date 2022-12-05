import Tuits from "../tuits";
import * as service from "../../services/dislikes-service";
import {useEffect, useState} from "react";

const MyDislikes = () => {
    const [dislikedTuits, setDislikedTuits] = useState([]);
    const findTuitsIDislike = () => {
        service.findAllTuitsDislikedByUser("me")
            .then((tuits) => {
                setDislikedTuits(tuits.map(i => i.tuit));
            });
    }
    useEffect(findTuitsIDislike, []);

    return(
        <div>
            <h2>My Disliked Tuits</h2>
            <Tuits tuits={dislikedTuits} refreshTuits={findTuitsIDislike}/>
        </div>
    );
};
export default MyDislikes;