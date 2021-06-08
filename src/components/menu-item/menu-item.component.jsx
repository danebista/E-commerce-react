import React from 'react';
import './menu-item.scss'

export const MenuItem = ({title, imageUrl, size}) =>(
    
    <div style = {{ backgroundImage: `url(${imageUrl})`}} className = {`${size} menu-item`}>
        <div className="content">
            <h1 className = 'hats'>{title}</h1>
            <span className = 'subtitle'>SHOP NOW</span>
        </div>  
    </div>
)
