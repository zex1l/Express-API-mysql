import {createSlice} from '@reduxjs/toolkit'
import { parseJwt } from '../../instruments/parseJwt'

const initialStateUser = {
    userData: {
        
    },
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
            state.user = parseJwt(action.payload)
        },
        removeUser: (state, action) => {
            state.token = null
            state.isAuth = false
        }
    }
})

export const {addUser, removeUser} = userSlice.actions

export default userSlice.reducer