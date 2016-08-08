import React from 'react'
import classnames from 'classnames'
// option { text:string, href:string }
// props { options:option[], caption:string, isOpen:bool, toggleMenu:function }
// mode : nav or button
const Dropdown =(props) =>{
	let { caption, mode, isOpen, options, toggleMenu, clickOption, id } = props
	let origin = {  isOpen,id }
	let display = caption ? caption : 'Dropdown'
	let btnClasses= {
		btn:true,
		'btn-default':true
	}

	let toggleButton = mode === 'nav' ? (<a href='#' onClick={ () => toggleMenu({id:id, isOpen:!isOpen})} > 
											{ display }
			    							<span className={ 'caret' }></span>
										</a>)
									  : (<button className = { classnames(btnClasses) } onClick={ () => toggleMenu({id:id, isOpen:!isOpen})} >
										    { display }
										    <span className={ 'caret' }></span>
										</button>)

	let wrapperClasses={
		dropdown:true,
		open: isOpen
	}
	let Component = mode === 'nav' ? 'li' : 'div'
	let menu = ( 
				<ul className={'dropdown-menu'}> 
					{ buildMenu(options,clickOption,origin) }  
				</ul> 
			   ) 
	return (
		<Component className = { classnames(wrapperClasses) }>
			{toggleButton}
        	{menu}
		</Component>
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
	let linkHref = option.href == null ? '#' : option.href
	return <li key={option.text} onClick={()=> clickOption({id:origin.id, isOpen:false})  } > <a href= { linkHref }> { option.text } </a> </li>
}

export default Dropdown

