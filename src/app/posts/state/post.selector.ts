import { createFeatureSelector, createSelector } from "@ngrx/store";

const postFeature = createFeatureSelector("posts");
export const getPostSelector = createSelector(postFeature, (data: any) => {
    return data.posts;
});
export const getPostById = createSelector(postFeature, (data: any, id: any) => {
    console.log(111, data);
    const item = data.posts.find((ele: any) => ele.id == id);
    return item;
})