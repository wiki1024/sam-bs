import React, { Component } from 'react';
import Row from '../components/bootstrap/Row'
import Column from '../components/bootstrap/Column'
import Dropdown from '../components/bootstrap/Dropdown'
import  { toggleMenu,clickOption } from '../actions/dropdownAction'

export default	function menu(viewModel) {
	
	let menuModel = viewModel.menu;

	let dropdown1=viewModel.Dropdown.dropdown1

	return (
      <Row>
      	<Column md={ { col:3 } }>
      		<Dropdown { ...dropdown1 } toggleMenu={toggleMenu} clickOption={clickOption} />
      	</Column>
      </Row>
    )

}