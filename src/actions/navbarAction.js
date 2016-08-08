import { present } from '../model'

export function toggleNavCollapse() {
	present({ toggleNavCollapse:true })
	return false
}

export function toggleSideBarAcive(path){
	present( { toggleSideBarAcive:path } )
	return false
}