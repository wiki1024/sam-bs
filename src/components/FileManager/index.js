import React from 'react'
import ReactDOM from 'react-dom';
import classnames from 'classnames'


class FileManager extends React.Component {

	componentDidMount() {
		let fmNode = ReactDOM.findDOMNode(this)
		let folderCellNode=fmNode.querySelector('.folder-cell')
		let folderNode=fmNode.querySelector('.folder')
		console.dir(folderNode)
		folderNode.style['width']=`${folderNode['scrollWidth'] + 20}px`
		folderCellNode.style['width']=`${fmNode['scrollWidth'] * 0.25}px`
		console.dir(folderNode)
	}

	// componentDidUpdate() {
	// 	let fmNode = ReactDOM.findDOMNode(this)
	// 	let folderCell=fmNode.querySelector('.folder-cell')
	// 	let folder=fmNode.querySelector('.folder')
	// }

	render() {
		let { id, root, files } = this.props

		return (
				<div className='fileManager' >
					<div className='control-container'>
							<div className="input-group custom-search-form">
	                            <input type="text" className="form-control" placeholder="Search..."/>
	                            <span className="input-group-btn">
		                            <button className="btn btn-default" type="button">
		                                <i className="fa fa-search"></i>
		                            </button>
	                        	</span>
	                        </div>
					</div>
					<div className='content-container'>
						<div className='folder-cell' >
							<div className='folder' ref={(c) =>{console.log('hehe'); console.dir(c)} } >
								{ renderFolderStructure(root,0) }
							</div>
						</div>
						<div className='divider'>
						</div>
						<div className='file-container' >
						<table className="table">
						    <thead>
						      <tr>
						      	<th>#</th>
						        <th>Name</th>
						        <th>Size</th>
						        <th>Modify Date</th>
						      </tr>
						    </thead>
						    <tbody>
								{ renderFiles(files) }
						    </tbody>
						  </table>
						</div>
					</div>
				</div>
		)
	}

}


//node { data:{ dispaly, name, isActive }, files:Array<file>, children:Array<node>}
//root { id, ...node }
function renderFolderStructure(folderNode, level=0) {
	let hasChildren = Array.isArray(folderNode.children) && folderNode.children.length >0
	let padding = (level+1) * 25
	let style = {
		'paddingLeft':`${padding}px`
	}
	return (
		<ul className='nav'>
			<li>
				<a style={style} href='#' ><i className="fa fa-folder-o" aria-hidden="true"></i>{ folderNode.data.display }</a>
				{
					(
						() => {
							if(hasChildren){
								let nextlevel = level+1
								return folderNode.children.map(
									(folder) => { 
										return renderFolderStructure(folder,nextlevel) 
									} )
							}
						}
					)()
				}
			</li>
		</ul>
	)
}

//file { uid, name,size,date }
//
function renderFiles(files) {
 	if(Array.isArray(files) && files.length >0){
 		return files.map((file) =>{
 			return (
 				<tr>
 					<td><i className="fa fa-file-pdf-o" aria-hidden="true"></i></td>
 					<td>{ file.name }</td>
 					<td>{ file.size }</td>
 					<td>{ file.date }</td>
 				</tr>
 			)
 		})
 	}
 } 

 export default FileManager