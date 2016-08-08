import React from 'react'

// option { value:string|int, text:string, isSelected:bool }
// props { options:option[], display:string, isOpen:bool, toggleMenu:function }
const Selection =(props) =>{
	let { val, isOpen, options, path, toggleMenu, clickOption, id } = props
	let origin = {  isOpen,id,path }
	let display = 'Select ---'
	if(val) {
		display = options.find((ele)=>ele.value===val).text 
		if(val==='php(7)') display = 'php(7) NO.1'
	}
	let controlContent = (<div >{display}</div>)
	let menu = isOpen ? (<div> { buildMenu(options,clickOption,origin) }  </div> ) :null
	return (
		<div>

			<div onClick={ () => toggleMenu({id:id, isOpen:!isOpen})} >
		      	{controlContent}		   
        	</div>
        	{menu}
		</div>
	)
}

function buildMenu(options, clickOption, origin) {
	let optionResult = options.map((option) => buildOption(option,clickOption,origin))
	return optionResult
}

function buildOption(option, clickOption, origin) {
	// let optionClass = classNames({
	// 	[dpStyle.option]:true,
	// 	[dpStyle.isSelected]:option.isSelected
	// }) 
	return <div key={option.value} onClick={()=> clickOption({id:origin.id, isOpen:false, val:option.value, path:origin.path})  } > { option.text }  </div>
}

export default Selection

 	// <span className={ dpStyle.arrow } />