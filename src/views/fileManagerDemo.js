import React from 'react';
import FileManager from '../components/FileManager/index'
import Row from '../components/bootstrap/Row'
import Column from '../components/bootstrap/Column'
import FluidContainer from '../components/bootstrap/FluidContainer'

export default function fileManagerDemo(viewModel){

	var { id, root } = viewModel.FileManager.fm1

	var files = [
					{ name:'name1',size:151, date:'date1' },
					{ name:'name2',size:152, date:'date2' },
					{ name:'name3',size:153, date:'date3' },
				]

	return (
		<FileManager id={id} root={root} files={files} />
	)
}