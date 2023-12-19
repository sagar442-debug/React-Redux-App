import { createSlice } from '@reduxjs/toolkit'

const initialState = [
    {
        id: '1',
        title: 'Learning React Toolkit',
        author: 'Sagar Sapkota',
        content: "I've heard good things.",
        timestamp: new Date().toISOString()
    },
    {
        id:'2',
        title: 'Slices',
        author: 'Sagar Sapkota',
        content: 'I remember the mediterrean pizza we had previous week.',
        timestamp: new Date().toISOString()
    }
]

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
        postAdded(state,action){
            const newPost = {
                id: action.payload.id,
                title: action.payload.title,
                author: action.payload.author,
                content: action.payload.content,
                timestamp: new Date().toISOString(),
            }

            state.push(newPost)
        }
  },
})


export const selectAllPosts = (state) => state.posts;
export const { postAdded } = postsSlice.actions

export default postsSlice.reducer