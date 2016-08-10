import { present } from '../model'

export function windowResize() {
	present({ windowResize:true })
	return false
}