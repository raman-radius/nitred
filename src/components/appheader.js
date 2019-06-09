import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts,setSubreddit } from './../actions/redditActions';
import Select from 'react-select';

const subredditOptions = [{value:'alternative',label:'r/alternative'},
			{value:'pics',label:'r/pics'},
			{value:'gifs',label:'r/gifs'},
			{value:'advice',label:'r/advice'},
			{value:'animals',label:'r/animals'},
			{value:'cats',label:'r/cats'},
			{value:'images',label:'r/images'},
			{value:'photoshop',label:'r/photoshop'},
			{value:'battles',label:'r/battles'},
			{value:'hmmm',label:'r/hmmm'},
			{value:'all',label:'r/all'},
			{value:'aww',label:'r/aww'}
		];

class AppHeader extends React.Component {

	constructor(){
		super();
		this.state = {
			selectedOption : subredditOptions[0]
		}
	}

	componentDidMount(){
		this.props.setSubreddit(this.state.selectedOption)
	}

	componentWillReceiveProps(nextProps){
		if(this.props.subreddit !== nextProps.subreddit){
			this.props.getPosts(nextProps.subreddit);		
		}
		
	}
	

	handleChange = (selectedOption) => {
		this.props.setSubreddit(selectedOption)
		this.setState({selectedOption})
	};

	render(){
		return (<div className="app-header">
					<span>{this.props.loader ? 'Loading..' : null }</span>
					<Select options={subredditOptions} 
							defaultValue={this.state.selectedOption}
							onChange={this.handleChange}
							className="subreddit-select"
					></Select>
				</div>);

	}

}

const mapStateToProps = (state) => ({
  subreddit: state.item.subreddit,
  loader:state.item.loading
})

const mapDispatchToProps = (dispatch, ownProps) => ({
	getPosts: fetchPosts,
  	setSubreddit: (selectedOption) => {
    	dispatch(setSubreddit(selectedOption.value));
}
})

export default connect(
	mapStateToProps,
  	mapDispatchToProps
)(AppHeader)


