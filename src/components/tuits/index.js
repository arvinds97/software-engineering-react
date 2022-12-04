import Tuit from "./tuit";
import * as likesService from "../../services/likes-service";
import * as dislikesService from "../../services/dislikes-service";
const Tuits = ({tuits = [], deleteTuit,
                   refreshTuits}) => {

    const likeTuit = (tuit) =>
        likesService
            .userTogglesTuitLikes("me", tuit._id)
            .then(refreshTuits)
            .catch(e => alert(e))

    const dislikeTuit = (tuit) =>
        dislikesService
            .userTogglesTuitDislikes("me", tuit._id)
            .then(refreshTuits)
            .catch(e => alert(e))

    return (
        <div>
            {tuits.length > 0 &&
                <ul>
                    {
                        tuits.map(tuit =>
                            <Tuit key={tuit._id}
                                  deleteTuit={deleteTuit}
                                  likeTuit={likeTuit}
                                  dislikeTuit={dislikeTuit}
                                  tuit={tuit}/>)
                    }
                </ul>
            }{
            tuits.length < 1 &&
            <h2>No Tuits</h2>
        }
        </div>
    );
}

export default Tuits;