import { present } from '../model'

export function windowResize() {
	present({ windowResize:true })
	return false
}

export function clearMenuPure() {
	return { clearMenu:true }
}

export function clearMenu() {
	present(clearMenuPure())
	return false
}