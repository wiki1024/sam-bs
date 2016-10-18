import { present } from '../model'
import { clearMenuPure } from './globalAction'

export function updateMonth(data) {
	present({ datePickerUpdateMonth:true, ...data  })
	return false
}

export function selectDate(data) {
	var clear=clearMenuPure()
	present({ datePickerSelectDate:true, ...data, ...clear })
	return false		
}

export function toggleOpen(data) {
	var clear=clearMenuPure()
	present({ datePickerToggleOpen:true, ...data,...clear })
	return false		
}