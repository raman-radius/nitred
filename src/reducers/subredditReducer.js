import { SELECT_SUBREDDIT, REQUEST_POSTS, RECEIVE_POSTS } from '../actions/redditActions';

const defaultSubredditState = {};
export default (state = defaultSubredditState, action) => {
	switch(action.type){
		case 'GET_POSTS':
			return [
				...state,
				action.subreddit
			]
		case SELECT_SUBREDDIT:
	       return { ...state, subreddit: action.subreddit };
	    case REQUEST_POSTS:
	       return { ...state, loading: true };
	    case RECEIVE_POSTS:
	       return { ...state, posts: action.posts, loading: false };
		default :
			return state;
	}
}