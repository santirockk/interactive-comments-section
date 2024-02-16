import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCurrentUser } from "../redux/selectors";
import { deleteReply, updateReply, replyPlusScore, replyMinusScore, addReplyReply } from "../redux/slice.js";
import { AddReply } from "./AddReply";
import { Scorebtns } from "./Scorebtns";
import { Update } from "./Update";
import { YouBtns } from "./YouBtns";
import { DeleteModal } from "./DeleteModal";

export function Reply({ reply, commentId }) {
  const [addReply, setAddReply] = useState(false);
  const [edit, setEdit] = useState(false);
  const [remove, setRemove] = useState(false);
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const currentUser = useSelector(getCurrentUser);
  const dispatch = useDispatch();

  const replyHandler = () => setAddReply(!addReply);

  const addReplyHandler = (e) => {
    e.preventDefault();
    const form = e.target;
    dispatch(addReplyReply(commentId, form.elements.reply.value, 'today', reply.user.username, currentUser));
    form.reset();
    setAddReply(false);
  };

  const editHandler = () => setEdit(!edit);

  const deleteHandler = () => setRemove(true);

  const updateHandler = e => {
    e.preventDefault();
    const form = e.target; 
    dispatch(updateReply(commentId, reply.id, form.elements.update.value))
    form.reset();
    setEdit(false);
  };

  const cancelHandler = () => setRemove(false);

  const yesHandler = () => {
    dispatch(deleteReply(commentId, reply.id))
    setRemove(false);
  };

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

  const replyPlusHandler = () => dispatch(replyPlusScore(commentId, reply.id));
  const replyMinusHandler = () => dispatch(replyMinusScore(commentId, reply.id));

  if (windowSize < 768) {
    return (
      <>
        <div className="bg-white mt-4 rounded-lg mx-4 p-4">
          <div className="flex items-center mb-4">
            <img src={reply.user.image.png} className="w-7 mr-4" alt={reply.user.username}/>
            <p className="text-black mr-2 font-medium">{reply.user.username}</p>
            {reply.user.username === currentUser.username && (
              <p className="bg-moderate-blue text-white px-2 text-sm py-0">you</p>
            )}
            <p className="ml-3">{reply.createdAt}</p>
          </div>
          {edit ? (
            <Update
              content={reply.content}
              updateHandler={updateHandler}
            />
          ) : (
            <>
              <p className="inline mr-1 text-moderate-blue font-medium">
                @{reply.replyingTo}
              </p>
              <p className="inline">{reply.content}</p>
              <div className="flex justify-between mt-4">
                <Scorebtns 
                  score={reply.score}
                  handlerPlus={replyPlusHandler}
                  handlerMinus={replyMinusHandler}
                />
                {reply.user.username === currentUser.username ? (
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
            username={reply.user.username}
            replyHandler={addReplyHandler}
          />
        )}
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
        <div className="bg-white reply rounded-lg flex">
          <Scorebtns 
            score={reply.score}
            handlerPlus={replyPlusHandler}
            handlerMinus={replyMinusHandler} 
          />
          <div className="w-full">
            <div className="flex items-center reply_c">
              <img src={reply.user.image.png} className="w-i mr-ri" alt={reply.user.username}/>
              <p className="text-black mr-2 font-medium c_name">
                {reply.user.username}
              </p>
              {reply.user.username === currentUser.username && (
                <p className="bg-moderate-blue text-white you text-sm py-0 ">you</p>
              )}
              <p className="ml-rdate pd-t">{reply.createdAt}</p>
              {reply.user.username === currentUser.username ? (
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
              <Update
                content={reply.content}
                updateHandler={updateHandler}
              />
            ) : (
              <div className="ml-rt">
                <p className="inline mr-1 text-moderate-blue font-medium">
                  @{reply.replyingTo}
                </p>
                <p className="inline">{reply.content}</p>
              </div>
            )}
          </div>
        </div>
        {addReply && (
          <div className="w-c ml-r">
             <AddReply
              username={reply.user.username}
              replyHandler={addReplyHandler}
            />
          </div>
        )}
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
