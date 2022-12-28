import React,{useState} from 'react'
import {IoMdBookmark, IoMdCall, IoMdChatbubbles,IoMdClipboard, IoMdClose, IoMdMenu} from 'react-icons/io'
import { Link } from 'react-router-dom'
import './Header.css'

const PHeader = () => {

    const [active,setActive] = useState(false)

    const activateNav = () => {
        setActive(!active)
    } 

  return (
    <div className={active ? 'header' : 'header-mobile'}>

               <div className='menu-icon' onClick={activateNav}>

                    {!active ? <IoMdMenu className='menu'/> : <IoMdClose className='menu'/>}

               </div>

        <nav>
            <ul className={active ? 'ul-item' : 'ul-item oicon'}>

                <li>
                    <IoMdBookmark className='icon'/>
                    <a href="/Main_Pay">History</a>
                </li>

                <li>
                    <IoMdCall className='icon'/>
                    <a href="/UpdatePay">Update</a>
                </li>

                

            </ul>
        </nav>

    </div>
  )
}

export default PHeader