import { createAction, props } from "@ngrx/store";
import { Post } from "../../models/posts.model";

export const addPosts = createAction("addPosts", props<{ posts: Post }>());
export const deletePosts = createAction("addPosts");
export const updatePosts = createAction("updatePosts", props<{ value: any }>());