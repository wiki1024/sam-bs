import state from '../state'
import objectPath from 'object-path'
import { navbarSetup, getFirstLevel, closeMenu, deActiveItems } from './navbar'
import moment from 'moment'
let model = { }

model.moment=moment
window.model = model


model.plList= [
	{ text:'javascript', value:'js' },
	{ text:'java', value:'j8' },
	{ text:'scala', value:'sc' },
	{ text:'python', value:'py' },
	{ text:'c sharp', value:'cs' },
	{ text:'c++', value:'cpp' },
	{ text:'the best programming language', value:'php(7)' },
	{ text:'VB', value:'VB' },
	{ text:'Ruby', value:'Ruby' },
	{ text:'Swift', value:'Swift' },
	{ text:'Groovy', value:'Groovy' },
	{ text:'Rust', value:'Rust' },
]

model.viewMode= window.innerWidth < 768 ? 'mobile' : 'normal'

model.Selection={ } 
model.Dropdown = { }
model.sampleModel= { }
model.DatePicker = { }
model.FileManager = { }
model.router = 'fileManagerDemo'

navbarSetup(model)
// proposal { ...metainfo, payload}
model.present = function(proposal) {
    // Logic that accepts or rejects the proposed values
    // ...
    if(proposal.selectiontoggleMenu) {
    	let id =proposal.id
    	model.Selection[id].isOpened = !model.Selection[id].isOpened
        if(model.Selection[id].isOpened === false){
            model.Selection[id].filter=null
        }
    }

    if(proposal.selectionClickOption) {
        let { id, val } = proposal
        model.Selection[id].isOpened = false
        model.Selection[id].val = val
        model.Selection[id].filter=null
    }

    if(proposal.selectionUpdateFilterOption){
        let {id, filter} = proposal
         model.Selection[id].filter = filter
    }

    if(proposal.componentType==='Dropdown' && proposal.id) {
    	let origin = model.Dropdown[proposal.id]
    	model.Dropdown[proposal.id] = { ...origin, ...proposal.payload }
    }

    if(proposal.bindToPath){
    	objectPath.set(model,proposal.bindToPath,proposal.val)
    }

    if(proposal.toggleNavCollapse){
    	model.navbar.collapseIn = !model.navbar.collapseIn
    }

    if(proposal.windowResize){
    	model.viewMode= window.innerWidth < 768 ? 'mobile' : 'normal'
    }

    if(proposal.toggleSideBarAcive){
    	let path=proposal.toggleSideBarAcive
    	let newTab=objectPath.get(model.sidebar,path)
    	let oldPath=model.sidebar.CurrentTabPath
    	// check if in the same first level
    	// if not, close original one
    	let newFirstLevel=getFirstLevel(path)
    	let oldFirstLevel=getFirstLevel(oldPath)
    	if(newFirstLevel !== oldFirstLevel){
    		closeMenu(model.sidebar[oldFirstLevel])
    	}
    	//if menu, if open now, close it self and every thing inside, if close now open itself, 
    	// if item, set all items in the first level to false, set current to true
    	if(newTab.isMenu){
    		if(newTab.isOpen){
    			closeMenu(newTab)
    		}
    		else{
    			newTab.isOpen=true
    			newTab.isActive=true
    			model.sidebar.CurrentTabPath=path
    		}
    	}
    	else{
    		deActiveItems(model.sidebar[newFirstLevel])
    		newTab.isActive=true
    		model.sidebar.CurrentTabPath=path
    	}
        
    }

    if(proposal.datePickerSelectDate){
        let { id, val } = proposal
        model.DatePicker[id].date = val

    }

    if(proposal.datePickerUpdateMonth){
        let { id, val } = proposal
        let { year, month } = model.DatePicker[id]
        if(val===-1){
            month-- 
            if (month <0){
                month = month + 12
                year--
            }
        }
        else{
            month++
            if(month >= 12){
                month %= 12
                year++
            }
        }
        model.DatePicker[id].month = month
        model.DatePicker[id].year = year

    }

    if(proposal.datePickerToggleOpen){
        let { id, val } = proposal
        model.DatePicker[id].isOpened = !model.DatePicker[id].isOpened
    }

    // -> Reactive Loop
    state(model) 
    
    // persist the new state
    // this is generally guarded and optimized
    model.persist() 
} 

model.persist = function() {

}

function init() {

	model.Selection.dpPL1= { id:'dpPL1', isOpened: false, val:null, path:'sampleModel.pl1' }
	model.Selection.dpPL2= { id:'dpPL2', isOpened: false, val:null, path:'sampleModel.pl2' }
	model.Selection.dpPL3= { id:'dpPL3', isOpened: false, val:null, path:'sampleModel.pl3' }
	model.Selection.dpPL4= { id:'dpPL4', isOpened: false, val:null, path:'sampleModel.pl4' }
	model.Selection.dpPL5= { id:'dpPL5', isOpened: false, val:null, path:'sampleModel.pl5' }
	model.Selection.dpPL6= { id:'dpPL6', isOpened: false, val:null, path:'sampleModel.pl6' }
	model.Selection.dpPL7= { id:'dpPL7', isOpened: false, val:null, path:'sampleModel.pl7' }
	model.Selection.dpPL8= { id:'dpPL8', isOpened: false, val:null, path:'sampleModel.pl8' }
	model.Selection.dpPL9= { id:'dpPL9', isOpened: false, val:null, path:'sampleModel.pl9' }

    let today= moment()
    model.DatePicker.datePicker1 = { id:'datePicker1', date:today , month:today.month(),year:today.year(), isOpened:false}


	let dropdown1=	{
						id:'dropdown1',
						caption: 'Dropdown',
						isOpen : false,
						options:[
									{ text:'Action' },
									{ text:'Another Action' },
									{ text:'Something Else' }
								]
					}

	model.Dropdown.dropdown1= dropdown1

    initFileManager()

	 state(model) 
}

let present = model.present


function initFileManager() {
    let fm1 = { id:'fm1' }
    let root = { data:{ display:'root' } }
    let r1_1 = { data:{ display:'r1_1' } }
    let r1_2 = { data:{ display:'r1_2' } }
    let r1_3 = { data:{ display:'r1_3' } }
    root.children = [r1_1,r1_2,r1_3]
    let r1_1_1 = { data:{ display:'r1_1_1' } }
    let r1_1_2 = { data:{ display:'r1_1_2' } }
    let r1_1_3 = { data:{ display:'r1_1_3' } }
    let r1_2_1 = { data:{ display:'r1_2_1' } }
    let r1_2_2 = { data:{ display:'r1_2_2' } }
    let r1_2_3 = { data:{ display:'r1_2_3' } }
    let r1_3_1 = { data:{ display:'r1_3_1' } }
    let r1_3_2 = { data:{ display:'r1_3_2' } }
    let r1_3_3 = { data:{ display:'r1_3_3' } }
    r1_1.children=[r1_1_1,r1_1_2,r1_1_3]
    r1_2.children=[r1_2_1,r1_2_2,r1_2_3]
    r1_3.children=[r1_3_1,r1_3_2,r1_3_3]
    fm1.root = root
    model.FileManager.fm1 = fm1

}

export  { present, init }
export default model 
