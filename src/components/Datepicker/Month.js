import React from 'react'
import Date from './Date'

const Month = (props) =>{

    return (
      <div className="month">
        <ul className="days">
          <li className="day">Sun</li>
          <li className="day">Tue</li>
          <li className="day">Mon</li>
          <li className="day">Wed</li>
          <li className="day">Thu</li>
          <li className="day">Fri</li>
          <li className="day">Sat</li>
        </ul>

        {props.dates.map((date) => (<Date key={date} date={date} {...props} />))}
      </div>
    )

}

export default Month 