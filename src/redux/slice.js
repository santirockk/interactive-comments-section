import { createSlice, nanoid } from "@reduxjs/toolkit";
import { data } from "../assets/data.js";

const initialState = {
    ...data,
}

const rootSlice = createSlice({
    name:"comments",
    initialState: initialState,
    reducers:{
        addComment:{
            reducer(state, action) {
                state.comments.push(action.payload);
            },
            prepare(content, createdAt, user) {
                return {
                    payload: {
                        id: nanoid(),
                        content,
                        createdAt,
                        score: 0,
                        user,
                        replies: []
                    },
                };
            },
        },
        deleteComment(state, action) {
            const index = state.comments.findIndex(comment => comment.id === action.payload);
            state.comments.splice(index, 1);
        },
        updateComment:{
            reducer(state, action) {
                const commentToUpdate = state.comments.find(comment => comment.id === action.payload.commentId);
                commentToUpdate.content = action.payload.content;
            },
            prepare(commentId, content) {
                return{
                    payload: {
                        content,
                        commentId
                    },
                };
            }
        },
        addReplyy:{
            reducer(state, action) {
                const comment = state.comments.find(comment => comment.id === action.payload.commentId);
                comment.replies.push(action.payload.reply);
            },
            prepare(commentId, content, createdAt, replyingTo, user) {
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
                };
            }
        },
        deleteReply:{
            reducer(state, action) {
                const comment = state.comments.find(comment => comment.id === action.payload.commentId);
                const index = comment.replies.findIndex(reply => reply.id === action.payload.replyId);
                comment.replies.splice(index, 1)
            },
            prepare(commentId, replyId) {
                return {
                    payload: {
                        commentId,
                        replyId
                    }
                };
            }
        },
        updateReply:{
            reducer(state, action) {
                const comment = state.comments.find(comment => comment.id === action.payload.commentId);
                const reply = comment.replies.find(reply => reply.id === action.payload.replyId);
                reply.content = action.payload.content;
            },
            prepare(commentId, replyId, content) {
                return{
                    payload: {
                        commentId,
                        replyId,
                        content,
                    }
                };
            },
        },
        addReplyReply:{
            reducer(state, action) {
                const comment = state.comments.find(comment => comment.id === action.payload.commentId);
                comment.replies.push(action.payload.reply);
            },
            prepare(commentId, content, createdAt, replyingTo, user) {
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
                };
            },
        },
        commentPlusScore(state, action) {
            const comment = state.comments.find(comment => comment.id === action.payload)
            comment.score += 1;
        },
        commentMinusScore(state, action) {
            const comment = state.comments.find(comment => comment.id === action.payload)
            comment.score -= 1;
        },
        replyPlusScore:{
            reducer(state, action) {
                const comment = state.comments.find(comment => comment.id === action.payload.commentId)
                const reply = comment.replies.find( item => item.id === action.payload.replyId) 
                reply.score += 1;
            },
            prepare(commentId, replyId) {
                return {
                    payload: {
                        commentId,
                        replyId,
                    }
                };
            },
        },
        replyMinusScore:{
            reducer(state, action) {
            const comment = state.comments.find(comment => comment.id === action.payload.commentId)
            const reply = comment.replies.find( item => item.id === action.payload.replyId) 
            reply.score -= 1;

            },
            prepare(commentId, replyId) {
                return {
                    payload: {
                        commentId,
                        replyId,
                    }
                };
            },
        },
    },
})

export const {
    addComment,
    deleteComment,
    updateComment,
    addReplyy,
    deleteReply,
    updateReply,
    addReplyReply,
    commentPlusScore,
    commentMinusScore,
    replyPlusScore,
    replyMinusScore
} = rootSlice.actions;

export const rootReducer = rootSlice.reducer;


