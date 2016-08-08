import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import selectionList from './selectionList'
// import menu from './menu'
import navbar from './navbar'

export default function view(viewModel) {

	ReactDOM.render(<App 
		selectionList={ selectionList(viewModel) } 
		navbar = { navbar(viewModel) }

		/>, document.getElementById('root'))

}