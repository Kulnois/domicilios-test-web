import ReactionActionTypes from './reaction.types'

export const reactionDeleteReducer = (state = {}, action) => {
    switch (action.type) {
        case ReactionActionTypes.REACTION_DELETE_REQUEST:
            return { loading: true}

        case ReactionActionTypes.REACTION_DELETE_SUCCESS: 
            return { loading: false, success: true }

        case ReactionActionTypes.REACTION_DELETE_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state        
    }
}

export const reactionCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case ReactionActionTypes.REACTION_CREATE_REQUEST:
            return { loading: true}

        case ReactionActionTypes.REACTION_CREATE_SUCCESS: 
            return { loading: false, success: true, reaction: action.payload }

        case ReactionActionTypes.REACTION_CREATE_FAIL:
            return { loading: false, error: action.payload }

        case ReactionActionTypes.REACTION_CREATE_RESET:
            return {}
        default:
            return state        
    }
}

export const reactionUpdateReducer = (state = { reaction: {}}, action) => {
    switch (action.type) {
        case ReactionActionTypes.REACTION_UPDATE_REQUEST:
            return { loading: true}

        case ReactionActionTypes.REACTION_UPDATE_SUCCESS: 
            return { loading: false, success: true, reaction: action.payload }

        case ReactionActionTypes.REACTION_UPDATE_FAIL:
            return { loading: false, error: action.payload }

        case ReactionActionTypes.REACTION_UPDATE_RESET:
            return { reaction: {}}
        default:
            return state        
    }
}