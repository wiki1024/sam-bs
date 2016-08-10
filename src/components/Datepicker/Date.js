import React from 'react'
import classnames from 'classnames'

const Date = (props) => {

	let {id, date, month, selectDate} = this.props

	let classes = classnames('sd-date', {
      'current': date.month() === month,
      'future': date.month() > month,
      'past': date.month() < month
    })

	return (
      <div
        className={classes}
        onClick={ ()=> selectDate(date) }>
        {date.date()}
      </div>
    )
}

export default Date