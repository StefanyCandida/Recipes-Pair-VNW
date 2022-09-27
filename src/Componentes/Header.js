import React from "react";
import Photo from "./Imagens/photoHeader.png"
//import * as S from "./HeaderStyle";


export default function Header() {
  return (
    <div>
      <h1>RECIPES</h1>
      <nav>
        <ul>
          <li>About</li>
          <li>Recipes</li>
          <li>Subscribe</li>
        </ul>
      </nav>
    </div>
  )
}