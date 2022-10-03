import {createSlice} from '@reduxjs/toolkit'
import { parseJwt } from '../../instruments/parseJwt'

const initialStateUser = {
    userData: {
        
    },
    userFriendsId: {

    },
    userFriendsData: [],
    token: null,
    isAuth: false
}

export const userSlice = createSlice({
    name: 'user',
    initialState: initialStateUser,
    
    reducers: {
        addUser: (state, action) => {
            state.token = action.payload
            state.isAuth = !!action.payload
            state.userData = parseJwt(action.payload)
        },
        removeUser: (state, action) => {
            state.token = null
            state.isAuth = false
            state.userFriendsData = []
            state.userData = {}
            state.userFriendsId = {}
        },
        setUserFriends: (state, action) => {
            state.userFriendsData = action.payload
        }
        
    }
})

export const {addUser, removeUser, setUserFriends} = userSlice.actions

export default userSlice.reducer