import classnames from 'classnames'
import React, { Component } from 'react'
import Row from '../components/bootstrap/Row'
import Column from '../components/bootstrap/Column'
import Dropdown from '../components/bootstrap/Dropdown'
import FluidContainer from '../components/bootstrap/FluidContainer'
import  { toggleMenu,clickOption } from '../actions/dropdownAction'
import  { toggleNavCollapse, toggleSideBarAcive } from '../actions/navbarAction'

export default	function navbar(viewModel) {
	
	let navModel = viewModel.navbar;
  let { text:brandtext, img: brandimg, href:brandhref} = navModel.brand
  let collapseClassName = classnames({
    collapse:true,
    'navbar-collapse':true,
    in:navModel.collapseIn
  })
	return (
      <nav className={ 'navbar navbar-default navbar-static-top' } >

            <div className={ 'navbar-header' } >
              <button type={ 'button' } className = { 'navbar-toggle' } onClick = { toggleNavCollapse }>
                <span className={ 'sr-only' }>Toggle navigation</span>
                <span className={ 'icon-bar' }> </span>
                <span className={ 'icon-bar' }> </span>
                <span className={ 'icon-bar' }> </span>
              </button>
              <a className={ 'navbar-brand' } href = { brandhref }> { brandtext } </a>
            </div>

             <div className = { collapseClassName } >
              { renderNavbarPortion(navModel.main,viewModel) }
              { renderNavbarPortion(navModel.left,viewModel,'left') }
              { renderNavbarPortion(navModel.right,viewModel,'right') } 
              {
                (Array.isArray(navModel.form.group) && navModel.form.group.length >0) && 
                renderForm(navModel.form)
              }  

              { renderSideBar(viewModel) }

            </div>
            

      </nav>
    )

}

function renderNavbarPortion(portion,viewModel,align) {

 if(Array.isArray(portion) && portion.length >0) {
    let className = classnames({
      nav:true,
      'navbar-nav':true,
      'navbar-left':align==='left',
      'navbar-right':align==='right'
    })

  return (    
          <ul className = { className } >
            {
                portion.map((item) => {

                  if(item.dropdown){
                    let dropdown = viewModel.Dropdown[item.dropdown]
                    return (
                      <Dropdown { ...dropdown } mode='nav' toggleMenu={toggleMenu} clickOption={clickOption} />
                      )
                  }
                  else{
                    let { text , ...itemprops} = item
                    return (<li>
                        <a {...itemprops} > { text } </a>
                    </li>)
                  }

                } )

            }
          </ul>
        )
 }
 else{
  return null
 }
}

function renderForm(formModel) {

  let className = classnames({
    'navbar-form':true,
    'navbar-left':formModel.align==='left',
    'navbar-right':formModel.align==='right'
  })   

  return (
    <form className={ className }>
      {
        formModel.group.map((field) => {
            if(field.type ==='text'){
              return <div className = 'form-group'>
                      <input className = 'form-control' { ...field } />
                     </div>
            }
            else{
              let { text,...otherProps } = field
              return <button {...otherProps}> { text } </button>
            }
        })
      }
    </form>
  )
}

function renderSideBarRecur(model, level=1, itemPath) {
  let iconElement = null
  if (model.icon) { 
    let iconClass = `fa ${ model.icon} fa-fw`
    iconElement = (<i className={ iconClass } ></i> )
  }
  let hasItem = Array.isArray(model.items) && model.items.length >0
  let result = null
  let linkActiveClass = classnames({
    active:model.isActive
  })
  if(model.isMenu){

    let menuClass = classnames({
      nav:true,
      'nav-second-level':level ===1,
      'nav-third-level':level ===2,
       'collapse':true,
       'in':model.isOpen
    })
    return (
        <li key={ model.path }>
            <a href = { model.href } onClick = { () => toggleSideBarAcive(model.path) } className={linkActiveClass} >{ iconElement } { model.text } { hasItem && <span className="fa arrow"></span> } </a>
              <ul className={ menuClass }>
                  {
                    (() => {
                        if(hasItem) {
                          return model.items.map((menuOrItem,index) => renderSideBarRecur(menuOrItem, level+1, model.path + '.items.' + index))
                        }
                        else{
                          return null
                        }
                    })()
                  }
              </ul>
        </li>
    )
  }
  else {
    return (
        <li key={ itemPath } >
            <a href = { model.href } className={linkActiveClass} onClick= { () => toggleSideBarAcive(itemPath) } >{ iconElement } { model.text }</a>
        </li>
      )
  }
}


function renderSideBar(viewModel) {
  
  let sidebarModel = model.sidebar
  let firstLevels = model.sidebar.FirstLevels

  let sidebarView = firstLevels.map((key) => { return renderSideBarRecur( sidebarModel[key] ) } )


  return (

              <div className="navbar-default sidebar" role="navigation">
                    <div className="sidebar-nav">
                        <ul className="nav" id="side-menu">
                            <li className="sidebar-search">
                                <div className="input-group custom-search-form">
                                    <input type="text" className="form-control" placeholder="Search..."/>
                                    <span className="input-group-btn">
                                    <button className="btn btn-default" type="button">
                                        <i className="fa fa-search"></i>
                                    </button>
                                </span>
                                </div>
                            </li>                          
                            { sidebarView }
                            
                        </ul>
                    </div>
              </div>

    )
}


//  <li>
//     <a href="#"><i className="fa fa-sitemap fa-fw"></i> Multi-Level Dropdown<span className="fa arrow"></span></a>
//     <ul className="nav nav-second-level">
//         <li>
//             <a href="#">Second Level Item</a>
//         </li>
//         <li>
//             <a href="#">Second Level Item</a>
//         </li>
//         <li>
//             <a href="#">Third Level <span className="fa arrow"></span></a>
//             <ul className="nav nav-third-level">
//                 <li>
//                     <a href="#">Third Level Item</a>
//                 </li>
//                 <li>
//                     <a href="#">Third Level Item</a>
//                 </li>
//                 <li>
//                     <a href="#">Third Level Item</a>
//                 </li>
//                 <li>
//                     <a href="#">Third Level Item</a>
//                 </li>
//             </ul>
//         </li>
//     </ul>
// </li>

 
