import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    'avatar': 'avatar.png',
    'displayName': 'Unknown'
}

// no actions and no reducers
const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {

    }
});

export default profileSlice;