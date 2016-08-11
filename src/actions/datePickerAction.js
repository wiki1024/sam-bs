import { present } from '../model'

export function updateMonth(data) {
	present({ datePickerUpdateMonth:true, ...data  })
	return false
}

export function selectDate(data) {
	present({ datePickerSelectDate:true, ...data })
	return false		
}

export function toggleOpen(data) {
	present({ datePickerToggleOpen:true, ...data })
	return false		
}