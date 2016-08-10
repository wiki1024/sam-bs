import React from 'react'
import moment from 'moment'
import _ from 'lodash'
import Calendar from './Calendar'

const DatePicker = (props) =>{
	let {id, date, month, year, updateMonth, selectDate} = props
	let dates = generateDates(month,year)
	let calendar =( <Calendar month={month}
				        year={year}
				        dates={dates}
				        updateMonth={updateMonth}
				        selectDate={selectDate}
				        key="calendar" />)

	return (
			<div className="sd-datepicker">
	        	<input className="sd-input"
		          type="text"
		          readOnly/>
	          {calendar}
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
