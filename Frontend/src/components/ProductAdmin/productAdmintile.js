import React from 'react'
import "./restauranttile.css"

export default function ProductAdminTile(props) {

    return (
        <div>

<link rel="import" href="http://www.polymer-project.org/components/font-roboto/roboto.html"/>
<div class="ws-tile-three-line-avatar-text-icon">
  
  <span class="list-left">
    <div class="list-avatar"></div>
  </span>
  <span class="list-center">
    <h3 class="list-h3">{props.name}</h3>
    <p class="list-p">{props.price}</p>
    <p class="list-p">{props.category}</p>
  </span>
  <span class="list-right">
    <div class="list-icon"></div>
    <div class="list-icon2"></div>
  </span>
</div>
</div>
    )
}
