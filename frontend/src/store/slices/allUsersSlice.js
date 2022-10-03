import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    allUsers: [],
    usersFriendsData: []
}

export const allUsersSlice = createSlice({
    initialState,
    name: 'allUsers',
    reducers: {
        setAllUsers: (state, action) => {
            state.allUsers = action.payload
        },
    }
})

export const  {setAllUsers} = allUsersSlice.actions

export default allUsersSlice.reducer