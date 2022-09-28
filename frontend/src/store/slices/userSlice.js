import {createSlice} from '@reduxjs/toolkit'

const initialStateUser = {
/*     email: null,
    password: null,
    name: null, */
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
        }
    }
})

export const {addUser} = userSlice.actions

export default userSlice.reducer