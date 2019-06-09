import React from 'react';
import PostItem from './postitem';
import { connect } from 'react-redux';
import { fetchPosts } from './../actions/redditActions';

class Feeds extends React.Component {
	constructor(){
		super();
		this.state = {
			results:[]
		}
	}

	componentWillReceiveProps(nextProps){
		if(this.props.subreddit !== nextProps.subreddit){
			this.props.getPosts(nextProps.subreddit);
		}else if(this.props.posts !== nextProps.posts){
			this.setState({
				results:nextProps.posts
			})
		}
	}

	render(){
		let noDataText = <p>No items in Feeds !</p>;
		return (
			<React.Fragment>
				<div className="app-body">
					<div className="subreddit-title">{this.props.subreddit}</div>
					<div className="feed-container">
					{this.state.results && this.state.results.length>0 ? this.state.results.map((item)=><PostItem key={item.data.created_utc} itemData={item.data} />) : noDataText}
					</div>
				</div>
			</React.Fragment>
		)
		
	}

}

const mapStateToProps = (state) => {
	return {
  		subreddit: state.item.subreddit,
  		posts:state.item.posts
	}
}

const mapDispatchToProps = {
  getPosts: fetchPosts
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Feeds)

