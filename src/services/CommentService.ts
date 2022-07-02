import { IComment } from '../interfaces/IComment';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const commentApi = createApi({
  reducerPath: 'commentApi',
  baseQuery: fetchBaseQuery({baseUrl:'https://jsonplaceholder.typicode.com/'}),
  endpoints: (build) => ({
    fetchCommentsByPostId: build.query<IComment[], number>({
      query: (id) => ({
        url:"comments",
        params: {
          postId: id
        }
      })
    })
  })
})