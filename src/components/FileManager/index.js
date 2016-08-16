import React from 'react'
import classnames from 'classnames'

const FileManager = (props) => {
	let { id, root, files } = props

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
					<div className='folder' >
						{ renderFolderStructure(root) }
					</div>
					<div className='divider'>
					</div>
					<div className='file-conainer' >
					<table className="table table-bordered">
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


//node { data:{ dispaly, name, isActive }, files:Array<file>, children:Array<node>}
//root { id, ...node }
function renderFolderStructure(folderNode, level=0) {
	let hasChildren = Array.isArray(folderNode.children) && folderNode.children.length >0
	return (
		<ul>
			<li>
				<a href='#' ><i className="fa fa-folder-o" aria-hidden="true"></i>{ folderNode.data.display }</a>
				{
					(
						() => {
							if(hasChildren){
								return folderNode.children.map(
									(folder) => { 
										return renderFolderStructure(folder,level++) 
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