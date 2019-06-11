module.exports = {
	getSubredditData : function(subredditName){
		let result = [];
		fetch('https://www.reddit.com/r/'+subredditName+'.json')
			.then(resp=>resp.json())
			.then((data)=>{
				console.log("Resp:",data)
				result = data.data.children;
				return result;
			}).catch((e)=>console.log(e));
	}
}

export default const getSubredditData = (subredditName) =>  {
	return fetch('https://www.reddit.com/r/'+subredditName+'.json')
			.then(resp=>resp.json())
			.then((data)=>{
				console.log("Resp:",data)
				result = data.data.children;
				return result;
			}).catch((e)=>console.log(e));
}
