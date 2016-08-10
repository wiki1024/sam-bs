import React from 'react'
import Date from './Date'

const Month = (props) =>{

    return (
      <div className="sd-month">
        <ul className="sd-days">
          <li className="sd-day">Sun</li>
          <li className="sd-day">Mon</li>
          <li className="sd-day">Tue</li>
          <li className="sd-day">Wed</li>
          <li className="sd-day">Thu</li>
          <li className="sd-day">Fri</li>
          <li className="sd-day">Sat</li>
        </ul>

        {props.dates.map((date) => (<Date key={date} date={date} {...props} />))}
      </div>
    )

}

export default Month 