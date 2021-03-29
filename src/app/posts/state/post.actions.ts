import { createAction, props } from "@ngrx/store";
import { Post } from "../../models/posts.model";

export const addPosts = createAction("addPosts", props<{ posts: Post }>());
export const updatePosts = createAction("updatePosts", props<{ value: any }>());
export const deletePosts = createAction("deletePosts", props<{ id: number }>());
