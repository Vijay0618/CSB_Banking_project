import React,{useState} from 'react'
import {IoMdBookmark, IoMdCall, IoMdChatbubbles,IoMdClipboard, IoMdClose, IoMdMenu} from 'react-icons/io'
import { Link } from 'react-router-dom'
import './Header.css'

const SHeader = () => {

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
                    <a href="/Admin_loan">Loan</a>
                </li>
                <li>
                    <IoMdBookmark className='icon'/>
                    <a href="/Admin_Trans">Transactions</a>
                </li>
                <li>
                    <IoMdBookmark className='icon'/>
                    <a href="/Admin_Pay">Payment</a>
                </li>

                <li>
                    <IoMdCall className='icon'/>
                    <a href="/UpdateSuper">Update</a>
                </li>

                

            </ul>
        </nav>

    </div>
  )
}

export default SHeader