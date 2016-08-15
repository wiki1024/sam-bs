import React, { Component } from 'react'
import FluidContainer from './components/bootstrap/FluidContainer'
import Row from './components/bootstrap/Row'
import Column from './components/bootstrap/Column'

export default class App extends Component {
  render() {
    return (
      <div id='wrapper' >
       { this.props.navbar }
       <div id= 'page-wrapper' >
          <FluidContainer className={ 'hehe' }>
          	<Row>
    	      	<Column md={ { col: 3, offset:3 } } >
    	      		{ this.props.selectionList }
    	      	</Column>
          	</Row>  	
          </FluidContainer>
      </div>
    </div>
    )
  }
}


// <Row>
// 	 <Col md={ { columns:9,push:3 }} >.col-md-9 .col-md-push-3</Col>
// 	 <Col md={ { columns:3,pull:9 }}>.col-md-3 .col-md-pull-9</Col>
// </Row>
