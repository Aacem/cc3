import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'





export const getPostSlice = createAsyncThunk('PostSlice/getPostSlice', async () => {
    const res = await axios.get('https://dummyjson.com/posts')
    return res.data
})
