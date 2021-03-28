import { createReducer, on } from "@ngrx/store";
import { Post } from "src/app/models/posts.model";
import { addPosts, updatePosts } from "./post.actions";
import { initialStatePost } from "./post.state";

const _postReducer = createReducer(
    initialStatePost,
    on(addPosts, (state: any, data: any) => {
        return {
            posts: [...state.posts, data.posts]
        }
    }),
    on(updatePosts, (state: any, data: any) => {
        const post = JSON.parse(JSON.stringify(state.posts));
        post.forEach((element: any) => {
            if (element.id == data.value.id) {
                element = data.value;
            }
        });
        return {
            ...state,
            posts: post
        }
    })
)
export function postsReducer(state: any, action: any) {
    return _postReducer(state, action);
}