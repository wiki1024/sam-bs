import React from 'react'
import classnames from 'classnames'


export default class FluidContainer extends React.Component {


  render() {
 	const { className, ...elementProps} = this.props


    return (
      <div {...elementProps} className={ classnames('container-fluid',className) } >     	
      </div>
    )
  }
}