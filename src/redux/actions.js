import { nanoid } from "@reduxjs/toolkit";

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

export const commentMinusScore = (commentId, score) => {
    return {
        type: "comments/score/minusScore",
        payload: {
            commentId,
            score: score - 1
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