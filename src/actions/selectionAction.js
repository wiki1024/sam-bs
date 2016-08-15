import { present } from '../model'

export function toggleMenu(data) {
	var proposal=toggleMenuPure(data)
	present(proposal)
	return false
}

export function toggleMenuPure(data) {
	var proposal={ selectiontoggleMenu:true, ...data }
	return proposal
}

export function clickOptionPure(data) {
	var proposal={ selectionClickOption:true, ...data }
	return proposal
}

export function clickOption(data) {
	var proposal=clickOptionPure(data)
	present(proposal)
	return false
}

export function updateFilterOption(data) {
	var proposal={ selectionUpdateFilterOption:true, ...data }
	present(proposal)
	return false
}