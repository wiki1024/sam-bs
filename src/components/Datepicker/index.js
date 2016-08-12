import React from 'react'
import moment from 'moment'
import _ from 'lodash'
import Calendar from './Calendar'
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { Collapse } from 'react-bootstrap'
import { updateMonth, selectDate, toggleOpen } from '../../actions/datePickerAction'
import { debounce } from '../../util'
import Header from './header'
import Month from './month'

const DatePicker = (props) =>{
	let {id, date, month, year, isOpened} = props
	let dates = generateDates(month,year)

	return (
			<div className="datePicker">
				<div className="control-group" onClick = { () => toggleOpen({id:id}) }>
	        	<input className="form-control"
		          type="text"
		          value={ date.format('MM/DD/YYYY') } />
		          <div className="input-group-addon"><i className="fa fa-calendar" aria-hidden="true"></i></div>
		          </div>
	       
		         
		      		<Collapse in= { isOpened }>
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

export default DatePicker
