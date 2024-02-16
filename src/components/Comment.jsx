import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteComment, addReplyy, updateComment, commentPlusScore, commentMinusScore} from "../redux/slice.js";
import { getCurrentUser, getWindow } from "../redux/selectors";
import { AddReply } from "./AddReply";
import { Scorebtns } from "./Scorebtns";
import { Reply } from "./Reply";
import { Update } from "./Update";
import { YouBtns } from "./YouBtns";
import { DeleteModal } from "./DeleteModal";

export function Comment({ comment }) {
  const [addReply, setAddReply] = useState(false);
  const [edit, setEdit] = useState(false);
  const [remove, setRemove] = useState(false);

  const windowSize = useSelector(getWindow)

  const currentUser = useSelector(getCurrentUser);
  const dispatch = useDispatch();

  const replyHandler = () => setAddReply(!addReply);

  const addReplyHandler = (e) => {
    e.preventDefault();
    const form = e.target;
    dispatch(addReplyy(comment.id, form.elements.reply.value, 'today', comment.user.username, currentUser));
    form.reset();
    setAddReply(false);
  };

  const editHandler = () => setEdit(true);

  const deleteHandler = () => setRemove(true);

  const updateHandler = (e) => {
    e.preventDefault();
    const form = e.target;
    dispatch(updateComment(comment.id, form.elements.update.value))
    setEdit(false);
  };

  const cancelHandler = () => setRemove(false);

  const handleEsc = (e) => {
    if (e.key === "Escape") {
      setRemove(false);
    }
  };
  document.addEventListener("keydown", handleEsc);

  const clickClose = (e) => {
    if (e.currentTarget === e.target) {
      setRemove(false);
    }
  };

  const yesHandler = () => {
    dispatch(deleteComment(comment.id));
    setRemove(false);
  }

  const plusScoreHandler = () => dispatch(commentPlusScore(comment.id));
  const minusScoreHandler = () => dispatch(commentMinusScore(comment.id));

  if (windowSize.window < 768) {
    return (
      <>
        <div className="bg-white mt-4 mx-4 rounded-lg p-4 w-c">
          <div className="flex items-center mb-4">
            <img src={comment.user.image.png} className="w-7 mr-4" alt={comment.user.username}/>
            <p className="text-black mr-2 font-medium">{comment.user.username}</p>
            {comment.user.username === currentUser.username && (
              <p className="bg-moderate-blue text-white px-2 text-sm py-0 ">you</p>
            )}
            <p className="ml-3">{comment.createdAt}</p>
          </div>
          {edit ? (
            <Update content={comment.content} updateHandler={updateHandler} />
          ) : (
            <>
              <p className="mb-4">{comment.content}</p>
              <div className="flex justify-between">
                <Scorebtns 
                  score={comment.score}
                  handlerMinus={minusScoreHandler}
                  handlerPlus={plusScoreHandler}
                />
                {comment.user.username === currentUser.username ? (
                  <YouBtns
                    editHandler={editHandler}
                    deleteHandler={deleteHandler}
                  />
                ) : (
                  <button
                    className="text-moderate-blue font-medium hover:opacity-50"
                    onClick={replyHandler}
                  >
                    <img
                      src="./images/icon-reply.svg"
                      alt="icon-reply"
                      className="inline mr-2"
                    />
                    Reply
                  </button>
                )}
              </div>
            </>
          )}
        </div>
        {addReply && (
          <AddReply
            username={comment.user.username}
            replyHandler={addReplyHandler}
          />
        )}
        <ul className="ml-4 border-l-2 w-c">
          {comment.replies.map((reply) => (
            <li key={reply.id}>
              <Reply reply={reply} commentId={comment.id}/>
            </li>
          ))}
        </ul>
        {remove && (
          <DeleteModal
            cancelHandler={cancelHandler}
            yesHandler={yesHandler}
            clickClose={clickClose}
          />
        )}
      </>
    );
  } else {
    return (
      <>
        <div className="bg-white m-cc rounded-lg c-c w-c md:mx-auto flex">
          <Scorebtns 
            score={comment.score}
            handlerMinus={minusScoreHandler}
            handlerPlus={plusScoreHandler}
          />
          <div className="w-full">
            <div className="flex items-center mb-c1">
              <img src={comment.user.image.png} className="w-i mr-3" alt={comment.user.username}/>
              <p className="text-black font-medium c_name">{comment.user.username}</p>
              {comment.user.username === currentUser.username && (
                <p className="bg-moderate-blue text-white px-2 text-sm py-0 ">you</p>
              )}
              <p className="ml-rdate pd-t">{comment.createdAt}</p>
              {comment.user.username === currentUser.username ? (
                <YouBtns
                  editHandler={editHandler}
                  deleteHandler={deleteHandler}
                />
              ) : (
                <button
                  className="text-moderate-blue font-medium hover:opacity-50 ml-auto mr-reply"
                  onClick={replyHandler}
                >
                  <img
                    src="./images/icon-reply.svg"
                    alt="icon-reply"
                    className="inline mr-2"
                  />
                  Reply
                </button>
              )}
            </div>
            {edit ? (
              <Update content={comment.content} updateHandler={updateHandler} />
            ) : (
              <p className="">{comment.content}</p>
            )}
          </div>
        </div>

        {addReply && (
          <div className="w-c m-auto">
            <AddReply
              username={comment.user.username}
              replyHandler={addReplyHandler}
            />
          </div>
  
        )}
        <div className="w-c m-auto">
        <ul className="border-l-2 ml-r">
          {comment.replies.map((reply) => (
            <li key={reply.id}>
              <Reply reply={reply} commentId={comment.id} />
            </li>
          ))}
        </ul>

        </div>
        
        {remove && (
          <DeleteModal
            cancelHandler={cancelHandler}
            yesHandler={yesHandler}
            clickClose={clickClose}
          />
        )}
      </>
    );
  }
}
