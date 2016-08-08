import React from 'react'
import classnames from 'classnames'

export default class Row extends React.Component {
 
  render() {

  	const { className, ...elementProps} = this.props

    return (
      <div {...elementProps} className={ classnames('row',className) }></div>
    )
  }
}
