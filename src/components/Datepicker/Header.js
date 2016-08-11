import React from 'react'
import moment from 'moment'

const Header = (props)=>{
	let {id, month, year, updateMonth} = props
	return (
		 <div className="header">
	        <a className="prev" onClick={()=>updateMonth({id:id,val:-1})} ><i className="fa fa-caret-left"></i></a>
	          <span className="sd-heading">{moment().month(month).format('MMMM')} {year}</span>
	       	 <a className="next" onClick={()=>updateMonth({id:id,val:1})}><i className="fa fa-caret-right" ></i></a>
     	 </div>
		)
}

export default Header