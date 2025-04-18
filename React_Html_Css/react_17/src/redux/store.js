import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './usersSlice';
import postsReducer from './postsSlice';
import commentsReducer from './commentsSlice';

export const store = configureStore({
  reducer: {
    users: usersReducer,
    posts: postsReducer,
    comments: commentsReducer,
  },
});
