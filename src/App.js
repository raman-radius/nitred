import React from 'react';
import './App.css';
import { Provider } from 'react-redux';

import Feeds from './components/feeds';
import AppHeader from './components/appheader';
import redditStore from './stores/redditStore';
import appicon from './assets/reddit.png';

const store = redditStore();

export default class App extends React.Component {
	
	render(){
  		return (
		    <div className="App">
		    	<div className="app-nav"><img alt="app icon" src={appicon} /> nitred</div>
		    	<Provider store={store}>
		      		<AppHeader />
		      		<Feeds />
		     	</Provider>
		    </div>
		  );	
  	}
}




