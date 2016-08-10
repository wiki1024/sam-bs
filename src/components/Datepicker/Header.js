import React from 'react'
import moment from 'moment'

const Header = (props)=>{
	let {id, month, year, updateMonth} = props
	return (
		 <div className="sd-header">
	        <button className="sd-button" onClick={()=>updateMonth({id:id,val:-1})}>&laquo;</button>
	          <h3 className="sd-heading">{moment().month(month).format('MMMM')} {year}</h3>
	        <button className="sd-button" onClick={()=>updateMonth({id:id,val:1})}>&raquo;</button>
     	 </div>
		)
}

export default Header