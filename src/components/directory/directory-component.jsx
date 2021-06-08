import React, {Component} from 'react';
import './directory.scss'
import { MenuItem } from '../menu-item/menu-item.component';

export default class Directory extends Component{
    constructor(){
        super();

        this.state = {
            section: [
                {
                    title:'Hats',
                    id:1,
                    image: 'https://images.freeimages.com/images/large-previews/d91/hat-1418845.jpg'
                },
                {
                    title:'Sneakers',
                    id: 2,
                    image: 'https://images.freeimages.com/images/large-previews/5bc/sneakers-1543782.jpg'
                },
                {
                    title: 'Trousers',
                    id: 3,
                    image: 'https://images.freeimages.com/images/large-previews/728/jeans-1421398.jpg'
                },
                {
                    title: 'Men',
                    id: 4,
                    image: 'https://images.freeimages.com/images/large-previews/67c/man-1438092.jpg',
                    size: 'large'
                },
                {
                    title: 'Women',
                    id: 5,
                    image: 'https://images.freeimages.com/images/large-previews/f8a/nevin-1435774.jpg',
                    size: 'large'
                }

            ]
        }

    
    }

    render(){
        return (
            <div className='directory-menu'>
                {
                this.state.section.map(sec => <MenuItem title={sec.title} key={sec.id} imageUrl={sec.image} size={sec.size} />)
                }
            </div>
        )
    }

}
