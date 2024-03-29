import React from 'react'
import logo from './logo.svg';
import { social, links } from './data';
import { FaTimes } from 'react-icons/fa';
import { useGlobalContext } from './Context';

function Sidebar() {
  
  const {isSidebarOpen, closeSidebar} = useGlobalContext();


  return (
    <aside className={isSidebarOpen?'sidebar show-sidebar' : 'sidebar' }>
      <div>
        <img src={logo} alt="coding addict" className='logo'></img>
        <button className='close-btn' onClick={closeSidebar}>
          <FaTimes />
        </button>
      </div>
      <ul className='links'>
        {links.map(
          (link)=>{
            const {id, url, text, icon} = link;
            return <li key={id} ><a href={url}>{icon}{text}</a> </li>
          }
        )}
      </ul>
    </aside>
  )
}

export default Sidebar