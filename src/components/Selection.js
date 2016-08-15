import React from 'react'
import classnames from 'classnames'
// option { value:string|int, text:string }
// props { options:option[], display:string, isOpened:bool, toggleMenu:function }
const Selection =(props) =>{
	let { id, val, isOpened, options, filter ,path, toggleMenu, clickOption, updateFilterOption } = props
	let origin = {  isOpened,id,path,val,filter }
	let display
	if(!isOpened){	
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
		'focused':isOpened
	})
	let icon = classnames({
		fa:true,
		'fa-angle-up':isOpened,
		'fa-angle-down':!isOpened,
	})
	let menu = isOpened ? (<div className='menu'> { buildMenu(options,clickOption,origin) }  </div> ) :null
	return (
		<div className='selection'>

			<span className={ controlClass } onClick={ () => toggleMenu({id:id})} >
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
	return <div className={ optionClass } key={option.value} onClick={()=> clickOption({id:origin.id, isOpened:false, val:option.value, path:origin.path})  } > { option.text }  </div>
}

export default Selection

 	// <span className={ dpStyle.arrow } />