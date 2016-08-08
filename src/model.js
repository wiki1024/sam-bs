import state from './state'
import objectPath from 'object-path'

let model = { }
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


model.Selection={ } 
model.Dropdown = { }
model.sampleModel= { }

model.navbar = {
	collapseIn:false,
	brand:{
		href:'#heheHref',
		text:'Brand'
	},
	main:[
		{ text:'Package', href:'#' ,onClick: ()=>{ console.log('hehe link click') } },
		{ text:'Lanch', href:'#navhref' },
		{ text: 'Request', href:'#' },
		{ dropdown:'dropdown1'}

	],
	// left:[
	// 	{ text:'LeftPackage', href:'#' ,onClick: ()=>{ console.log('hehe link click') } },
	// 	{ text:'LeftLanch', href:'#navhref' },
	// 	{ text:'LeftRequest', href:'#' },
	// 	{ dropdown:'dropdown1'}
	// ],
	right:[
		{ text:'RightPackage', href:'#' ,onClick: ()=>{ console.log('hehe link click') } },
		// { text:'RightLanch', href:'#navhref' },
		// { text:'RightRequest', href:'#' },
		{ dropdown:'dropdown1'}
	],
	form:{
		align:'left',
		group:[
			// { type:'text', placeholder:'Search', onChange: (e) => { console.log(e) }},
			// { type:'submit', text:'Submit', className:'btn btn-default'}
		]
	}
}

model.sidebar = {
	dashborad:{ path:'dashborad', text:'Dashborad', href:'index.html', isOpen:false, icon:'fa-dashboard',items:[], isActive:true, isMenu:true },
	charts:{ path:'charts', 
			 text:'Charts', href:'#', isOpen:false, icon:'fa-bar-chart-o', isActive:false, isMenu:true,
			 items:[
			 	{ text:'Flot Charts',href:'#', isActive:false },
			 	{ text:'Morris.js Charts',href:'#', isActive:false }
			 ] },
	tables:{ path:'tables', text:'Tables', href:'Tables.html', isOpen:false, icon:'fa-table',items:[] ,isActive:false, isMenu:true},
	forms:{ path:'forms', text:'Forms', href:'Forms.html', isOpen:false, icon:'fa-edit',items:[],isActive:false, isMenu:true },
	multiLevel:{ path:'multiLevel',
				 text:'Multi-Level Dropdown', href:'#', isOpen:false, icon:'fa-sitemap',isActive:false,isMenu:true,
				 items:[
				 	{ text:'Second Level Item 1',href:'#', isActive:false },
			 		{ text:'Second Level Item 2',href:'#', isActive:false },
					{ path:'multiLevel.items.2', 
					 text:'Thrid Level', href:'#', isOpen:false, icon:null,  isMenu:true,
					 items:[
					 	{ text:'Third Level Item 1',href:'#', isActive:false },
					 	{ text:'Third Level Item 2',href:'#', isActive:false },
					 	{ text:'Third Level Item 3',href:'#', isActive:false },
					 	{ text:'Third Level Item 4',href:'#', isActive:false }
					 ] }
				 ] },
	secondMultiLevel:{ path:'secondMultiLevel',
				 text:'Second Multi-Level', href:'#', isOpen:false, icon:'fa-sitemap',isActive:false,isMenu:true,
				 items:[
				 	{ text:'Second Second Level Item 1',href:'#', isActive:false },
			 		{ text:'Second Second Level Item 2',href:'#', isActive:false },
					{ path:'secondMultiLevel.items.2', 
					 text:'Thrid Level', href:'#', isOpen:false, icon:null,  isMenu:true,
					 items:[
					 	{ text:'Second Third Level Item 1',href:'#', isActive:false },
					 	{ text:'Second Third Level Item 2',href:'#', isActive:false },
					 	{ text:'Second Third Level Item 3',href:'#', isActive:false },
					 	{ text:'Second Third Level Item 4',href:'#', isActive:false }
					 ] }
				 ] }
}

model.sidebar.FirstLevels= [ 'dashborad','charts','tables','forms','multiLevel','secondMultiLevel' ]

model.sidebar.CurrentTabPath = 'dashborad'
// proposal { ...metainfo, payload}
model.present = function(proposal) {
    // Logic that accepts or rejects the proposed values
    // ...
    if (proposal.componentType==='Selection' && proposal.id) {
    	let origin = model.Selection[proposal.id]
    	model.Selection[proposal.id] = { ...origin, ...proposal.payload }
    }

    if (proposal.componentType==='Dropdown' && proposal.id) {
    	let origin = model.Dropdown[proposal.id]
    	model.Dropdown[proposal.id] = { ...origin, ...proposal.payload }
    }

    if(proposal.bindToPath){
    	objectPath.set(model,proposal.bindToPath,proposal.payload.val)
    }

    if(proposal.toggleNavCollapse){
    	model.navbar.collapseIn = !model.navbar.collapseIn
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
    // -> Reactive Loop
    state(model) 
    
    // persist the new state
    // this is generally guarded and optimized
    model.persist() 
} 

model.persist = function() {

}

function init() {

	model.Selection.dpPL1= { id:'dpPL1', isOpen: false, val:null, path:'sampleModel.pl1' }
	model.Selection.dpPL2= { id:'dpPL2', isOpen: false, val:null, path:'sampleModel.pl2' }
	model.Selection.dpPL3= { id:'dpPL3', isOpen: false, val:null, path:'sampleModel.pl3' }
	model.Selection.dpPL4= { id:'dpPL4', isOpen: false, val:null, path:'sampleModel.pl4' }
	model.Selection.dpPL5= { id:'dpPL5', isOpen: false, val:null, path:'sampleModel.pl5' }
	model.Selection.dpPL6= { id:'dpPL6', isOpen: false, val:null, path:'sampleModel.pl6' }
	model.Selection.dpPL7= { id:'dpPL7', isOpen: false, val:null, path:'sampleModel.pl7' }
	model.Selection.dpPL8= { id:'dpPL8', isOpen: false, val:null, path:'sampleModel.pl8' }
	model.Selection.dpPL9= { id:'dpPL9', isOpen: false, val:null, path:'sampleModel.pl9' }


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


	 state(model) 
}

let present = model.present


function getFirstLevel(path) {
	var index=path.indexOf('.')
	if(index===-1){
		return path
	}
	else{
		return path.slice(0,index)
	}
}

function closeMenu(menu) {
	menu.isActive=false
	menu.isOpen=false
	menu.items.forEach((ele)=>{
		if(ele.isMenu){
			closeMenu(ele)
		}
		else{
			ele.isActive=false
		}
	})
}

function deActiveItems(menu) {
	menu.items.forEach((ele)=>{
		if(ele.isMenu){
			ele.isActive=false
			deActiveItems(ele)
		}
		else{
			ele.isActive=false
		}
	})
}

export  { present, init }
export default model 
