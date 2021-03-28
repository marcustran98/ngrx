import { Post } from "../../models/posts.model";

export interface PostsState {
    posts: Post[]
}
export const initialStatePost: PostsState = {
    posts: [
        {
            id: 1,
            title: 'my title',
            desc: 'this is a my title'
        },
        {
            id: 2,
            title: 'my title',
            desc: 'this is a my title'
        }
    ]
}