import React, { Component } from 'react';
import NumericLabel from 'react-pretty-numbers';
import moment from 'moment';

let params = {
  locales : 'en-AU',
  precision: 1,
  shortFormat: true,
  title: true,
};

export default class PostItem extends Component {
	constructor(props){
		super();
		this.state = {
			ups:props.itemData.ups,
			downs:props.itemData.downs,
			score:props.itemData.score
		}
	}
	render() {
		let itemData = this.props.itemData;
		return (
			<div className="post-container" onClick={()=>window.open(itemData.url,'_blank')}>
				<div className="post-votes" >
					<span>
						<i className="material-icons">arrow_upward</i>
						{this.state.score >999 ? <NumericLabel params={params}>{this.state.score}</NumericLabel>:<div>{this.state.score}</div>}
						<i className="material-icons">arrow_downward</i>
					</span>
				</div>
				<div className="post-attr">
					<img className="post-img" alt="no content" src={itemData.thumbnail} />
				</div>
				<div className="post-content">
					<label>Posted by:</label>
					<div className="author"> {itemData.author}  </div>
					<span style={{color:'grey'}}>{ moment(moment.unix(itemData.created_utc)).fromNow()}</span>
					<p>{itemData.title}</p>
					<div className="post-link">
						<a href={itemData.url}>{itemData.url}</a>
					</div>
					<span className="comment-count"> <i className="material-icons">comment</i> {itemData.num_comments} comments</span>
				</div>
			</div>
		);
	}
}
