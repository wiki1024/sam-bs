import React from 'react'
import moment from 'moment'
import _ from 'lodash'
import Calendar from './Calendar'
import { Collapse } from 'react-bootstrap'
import { updateMonth, selectDate, toggleOpen } from '../../actions/datePickerAction'
import { debounce } from '../../util'
import Header from './header'
import Month from './month'
import classnames from 'classnames'

const DatePicker = (props) =>{
	let {id, date, month, year, isOpen} = props
	let dates = generateDates(month,year)
	let controlClass = classnames({
		'control-group':true,
		'focused':isOpen
	})
	return (
			<div className='datePicker' onClick={ (e)=>{ e.stopPropagation() } }>
				<span className={ controlClass } onClick = { (e) => { toggleOpen({id:id, isOpen:!isOpen});e.stopPropagation() } }>
		        	<input className='form-control'
					       type='text'
					       value={ date.format('MM/DD/YYYY') } />
			        <div className='input-group-addon'><i className='fa fa-calendar' aria-hidden='true'></i></div>
		        </span>
	       
		         
	      		<Collapse in= { isOpen }>
	      			<div className='calendar' >
						<Header month={month} id={id} 
								year={year}  
								updateMonth={debounce(updateMonth,100)}/>
						<Month  month={month} id={id} 
								year={year}
								dates={dates}
								selected= {date}
								selectDate={selectDate} key={month}/>
		          	 </div>
	      		</Collapse>
			     
	      	</div>
		)
}

function generateDates(month,year) {
	let firstDate = moment([year, month]).weekday(0)

    let dates = _.range(42).map((val, index) => {
      return firstDate.clone().add(index, 'd')
    })

    return dates
}
//
export default DatePicker
