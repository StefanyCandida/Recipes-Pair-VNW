import React from 'react'
import Rc from './Img/RC.svg'
import './Header.css';

export default function Header (){

    return (
        <div>
            <div className='header'>
                <figure>
                    <img src={Rc}/>
                </figure>
    
                <nav className='top-menu'>
                    <ul>
                        <li>ABOUT</li>
                        <li>RECIPES</li>
                        <li>SUBSCRIBE</li>
                    </ul>
                </nav>
            </div>

            <div className='main-title'>
                <h1>RECIPES</h1>
            </div>
        </div>
    )
}