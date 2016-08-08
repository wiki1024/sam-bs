import { present } from '../model'

export function toggleMenu(data) {
	var proposal=toggleMenuPure(data)
	present(proposal)
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