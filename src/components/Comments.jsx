import { useSelector } from "react-redux";
import { getComments } from "../redux/selectors";
import { Comment } from "./Comment";

export function Comments () {

  const comments = useSelector(getComments);

    return (
        <>
          <ul className="md:mt-cs">
            {comments.map(comment => (
                <li key={comment.id}><Comment comment={comment}/></li>
            ))}
          </ul>
        </>
    )
}




            