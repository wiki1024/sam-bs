export function debounce(fn, delay){
    let timer = null
    return function(...args){
        clearTimeout(timer)
        timer = setTimeout(() => fn.apply(this, args), delay)
    }
}

export function throttle(fn, wait){
    let timer
    return function(...args){
        if(!timer){
            timer = setTimeout(()=>timer=null, wait)
            return fn.apply(this, args)
        }
    }
}