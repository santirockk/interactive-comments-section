import { createAction, nanoid } from "@reduxjs/toolkit";

export const addComment = createAction("comments/addComment", (content, createdAt, user) => {
    return {
        payload: {
            id: nanoid(),
            content,
            createdAt,
            score: 0,
            user,
            replies: []
        }
    }
});

export const deleteComment = createAction("comments/deleteComment");

export const updateComment = createAction("comments/uplaoadComment", (commentId, content) => {
    return{
        payload: {
            content,
            commentId
        }
    }
});

export const addReplyy = createAction("comments/replies/addReply", (commentId, content, createdAt, replyingTo, user) => {
    return{
        payload: {
            commentId,
            reply: {
                id: nanoid(),
                content,
                createdAt,
                score: 0,
                replyingTo,
                user,
            }
        }
    }
});

export const deleteReply = createAction("comments/replies/deleteReply", (commentId, replyId) => {
    return {
        payload: {
            commentId,
            replyId
        }
    }
});

export const updateReply = createAction("comments/replies/uploadReply", (commentId, replyId, content) => {
    return{
        payload: {
            commentId,
            replyId,
            content,
        }
    }
});

export const addReplyReply = createAction("comments/replies/addReplyReply", (commentId, content, createdAt, replyingTo, user) => {
    return {
        payload: {
            commentId,
            reply: {
                id: nanoid(),
                content,
                createdAt,
                score: 0,
                replyingTo,
                user,
            }
        }
    }
});

export const commentPlusScore = createAction("comments/score/plusScore");

export const commentMinusScore = createAction("comments/score/minusScore");

export const replyPlusScore = createAction("comments/replies/score/plusScore", (commentId, replyId) => {
    return {
        payload: {
            commentId,
            replyId,
        }
    }
});

export const replyMinusScore = createAction("comments/replies/score/minusScore", (commentId, replyId) => {
    return {
        payload: {
            commentId,
            replyId,
        }
    }
});


/*
export const addComment = (content, createdAt, user) => {
    return {
        type: "comments/addComment",
        payload: {
            id: nanoid(),
            content,
            createdAt,
            score: 0,
            user,
            replies: []
        }
    }
};

export const deleteComment = commentId => {
    return {
        type: "comments/deleteComment",
        payload: commentId
    }
}

export const updateComment = (commentId, content) => {
    return {
        type: "comments/uploadComment",
        payload: {
            content,
            commentId
        }
    }
}

export const addReplyy = (commentId, content, createdAt, replyingTo, user) => {
    return {
        type: "comments/replies/addReply",
        payload: {
            commentId,
            reply: {
                id: nanoid(),
                content,
                createdAt,
                score: 0,
                replyingTo,
                user,
            }
       }
    }
}

export const deleteReply = (commentId, replyId) => {
    return{
        type: "comments/replies/deleteReply",
        payload: {
            commentId,
            replyId
        }
    }
}

export const updateReply = (commentId, replyId, content) => {
    return {
        type: "comments/replies/uploadReply",
        payload: {
            commentId,
            replyId,
            content,
        }
    }
}

export const addReplyReply = (commentId, content, createdAt, replyingTo, user) => {
    return {
        type: "comments/replies/addReplyReply",
        payload: {
            commentId,
            reply: {
                id: nanoid(),
                content,
                createdAt,
                score: 0,
                replyingTo,
                user,
            }
       }
    }
}

export const commentPlusScore = (commentId) => {
    return {
        type: "comments/score/plusScore",
        payload: {
            commentId,
        }
    }  
}

export const commentMinusScore = (commentId) => {
    return {
        type: "comments/score/minusScore",
        payload: {
            commentId,
        }
    }
}


export const replyPlusScore = (commentId, replyId) => {
    return {
        type: "comments/replies/score/plusScore",
        payload: {
            commentId,
            replyId,
        }
    }  
}

export const replyMinusScore = (commentId, replyId) => {
    return {
        type: "comments/replies/score/minusScore",
        payload: {
            commentId,
            replyId,
        }
    }
}

*/