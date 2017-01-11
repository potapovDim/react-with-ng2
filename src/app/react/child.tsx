import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Injector } from "@angular/core" 

interface ReactChildComponentViewProps {
   title: String;
}

var ReactChildComponent = React.createClass<ReactChildComponentViewProps, any>({
	render: function() {
		console.log('im render !!!!!!!!!')
		var styles = { 'paddingTop': '20px' };
		return(
		   <div>
		   		<h1>ReactComponent</h1>
		   </div>
		);
	}
});

export class ReactChildComponentView {

	static initialize(containerId: string,injector: Injector) {
		ReactDOM.render(<ReactChildComponent title={"test"}/>, document.getElementById(containerId));
	}
}
