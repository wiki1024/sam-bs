import React from 'react'
import classnames from 'classnames'


const Date = (props) => {

	let {id, date, month, selectDate, selected} = props

	let classes = classnames('date', {
      'current': date.month() === month,
      'future': date.month() > month,
      'past': date.month() < month,
      'selected': (date.date() === selected.date() && date.month() === selected.month() && date.year() === selected.year()),
    })

	return (
      <div
        className={classes}
        onClick={ ()=> selectDate({id:id,val:date}) }>
        {date.date()}
      </div>
    )
}

export default Date