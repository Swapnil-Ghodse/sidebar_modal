import React from 'react'
import { useGlobalContext } from './Context';
import { FaBars } from 'react-icons/fa';

function Home() {
  const {openModel, openSidebar} = useGlobalContext();
  console.log(openModel);
  return (
    <main>
      <button onClick={openSidebar} className='sidebar-toggle'>
        <FaBars />
      </button>
      <button onClick={openModel} className='btn'>
        Show Model
      </button>
    </main>
  )
}

export default Home