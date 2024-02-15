import { createReducer } from "@reduxjs/toolkit";
import { 
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
 } from "./actions";
import { data } from "../assets/data.js";

const initialState = {
    ...data,
}

export const rootReducer = createReducer(initialState, builder => {
    builder
        .addCase(addComment, (state, action) => {
            state.comments.push(action.payload);
        })
        .addCase(deleteComment, (state, action) => {
            const index = state.comments.findIndex(comment => comment.id === action.payload);
            state.comments.splice(index, 1);
        })
        .addCase(updateComment, (state, action) => {
            const commentToUpdate = state.comments.find(comment => comment.id === action.payload.commentId);
            commentToUpdate.content = action.payload.content;
        })
        .addCase(addReplyy, (state, action) => {
            const comment = state.comments.find(comment => comment.id === action.payload.commentId);
            comment.replies.push(action.payload.reply);
        })
        .addCase(deleteReply, (state, action) => {
            const comment = state.comments.find(comment => comment.id === action.payload.commentId);
            const index = comment.replies.findIndex(reply => reply.id === action.payload.replyId);
            comment.replies.splice(index, 1)
        })
        .addCase(updateReply, (state, action) => {
            const comment = state.comments.find(comment => comment.id === action.payload.commentId);
            const reply = comment.replies.find(reply => reply.id === action.payload.replyId);
            reply.content = action.payload.content;
        })
        .addCase(addReplyReply, (state, action) => {
            const comment = state.comments.find(comment => comment.id === action.payload.commentId);
            comment.replies.push(action.payload.reply);
        })
        .addCase(commentPlusScore, (state, action) => {
            const comment = state.comments.find(comment => comment.id === action.payload)
            comment.score += 1;
        })
        .addCase(commentMinusScore, (state, action) => {
            const comment = state.comments.find(comment => comment.id === action.payload)
            comment.score -= 1;
        })
        .addCase(replyPlusScore, (state, action) => {
            const comment = state.comments.find(comment => comment.id === action.payload.commentId)
            const reply = comment.replies.find( item => item.id === action.payload.replyId) 
            reply.score += 1;
        })
        .addCase(replyMinusScore, (state, action) => {
            const comment = state.comments.find(comment => comment.id === action.payload.commentId)
            const reply = comment.replies.find( item => item.id === action.payload.replyId) 
            reply.score -= 1;
        })
})


/*
export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case addComment.type:
            return {
                ...state,
                comments: [...state.comments, action.payload]
            };
        case deleteComment.type:
            return {
                ...state,
                comments: state.comments.filter(comment => comment.id !== action.payload)
            };
        case updateComment.type:
            const newState = { ...state };
            const commentToUpdate = newState.comments.find(comment => comment.id === action.payload.commentId);
            commentToUpdate.content = action.payload.content;
            return newState;
        case addReplyy.type:
            const newState1 = {...state};
            const commentOfReply = newState1.comments.find(comment => comment.id === action.payload.commentId);
            commentOfReply.replies.push(action.payload.reply);
            return newState1;
        case deleteReply.type:
            const crd = state.comments.find(comment => comment.id === action.payload.commentId);
            const ur = crd.replies.filter(reply => reply.id !== action.payload.replyId)
            const uc = {
                ...crd,
                replies: ur
            }
            const ucs = state.comments.map(comment =>
                comment.id === action.payload.commentId ? uc : comment
                )

            return {
                ...state,
                comments: ucs
            };
        case updateReply.type:
            const newState3 = { ...state };
            const crUpdate = newState3.comments.find(comment => comment.id === action.payload.commentId);
            const replyUpdate = crUpdate.replies.find(reply => reply.id === action.payload.replyId);
            replyUpdate.content = action.payload.content;
            return newState3;


        case addReplyReply.type:
            const commentOfReplyReply = state.comments.find(comment => comment.id === action.payload.commentId);
            const ucorr = {
                ...commentOfReplyReply,
                replies: [...commentOfReplyReply.replies, action.payload.reply]
            }

            const ucorrs = state.comments.map(comment =>
                comment.id === action.payload.commentId ? ucorr : comment)

            return {
                ...state,
                comments: ucorrs
            };


        case commentPlusScore.type:
            const cs = state.comments.find(comment => comment.id === action.payload);
            const splus = cs.score + 1;
            const ucsp = {
                ...cs,
                score: splus
            }
            const ucsps = state.comments.map(comment => 
                comment.id === action.payload ? ucsp : comment)
            return {
                ...state,
                comments: ucsps,
            };
        case commentMinusScore.type:
            const csm = state.comments.find(comment => comment.id === action.payload);
            const sm = csm.score - 1;
            const ucsm = {
                ...csm,
                score: sm
            }
            const ucsms = state.comments.map(comment => 
                comment.id === action.payload ? ucsm : comment)
            return {
                ...state,
                comments: ucsms,
            };
        case replyPlusScore.type:
            const cspr = state.comments.find(comment => comment.id === action.payload.commentId);
            const rsp = cspr.replies.find(reply => reply.id === action.payload.replyId);
            const rspp = rsp.score + 1;
            const ursp = {
                ...rsp,
                score: rspp
            }

            const ursps = cspr.replies.map(reply =>
                reply.id === action.payload.replyId ? ursp : reply)

            const csprr = {
                ...cspr,
                replies: ursps
            }
            const ucrsps = state.comments.map(comment =>
                comment.id === action.payload.commentId ? csprr : comment)
            return {
                ...state,
                comments: ucrsps
            };
        case replyMinusScore.type:
            const csmr = state.comments.find(comment => comment.id === action.payload.commentId);
            const rsm = csmr.replies.find(reply => reply.id === action.payload.replyId);
            const rsmm = rsm.score - 1;
            const ursm = {
                ...rsm,
                score: rsmm
            }

            const ursms = csmr.replies.map(reply =>
                reply.id === action.payload.replyId ? ursm : reply)

            const csmrr = {
                ...csmr,
                replies: ursms
            }
            const ucrsms = state.comments.map(comment =>
                comment.id === action.payload.commentId ? csmrr : comment)
            return {
                ...state,
                comments: ucrsms
            };

        default:
            return state;
    }
}
*/
