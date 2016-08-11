import React, { Component } from 'react';
import Selection from '../components/Selection' 
import DatePicker from '../components/DatePicker/index'
import  bindDropdown from '../actions/bindSelection'
import  { toggleMenu } from '../actions/selectionAction'
import { updateMonth, selectDate } from '../actions/datePickerAction'

export default	function selectionList(viewModel) {
	
	// var options = viewModel.plList;

	// let dpPL1= viewModel.Selection.dpPL1
	// let dpPL2= viewModel.Selection.dpPL2
	// let dpPL3= viewModel.Selection.dpPL3
	// let dpPL4= viewModel.Selection.dpPL4
	// let dpPL5= viewModel.Selection.dpPL5
	// let dpPL6= viewModel.Selection.dpPL6
	// let dpPL7= viewModel.Selection.dpPL7
	// let dpPL8= viewModel.Selection.dpPL8
	// let dpPL9= viewModel.Selection.dpPL9
	let datePicker1 = viewModel.DatePicker.datePicker1

	return (
      <div>
       <DatePicker { ...datePicker1 } updateMonth={updateMonth} selectDate={selectDate}/>
	   
	  </div>
    )

}


   // <div>
	  //     	<Selection {...dpPL1} options={ options } toggleMenu={toggleMenu} clickOption={bindDropdown} />
	  //     	<Selection {...dpPL2} options={ options } toggleMenu={toggleMenu} clickOption={bindDropdown} />
	  //     	<Selection {...dpPL3} options={ options } toggleMenu={toggleMenu} clickOption={bindDropdown} />
	  //     	<Selection {...dpPL4} options={ options } toggleMenu={toggleMenu} clickOption={bindDropdown} />
	  //     	<Selection {...dpPL5} options={ options } toggleMenu={toggleMenu} clickOption={bindDropdown} />
	  //     	<Selection {...dpPL6} options={ options } toggleMenu={toggleMenu} clickOption={bindDropdown} />
	  //     	<Selection {...dpPL7} options={ options } toggleMenu={toggleMenu} clickOption={bindDropdown} />
	  //     	<Selection {...dpPL8} options={ options } toggleMenu={toggleMenu} clickOption={bindDropdown} />
	  //     	<Selection {...dpPL9} options={ options } toggleMenu={toggleMenu} clickOption={bindDropdown} />
	  //     </div>