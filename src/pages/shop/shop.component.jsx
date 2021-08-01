import React from 'react';
import './shop.scss';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';
import CategoryPageContainer from '../category/category.container';
import {fetchCollectionsStart} from '../../redux/shop/shop.actions';
import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';

class Shop extends React.Component{
    componentDidMount(){
        const {fetchCollectionsStart} = this.props;
        fetchCollectionsStart();
    }

    render(){
        const {match} =  this.props;
        return (
             <div className='shop-pages'>
                <Route exact path ={`${match.path}`} component={CollectionsOverviewContainer} />
                <Route path = {`${match.path}/:categoryId`}  
                component={CategoryPageContainer} />
             </div>
        )
    }
} 

const mapDispatchToProps= dispatch => ({
    fetchCollectionsStart:()=> dispatch(fetchCollectionsStart())
})

export default connect(null, mapDispatchToProps)(Shop);
