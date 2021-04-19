import axios from 'axios'
import ReactionActionTypes from './reaction.types'

export const deleteReaction = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: ReactionActionTypes.REACTION_DELETE_REQUEST,
        })

        const { userLogin: { userInfo }} = getState()

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`
            }
        }
        await axios.delete(`/api/reactions/${id}`, config)

        dispatch({
            type: ReactionActionTypes.REACTION_DELETE_SUCCESS,
        })

    } catch (error) {
        dispatch({
            type: ReactionActionTypes.REACTION_DELETE_FAIL,
            payload: 
                error.response && error.response.data.message 
                ? error.response.data.message
                : error.message
        })
    }
}

export const createReaction = (statusId) => async (dispatch, getState) => {
    try {
        dispatch({
            type: ReactionActionTypes.REACTION_CREATE_REQUEST,
        })

        const { userLogin: { userInfo }} = getState()

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`
            }
        }
        const { data } = await axios.post(`/api/reactions`, {statusId}, config)

        dispatch({
            type: ReactionActionTypes.REACTION_CREATE_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: ReactionActionTypes.REACTION_CREATE_FAIL,
            payload: 
                error.response && error.response.data.message 
                ? error.response.data.message
                : error.message
        })
    }
}

export const updateReaction = (reactions) => async (dispatch, getState) => {
    try {
        dispatch({
            type: ReactionActionTypes.REACTION_UPDATE_REQUEST,
        })

        const { userLogin: { userInfo }} = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }
        const { data } = await axios.put(`/api/reactions/${reactions._id}`, reactions, config)

        dispatch({
            type: ReactionActionTypes.REACTION_UPDATE_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: ReactionActionTypes.REACTION_UPDATE_FAIL,
            payload: 
                error.response && error.response.data.message 
                ? error.response.data.message
                : error.message
        })
    }
}