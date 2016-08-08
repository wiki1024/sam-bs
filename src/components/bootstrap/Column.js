import React from 'react'
import classnames from 'classnames'

const prefix = 'col'
const DeviceSize = {
	lg:'lg',
	md:'md',
	sm:'sm',
	xs:'xs'
}
//config : {columns:int, offset:int, pull:int,push:int } 
//elementProps {lg:config,md:config, sm:config,xs:config }
function getColClass(elementProps) {
	let classes = []
	processSize(elementProps,'lg',classes)
	processSize(elementProps,'md',classes)
	processSize(elementProps,'sm',classes)
	processSize(elementProps,'xs',classes)
	return classes
}

function processSize(elementProps,type,classes) {
	if(elementProps[type] && elementProps[type]['col'])
	{

		let size = elementProps[type]
		let colSize=DeviceSize[type]
		let columns= size.col
		classes.push( `${ prefix }-${ colSize }-${ columns }` )
		if (size.offset)
			classes.push( `${ prefix }-${ colSize }-offset-${ size.offset }` )
		if (size.push)
			classes.push( `${ prefix }-${ colSize }-push-${ size.push }` )
		if (size.pull)
			classes.push( `${ prefix }-${ colSize }-pull-${ size.pull }` )
		delete elementProps[type] 
	}
}

export default class Column extends React.Component {
  
  render() {

  	const { className, ...elementProps} = this.props

  	let colClasses = getColClass(elementProps)

    return (
      <div { ...elementProps } className={ classnames(className,colClasses) } ></div>
    );
  }
}
