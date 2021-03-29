import { createReducer, on } from "@ngrx/store";
import { Post } from "src/app/models/posts.model";
import { addPosts, deletePosts, updatePosts } from "./post.actions";
import { initialStatePost } from "./post.state";

const _postReducer = createReducer(
    initialStatePost,
    on(addPosts, (state: any, data: any) => {
        return {
            posts: [...state.posts, data.posts]
        }
    }),
    on(updatePosts, (state: any, data: any) => {
        console.log(1, state);
        console.log(2, data);
        const post = state.posts.map((ele: any) => {
            return ele.id == data.value.id ? data.value : ele;
        })
        return {
            ...state,
            posts: post
        }
    }),
    on(deletePosts, (state: any, data: any) => {
        const posts = state.posts.filter((ele: any) => {
            return ele.id !== data.id
        })
        return {
            ...state,
            posts: posts
        }
    })
)
export function postsReducer(state: any, action: any) {
    return _postReducer(state, action);
}