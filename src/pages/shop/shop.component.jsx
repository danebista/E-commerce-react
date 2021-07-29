import React from 'react';
import './shop.scss';
import CollectionOverview from '../../components/collections-overview/collectionsoverview.components';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';
import CategoryPage from '../category/category.component';
import {firestore, convertCollectionsSnapshotToMap} from '../../firebase/firebase.utils'
import {updateCollections} from '../../redux/shop/shop.actions';
import withSpinner from '../../components/with-spinner/with-spinner.component';
const CollectionOverviewWithSpinner = withSpinner(CollectionOverview);
const CollectionPageWithSpinner = withSpinner(CategoryPage);

class Shop extends React.Component{
    state = {
        loading: true
    };
    unsubsribeFromSnapshot = null
    componentDidMount(){
        const {updateCollections} = this.props;
        const collectionRef = firestore.collection('collections');
        collectionRef.onSnapshot(async snapshot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
            updateCollections(collectionsMap);
            
            this.setState({loading: false});
        })
    }

    render(){
        const {match} =  this.props;
        const {loading} = this.state;

        return (
             <div className='shop-pages'>
            <Route exact path ={`${match.path}`} render = {(props) => <CollectionOverviewWithSpinner isLoading={loading} {...props} />} />
            <Route path = {`${match.path}/:categoryId`}  
            render = {(props) => <CollectionPageWithSpinner isLoading={loading} {...props} />} />
        </div>
        )
    }
} 
  
const mapDispatchToProps= dispatch => ({
    updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
})
export default connect(null, mapDispatchToProps)(Shop);
