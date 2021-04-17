import StatusActionTypes from './status.types'

export const statusListReducer = (state = { statuses: [] }, action) => {
    switch (action.type) {
        case StatusActionTypes.STATUS_LIST_REQUEST:
            return { loading: true, statuses: [] }

        case StatusActionTypes.STATUS_LIST_SUCCESS: 
            return { loading: false, statuses: action.payload }

        case StatusActionTypes.STATUS_LIST_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state        
    }
}

export const statusDetailsReducer = (state = { status: { reviews: [] } }, action) => {
    switch (action.type) {
        case StatusActionTypes.STATUS_DETAILS_REQUEST:
            return { loading: true, ...state }

        case StatusActionTypes.STATUS_DETAILS_SUCCESS: 
            return { loading: false, status: action.payload }

        case StatusActionTypes.STATUS_DETAILS_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state        
    }
}

export const statusDeleteReducer = (state = {}, action) => {
    switch (action.type) {
        case StatusActionTypes.STATUS_DELETE_REQUEST:
            return { loading: true}

        case StatusActionTypes.STATUS_DELETE_SUCCESS: 
            return { loading: false, success: true }

        case StatusActionTypes.STATUS_DELETE_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state        
    }
}

export const statusCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case StatusActionTypes.STATUS_CREATE_REQUEST:
            return { loading: true}

        case StatusActionTypes.STATUS_CREATE_SUCCESS: 
            return { loading: false, success: true, status: action.payload }

        case StatusActionTypes.STATUS_CREATE_FAIL:
            return { loading: false, error: action.payload }

        case StatusActionTypes.STATUS_CREATE_RESET:
            return {}
        default:
            return state        
    }
}

export const statusUpdateReducer = (state = { status: {}}, action) => {
    switch (action.type) {
        case StatusActionTypes.STATUS_UPDATE_REQUEST:
            return { loading: true}

        case StatusActionTypes.STATUS_UPDATE_SUCCESS: 
            return { loading: false, success: true, status: action.payload }

        case StatusActionTypes.STATUS_UPDATE_FAIL:
            return { loading: false, error: action.payload }

        case StatusActionTypes.STATUS_UPDATE_RESET:
            return { status: {}}
        default:
            return state        
    }
}