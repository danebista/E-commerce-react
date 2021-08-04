import React, {useEffect} from 'react';
import './shop.scss';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';
import CategoryPageContainer from '../category/category.container';
import {fetchCollectionsStart} from '../../redux/shop/shop.actions';
import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';

const Shop=({ fetchCollectionsStart, match})=>{
    useEffect(()=>{
        fetchCollectionsStart();
    }, [fetchCollectionsStart]);

        return (
             <div className='shop-pages'>
                <Route exact path ={`${match.path}`} component={CollectionsOverviewContainer} />
                <Route path = {`${match.path}/:categoryId`}  
                component={CategoryPageContainer} />
             </div>
        )
} 

const mapDispatchToProps= dispatch => ({
    fetchCollectionsStart:()=> dispatch(fetchCollectionsStart())
})

export default connect(null, mapDispatchToProps)(Shop);
