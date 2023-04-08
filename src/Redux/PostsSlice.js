import { createSlice } from '@reduxjs/toolkit'
import axios from "axios";

const initialState =[
    {
      "id": 1,
      "username": "SamiraAbdi",
      "useremail": "samiraabdiurmia@gimail.com2",
      "text": "hello world"
    },
    {
      "id": 3,
      "username": "SamiraAbdi3",
      "useremail": "samiraabdiurmia@gimail.com2",
      "text": "hello world3"
    },{
      "id": 4,
      "username": "SamiraAbdi4",
      "useremail": "samiraabdiurmia@gimail.com2",
      "text": "hello world4"
    },
    {
      "id": 5,
      "username": "SamiraAbdi5",
      "useremail": "samiraabdiurmia@gimail.com2",
      "text": "hello world5"
    }
  ]
const PostsSlice= createSlice({
    name: 'posts',
    initialState,
    reducers: {
   
      incrementByAmount: (state, action) => {
        state.value += action.payload
      },
    },
  })
  
  export const { increment, decrement, incrementByAmount } = PostsSlice.actions
  
  export default PostsSlice.reducer