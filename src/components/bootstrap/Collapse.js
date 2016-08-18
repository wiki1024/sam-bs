import React from 'react'
import ReactDOM from 'react-dom';
import {Motion, spring} from 'react-motion';

export default class Collapse extends React.Component{
	constructor(props) {
    	super(props)

    	this.getHeight=this.getHeight.bind(this)
    	this.onReset=this.onReset.bind(this)
	}

	componentDidMount() {
		let { level } = this.props
		
		console.log('mount'+level)
		this._self = ReactDOM.findDOMNode(this)
		this._content = this._self.firstElementChild
	}



	// componentDidUpdate(prevProps,prevState){
	// 	this._content['height']=null
	// }

	getHeight() {
		return this._content.scrollHeight
	}

	onReset() {
		if(this._self.clientHeight>0){

		this._self.style['height']=null
		}
	}

	render() {
		let { isOpen, children } = this.props
		let child = React.Children.only(children) 
		// let clone = React.cloneElement(child,{forceParentUpdate:this.forceUpdate})
		return (
				 <Motion style={{h: spring(!isOpen ? 0 : this.getHeight())}} onRest={ ()=>{ this.onReset() } }>
		         {
		           ({h}) =>

		            <div className='motion-collapse' style={ {height:h} } >
		              { child }
		           </div>
		         }
		        </Motion>
			)
	}
}