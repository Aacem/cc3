import { configureStore} from '@reduxjs/toolkit'
import userSlice from './userslice';
import PostSlice from './postsslice';


export const store=configureStore({
    reducer:{
        user:userSlice,
        postList:PostSlice,
    }
})