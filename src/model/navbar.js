
export function navbarSetup(model) {
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
										 	{ text:'Second Third 1',href:'#', isActive:false },
										 	{ text:'Second Third 2',href:'#', isActive:false },
										 	{ text:'Second Third 3',href:'#', isActive:false },
										 	{ text:'Second Third 4',href:'#', isActive:false }
										 ] }
									 ] }
					}

	model.sidebar.FirstLevels= [ 'dashborad','charts','tables','forms','multiLevel','secondMultiLevel' ]

	model.sidebar.CurrentTabPath = 'dashborad'
}

export function getFirstLevel(path) {
	var index=path.indexOf('.')
	if(index===-1){
		return path
	}
	else{
		return path.slice(0,index)
	}
}

export function closeMenu(menu) {
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

export function deActiveItems(menu) {
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