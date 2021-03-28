import { counterReducer } from "../counter/state/counter.reducer";
import { ConterState } from "../counter/state/counter.state";
import { postsReducer } from "../posts/state/post.reducer";
import { PostsState } from "../posts/state/post.state";

export interface AppState {
    counter: ConterState,
    posts: PostsState
}
export const AppReducer = {
    counter: counterReducer,
    posts: postsReducer
}