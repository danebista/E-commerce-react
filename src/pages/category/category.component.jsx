import React from 'react';

import './category.styles.scss';
import {selectCollection} from '../../redux/shop/shop.selector';
import { connect } from 'react-redux';

const CategoryPage = ( {collection} )=> {
    console.log(collection);
    return (<div className='category'>
        <h2>CATEGORY PAGE</h2>
    </div>)
}

const mapStateToProps = (state, ownProps)=>({
    collection: selectCollection(ownProps.match.params.categoryId)(state)
})
export default connect(mapStateToProps)(CategoryPage);

