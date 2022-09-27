import React from 'react'
import Rc from './Img/RC.svg'

export default function Header (){

return(
    <div>
        <div>
<figure>
<img src={Rc}/>
</figure>

<nav>
<ul>
    <li>ABOUT</li>
    <li>RECIPES</li>
    <li>SUBSCRIBE</li>
</ul>
</nav>
        </div>

        <div>
<h1>
    RECIPES
</h1>
        </div>
    </div>
)
}