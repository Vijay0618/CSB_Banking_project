import React,{useState} from 'react'
import {IoMdBookmark, IoMdCall,IoMdClipboard, IoMdClose, IoMdMenu} from 'react-icons/io'
// import { Link } from 'react-router-dom'
import './Header.css'

const UHeader = () => {

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
                    <a href="/complaint">Complaint_form</a>
                </li>

                <li>
                    <IoMdCall className='icon'/>
                    <a href="/getbyname">Status</a>
                </li>

                <li>
                    <IoMdClipboard className='icon'/>
                    <a href='/Faq-qsns'>Faq</a>
                </li>

            </ul>
        </nav>

    </div>
  )
}

export default UHeader