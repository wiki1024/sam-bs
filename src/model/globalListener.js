import { debounce, throttle} from '../util'
import { windowResize } from '../actions/globalAction'

window.addEventListener('resize',debounce(resizeHandler,500))


function resizeHandler(e) {

	windowResize();
}