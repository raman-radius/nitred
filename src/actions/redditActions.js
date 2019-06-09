export const SELECT_SUBREDDIT = 'SELECT_SUBREDDIT';
export const REQUEST_POSTS = 'REQUEST_POSTS';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';

export const setSubreddit = (subreddit) => {
	return {
		type: SELECT_SUBREDDIT,
		subreddit:subreddit,
	}
};
export const requestPosts = () => ({
	type: REQUEST_POSTS,
});
export const receivedPosts = res => ({
	type: RECEIVE_POSTS,
	posts: res,
});


export function fetchPosts(subredditName) {
	//console.log("call api --",subredditName)
	return function (dispatch) {
	   dispatch(requestPosts());
	   return fetch('https://www.reddit.com/r/'+subredditName+'.json')
				.then(resp=>resp.json())
				.then((data)=>{
					//console.log("Resp:",data)
					let result = data.data.children;
					dispatch(receivedPosts(result));
			}).catch((e)=>console.log(e));
 };
}