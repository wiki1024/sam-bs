import React from 'react';
import moment from 'moment'
import Header from './header'
import Month from './month'


const Calendar = (props)=>{

    return (
      <div className='calendar'>
     		<Header {...props} />
        	<Month {...props} key={props.month}/>
      </div>
    )

}

export default Calendar


//https://github.com/davidkpiano/react-simple-datepicker