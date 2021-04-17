import CommentActionTypes from './comment.types'

export const commentListReducer = (state = { comments: [] }, action) => {
    switch (action.type) {
        case CommentActionTypes.COMMENT_LIST_REQUEST:
            return { loading: true, comments: [] }

        case CommentActionTypes.COMMENT_LIST_SUCCESS: 
            return { loading: false, comments: action.payload }

        case CommentActionTypes.COMMENT_LIST_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state        
    }
}

export const commentDetailsReducer = (state = { comment: { reviews: [] } }, action) => {
    switch (action.type) {
        case CommentActionTypes.COMMENT_DETAILS_REQUEST:
            return { loading: true, ...state }

        case CommentActionTypes.COMMENT_DETAILS_SUCCESS: 
            return { loading: false, comment: action.payload }

        case CommentActionTypes.COMMENT_DETAILS_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state        
    }
}

export const commentDeleteReducer = (state = {}, action) => {
    switch (action.type) {
        case CommentActionTypes.COMMENT_DELETE_REQUEST:
            return { loading: true}

        case CommentActionTypes.COMMENT_DELETE_SUCCESS: 
            return { loading: false, success: true }

        case CommentActionTypes.COMMENT_DELETE_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state        
    }
}

export const commentCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case CommentActionTypes.COMMENT_CREATE_REQUEST:
            return { loading: true}

        case CommentActionTypes.COMMENT_CREATE_SUCCESS: 
            return { loading: false, success: true, comment: action.payload }

        case CommentActionTypes.COMMENT_CREATE_FAIL:
            return { loading: false, error: action.payload }

        case CommentActionTypes.COMMENT_CREATE_RESET:
            return {}
        default:
            return state        
    }
}

export const commentUpdateReducer = (state = { comment: {}}, action) => {
    switch (action.type) {
        case CommentActionTypes.COMMENT_UPDATE_REQUEST:
            return { loading: true}

        case CommentActionTypes.COMMENT_UPDATE_SUCCESS: 
            return { loading: false, success: true, comment: action.payload }

        case CommentActionTypes.COMMENT_UPDATE_FAIL:
            return { loading: false, error: action.payload }

        case CommentActionTypes.COMMENT_UPDATE_RESET:
            return { comment: {}}
        default:
            return state        
    }
}