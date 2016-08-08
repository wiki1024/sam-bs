import { clickOptionPure } from './selectionAction'
import { present } from '../model'

export default function bindDropdown(data) {
	let path = data.path
	let proposal = clickOptionPure(data)
	proposal = { ...proposal, bindToPath:path }
	present(proposal)
	return false

}