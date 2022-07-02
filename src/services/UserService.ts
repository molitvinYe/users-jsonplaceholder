import { IUser } from './../interfaces/IUser';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({baseUrl:'https://jsonplaceholder.typicode.com/'}),
  endpoints: (build) => ({
    fetchAllUsers: build.query<IUser[], string>({
      query: () => ({
        url: '/users',
      })
    })
  })
})