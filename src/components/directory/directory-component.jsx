import React from 'react';
import './directory.scss'
import  MenuItem  from '../menu-item/menu-item.component';
import {connect} from 'react-redux';  
import {selectDirectory} from '../../redux/directory/directory-selector';
import {createStructuredSelector} from 'reselect';
 
const Directory= ({sections})=>(
   
            <div className='directory-menu'>
                {
                sections.map(({id,image,...otherProps}) => <MenuItem key={id} imageUrl={image} {...otherProps} />)
                }
            </div>
        )


const mapStateToProps=createStructuredSelector({
    sections: selectDirectory
})

export default connect(mapStateToProps)(Directory);
