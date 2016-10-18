import React from 'react'
import classnames from 'classnames'
// option { value:string|int, text:string }
// props { options:option[], display:string, isOpen:bool, toggleMenu:function }
const Selection =(props) =>{
	let { id, val, isOpen, options, filter ,path, toggleMenu, clickOption, updateFilterOption } = props
	let origin = {  isOpen,id,path,val,filter }
	let display
	if(!isOpen){	
		display = 'Select ---'	
		if(val) {
		let selectedOption=options.find((ele)=>ele.value===val)
		if(selectedOption !== undefined){			
			display = selectedOption.text
		}
		if(val==='php(7)') display = 'php(7) NO.1'
	}
	}
	else{
		display = filter || ''
		if(filter === null && val != null){
			let selectedOption=options.find((ele)=>ele.value===val)
			if(selectedOption !== undefined){			
				display = selectedOption.text
			}
			if(val==='php(7)') display = 'php(7) NO.1'
		}
	}


	let controlClass = classnames({
		'control-group':true,
		'focused':isOpen
	})
	let icon = classnames({
		fa:true,
		'fa-angle-up':isOpen,
		'fa-angle-down':!isOpen,
	})
	let menu = isOpen ? (<div className='menu'> { buildMenu(options,clickOption,origin) }  </div> ) :null
	return (
		<div className='selection'>

			<span className={ controlClass } onClick={ (e) => { 
				if(!isOpen) { toggleMenu({id:id, isOpen:!isOpen}) }
				e.stopPropagation()
				 }} >
		      	<input className='form-control'
					       type='text'
					       value= { display } onChange={ (e) => updateFilterOption({id:id,filter:e.target.value}) } />
			        <div className='input-group-addon'><i className={icon} aria-hidden='true'></i></div>	   
        	</span>
        	{menu}
		</div>
	)
}

function buildMenu(options, clickOption, origin) {
	if(origin.filter === 'php'){
		options = options.filter( (e)=>e.value === 'php(7)')
	}
	else{
		if(origin.filter){
			options = options.filter( (e)=>e.text.startsWith(origin.filter))	
		}
	}
	
	let optionResult = options.map((option) => buildOption(option,clickOption,origin))
	return optionResult
}

function buildOption(option, clickOption, origin) {
	let optionClass = classnames({
		option:true,
		selected:option.value===origin.val
	}) 
	return <div className={ optionClass } key={option.value} onClick={(e)=> {clickOption({id:origin.id, isOpen:false, val:option.value, path:origin.path}); e.stopPropagation() }  } > { option.text }  </div>
}

export default Selection

 	// <span className={ dpStyle.arrow } />