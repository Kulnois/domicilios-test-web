import axios from 'axios'
import CommentActionTypes from './comment.types'

export const listComments = () => async (dispatch) => {
    try {
        dispatch({ type: CommentActionTypes.COMMENT_LIST_REQUEST })

        const { data } = await axios.get('/api/comments')

        dispatch({ 
            type: CommentActionTypes.COMMENT_LIST_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: CommentActionTypes.COMMENT_LIST_FAIL,
            payload: 
                error.response && error.response.data.message 
                ? error.response.data.message
                : error.message
        })
    }
}

export const listCommentDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: CommentActionTypes.COMMENT_DETAILS_REQUEST })

        const { data } = await axios.get(`/api/comments/${id}`)

        dispatch({ 
            type: CommentActionTypes.COMMENT_DETAILS_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: CommentActionTypes.COMMENT_DETAILS_FAIL,
            payload: 
                error.response && error.response.data.message 
                ? error.response.data.message
                : error.message
        })
    }
}

export const deleteComment = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: CommentActionTypes.COMMENT_DELETE_REQUEST,
        })

        const { userLogin: { userInfo }} = getState()

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`
            }
        }
        await axios.delete(`/api/comments/${id}`, config)

        dispatch({
            type: CommentActionTypes.COMMENT_DELETE_SUCCESS,
        })

    } catch (error) {
        dispatch({
            type: CommentActionTypes.COMMENT_DELETE_FAIL,
            payload: 
                error.response && error.response.data.message 
                ? error.response.data.message
                : error.message
        })
    }
}

export const createComment = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: CommentActionTypes.COMMENT_CREATE_REQUEST,
        })

        const { userLogin: { userInfo }} = getState()

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`
            }
        }
        const { data } = await axios.post(`/api/comments`, {}, config)

        dispatch({
            type: CommentActionTypes.COMMENT_CREATE_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: CommentActionTypes.COMMENT_CREATE_FAIL,
            payload: 
                error.response && error.response.data.message 
                ? error.response.data.message
                : error.message
        })
    }
}

export const updateComment = (comments) => async (dispatch, getState) => {
    try {
        dispatch({
            type: CommentActionTypes.COMMENT_UPDATE_REQUEST,
        })

        const { userLogin: { userInfo }} = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }
        const { data } = await axios.put(`/api/comments/${comments._id}`, comments, config)

        dispatch({
            type: CommentActionTypes.COMMENT_UPDATE_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: CommentActionTypes.COMMENT_UPDATE_FAIL,
            payload: 
                error.response && error.response.data.message 
                ? error.response.data.message
                : error.message
        })
    }
}