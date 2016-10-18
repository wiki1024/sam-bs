import React, { Component } from 'react'
import FluidContainer from './components/bootstrap/FluidContainer'
import Row from './components/bootstrap/Row'
import Column from './components/bootstrap/Column'
import { clearMenu } from './actions/globalAction'

export default class App extends Component {
  render() {
    let {router,fileManagerDemo,selectionList,simpleDropdown} = this.props
    return (
      <div id='wrapper' onClick={ (e) => clearMenu() } >
       { this.props.navbar }
       <div id= 'page-wrapper' >
          <FluidContainer >
          	<Row>
    	      	<Column md={ { col: 5, offset:1 } } >
    	      		{ 
                  (() =>{
                    if(router==='fileManagerDemo'){
                      return fileManagerDemo
                    }
                    else{
                      return selectionList
                    }
                  })()
                }
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
