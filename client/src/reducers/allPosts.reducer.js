import { GET_ALL_POSTS } from "../actions/post.actions";

const iniatialState = {};

export default function allPostsReducer(state = iniatialState, action) {
    switch (action.type) {
        case GET_ALL_POSTS:
            return action.payload
        default:
            return state;
    }
}