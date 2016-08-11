import React from 'react'
import moment from 'moment'
import _ from 'lodash'
import Calendar from './Calendar'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { updateMonth, selectDate, toggleOpen } from '../../actions/datePickerAction'

const DatePicker = (props) =>{
	let {id, date, month, year, isOpened} = props
	let dates = generateDates(month,year)
	let calendar = isOpened ? ( <Calendar month={month} id={id}
				        year={year}
				        dates={dates}
				        updateMonth={updateMonth}
				        selectDate={selectDate}
				        key="calendar" />) : null

	return (
			<div className="datePicker">
				<div className="control-group" onClick = { () => toggleOpen({id:id}) }>
	        	<input className="form-control"
		          type="text"
		          value={ date.format('MM/DD/YYYY') } />
		          <div className="input-group-addon"><i className="fa fa-calendar" aria-hidden="true"></i></div>
		          </div>
	       
		         
		      		<ReactCSSTransitionGroup transitionName="calendar" 
		      			transitionEnterTimeout={500} transitionLeaveTimeout={300}>
			           {calendar}
			        </ReactCSSTransitionGroup>
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
