import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import { userLoginReducer, userRegisterReducer, userDetailsReducer, 
    userUpdateProfileReducer } from './user/user.reducers'

import { statusListReducer, statusDetailsReducer, statusDeleteReducer, statusCreateReducer, statusUpdateReducer } from './status/status.reducers'
import { commentListReducer, commentDetailsReducer, commentDeleteReducer, commentCreateReducer, commentUpdateReducer } from './comment/comment.reducers'
import { reactionDeleteReducer, reactionCreateReducer, reactionUpdateReducer } from './reaction/reaction.reducers'


const reducer = combineReducers({
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userDetails: userDetailsReducer,
    userUpdateProfile: userUpdateProfileReducer,
    statusList: statusListReducer,    
    statusDetails: statusDetailsReducer,
    statusDelete: statusDeleteReducer,
    statusCreate: statusCreateReducer,
    statusUpdate: statusUpdateReducer,
    commentList: commentListReducer,    
    commentDetails: commentDetailsReducer,
    commentDelete: commentDeleteReducer,
    commentCreate: commentCreateReducer,
    commentUpdate: commentUpdateReducer,
    reactionDelete: reactionDeleteReducer,
    reactionCreate: reactionCreateReducer,
    reactionUpdate: reactionUpdateReducer,})

const userInfoFormStorage = localStorage.getItem('userInfo') ? JSON.parse(
    localStorage.getItem('userInfo')) : null

const initialState = {
    userLogin: { userInfo: userInfoFormStorage }
}

const middleware = [thunk]

const store = createStore(reducer, initialState, composeWithDevTools(
    applyMiddleware(...middleware)
))

export default store