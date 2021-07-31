import React from 'react';
import './shop.scss';
import CollectionOverview from '../../components/collections-overview/collectionsoverview.components';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import CategoryPage from '../category/category.component';
import {fetchCollectionsStartAsync} from '../../redux/shop/shop.actions';
import {selectIsCollectionFetching} from '../../redux/shop/shop.selector';
import withSpinner from '../../components/with-spinner/with-spinner.component';
const CollectionOverviewWithSpinner = withSpinner(CollectionOverview);
const CollectionPageWithSpinner = withSpinner(CategoryPage);

class Shop extends React.Component{
  

    componentDidMount(){
        const {fetchCollectionsStartAsync} = this.props;
        fetchCollectionsStartAsync();
    }

    render(){
        const {match, isCollectionFetching} =  this.props;
        return (
             <div className='shop-pages'>
            <Route exact path ={`${match.path}`} render = {(props) => <CollectionOverviewWithSpinner isLoading={isCollectionFetching} {...props} />} />
            <Route path = {`${match.path}/:categoryId`}  
            render = {(props) => <CollectionPageWithSpinner isLoading={isCollectionFetching} {...props} />} />
        </div>
        )
    }
} 

const mapStateToProps= createStructuredSelector({
 isCollectionFetching: selectIsCollectionFetching
})

const mapDispatchToProps= dispatch => ({
    fetchCollectionsStartAsync:()=> dispatch(fetchCollectionsStartAsync())
})

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
