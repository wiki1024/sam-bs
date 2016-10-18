import { present } from '../model'
import { clearMenuPure } from './globalAction'

export function toggleMenu(data) {
	var toggle=toggleMenuPure(data)
	var clear=clearMenuPure()
	present({ ...toggle, ...clear })
	return false
}

export function toggleMenuPure(data) {
	var proposal={ componentType:'Dropdown', id:data.id, payload:{ isOpen:data.isOpen } }
	return proposal
}

export function clickOptionPure(data) {
	var proposal={ componentType:'Dropdown', id:data.id, payload:{ isOpen:data.isOpen} }
	return proposal
}

export function clickOption(data) {
	var proposal={ componentType:'Dropdown', id:data.id, payload:{ isOpen:data.isOpen} }
	present(proposal)
	return false
}