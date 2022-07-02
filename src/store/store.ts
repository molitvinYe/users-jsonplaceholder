import { userApi } from '../services/UserService';
import { combineReducers, configureStore} from "@reduxjs/toolkit";
import { postApi } from '../services/PostService';
import { commentApi } from '../services/CommentService';

const rootReducer = combineReducers({
  [userApi.reducerPath]: userApi.reducer,
  [postApi.reducerPath]: postApi.reducer,
  [commentApi.reducerPath]: commentApi.reducer
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => [
      ...getDefaultMiddleware().concat(userApi.middleware),
      ...getDefaultMiddleware().concat(postApi.middleware),
      ...getDefaultMiddleware().concat(commentApi.middleware),
    ]
  })
}

export type RootState = ReturnType<typeof rootReducer>

export type AppStore = ReturnType<typeof setupStore>

export type AppDispatch = AppStore["dispatch"]