import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import beersReducers from '../reducers/actions';

const rootReducer = beersReducers;// combineReducers({beersReducers});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;

// type-checking according to docs:
// https://redux.js.org/usage/usage-with-typescript

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
