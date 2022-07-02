import { IPost } from '../interfaces/IPost';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const postApi = createApi({
  reducerPath: 'postApi',
  baseQuery: fetchBaseQuery({baseUrl:'https://jsonplaceholder.typicode.com/'}),
  endpoints: (build) => ({
    fetchPostsByUserId: build.query<IPost[], string | undefined>({
      query: (id) => ({
        url:"posts",
        params: {
          userId: id
        }
      })
    })
  })
})