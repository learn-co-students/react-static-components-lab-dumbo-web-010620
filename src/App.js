import React, { Component } from 'react';
import CatComponent from './CatComponent.js'
import { GraceHopperQuoteComponent } from './GraceHopperQuoteComponent.js'
import MouseComponent from './MouseComponent.js'

class App extends Component {
	render() {
		// your code in the return statement below!
		return ( // // because GraceHopperQuoteComponent is not default exported, needs to be in { } in app.js importation.
			<div className="App">
				<CatComponent />
				<GraceHopperQuoteComponent /> 
				<MouseComponent />
				{/* one more component missing */}
			</div>
		);
	}
}

export default App;
