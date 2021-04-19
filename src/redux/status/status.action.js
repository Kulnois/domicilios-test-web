import axios from 'axios'
import StatusActionTypes from './status.types'

export const listStatuses = () => async (dispatch) => {
    try {
        dispatch({ type: StatusActionTypes.STATUS_LIST_REQUEST })

        const { data } = await axios.get('/api/statuses')

        dispatch({ 
            type: StatusActionTypes.STATUS_LIST_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: StatusActionTypes.STATUS_LIST_FAIL,
            payload: 
                error.response && error.response.data.message 
                ? error.response.data.message
                : error.message
        })
    }
}

export const listStatusDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: StatusActionTypes.STATUS_DETAILS_REQUEST })

        const { data } = await axios.get(`/api/statuses/${id}`)

        dispatch({ 
            type: StatusActionTypes.STATUS_DETAILS_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: StatusActionTypes.STATUS_DETAILS_FAIL,
            payload: 
                error.response && error.response.data.message 
                ? error.response.data.message
                : error.message
        })
    }
}

export const deleteStatus = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: StatusActionTypes.STATUS_DELETE_REQUEST,
        })

        const { userLogin: { userInfo }} = getState()

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`
            }
        }
        await axios.delete(`/api/statuses/${id}`, config)

        dispatch({
            type: StatusActionTypes.STATUS_DELETE_SUCCESS,
        })

    } catch (error) {
        dispatch({
            type: StatusActionTypes.STATUS_DELETE_FAIL,
            payload: 
                error.response && error.response.data.message 
                ? error.response.data.message
                : error.message
        })
    }
}

export const createStatus = (content) => async (dispatch, getState) => {
    try {
        dispatch({
            type: StatusActionTypes.STATUS_CREATE_REQUEST,
        })

        const { userLogin: { userInfo }} = getState()

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`
            }
        }
        const { data } = await axios.post(`/api/statuses`, {content}, config)

        dispatch({
            type: StatusActionTypes.STATUS_CREATE_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: StatusActionTypes.STATUS_CREATE_FAIL,
            payload: 
                error.response && error.response.data.message 
                ? error.response.data.message
                : error.message
        })
    }
}

export const updateStatus = (status) => async (dispatch, getState) => {
    try {
        dispatch({
            type: StatusActionTypes.STATUS_UPDATE_REQUEST,
        })

        const { userLogin: { userInfo }} = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }
        const { data } = await axios.put(`/api/statuses/${status._id}`, status, config)

        dispatch({
            type: StatusActionTypes.STATUS_UPDATE_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: StatusActionTypes.STATUS_UPDATE_FAIL,
            payload: 
                error.response && error.response.data.message 
                ? error.response.data.message
                : error.message
        })
    }
}