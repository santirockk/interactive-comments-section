import { data } from "../assets/data.js";

const initialState = {
    ...data,
}

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case "comments/addComment":
            return {
                ...state,
                comments: [...state.comments, action.payload]
            };
        case "comments/deleteComment":
            return {
                ...state,
                comments: state.comments.filter(comment => comment.id !== action.payload)
            };
        case "comments/uploadComment":
            const newState = { ...state };
            const commentToUpdate = newState.comments.find(comment => comment.id === action.payload.commentId);
            commentToUpdate.content = action.payload.content;
            return newState;
        case "comments/replies/addReply":
            const newState1 = {...state};
            const commentOfReply = newState1.comments.find(comment => comment.id === action.payload.commentId);
            commentOfReply.replies.push(action.payload.reply);
            return newState1;
        case "comments/replies/deleteReply":
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
        case "comments/replies/uploadReply":
            const newState3 = { ...state };
            const crUpdate = newState3.comments.find(comment => comment.id === action.payload.commentId);
            const replyUpdate = crUpdate.replies.find(reply => reply.id === action.payload.replyId);
            replyUpdate.content = action.payload.content;
            return newState3;


        case "comments/replies/addReplyReply":
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


        case "comments/score/plusScore":
            const cs = state.comments.find(comment => comment.id === action.payload.commentId);
            const splus = cs.score + 1;
            const ucsp = {
                ...cs,
                score: splus
            }
            const ucsps = state.comments.map(comment => 
                comment.id === action.payload.commentId ? ucsp : comment)
            return {
                ...state,
                comments: ucsps,
            };
        case "comments/score/minusScore":
            const csm = state.comments.find(comment => comment.id === action.payload.commentId);
            const sm = csm.score - 1;
            const ucsm = {
                ...csm,
                score: sm
            }
            const ucsms = state.comments.map(comment => 
                comment.id === action.payload.commentId ? ucsm : comment)
            return {
                ...state,
                comments: ucsms,
            };
        case "comments/replies/score/plusScore":
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
        case "comments/replies/score/minusScore":
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

/*

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
                cspr,
                replies: ursps
            }

            const ucrsps = state.comments.map(comment =>
                comment.id === action.payload.commentId ? csprr : comment)

            return {
                ...state,
                comments: ucrsps
            }


*/