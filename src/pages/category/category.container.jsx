import {connect } from 'react-redux';
import {compose} from 'redux';
import {createStructuredSelector} from 'reselect';
import {selectIsCollectionLoaded} from '../../redux/shop/shop.selector';
import WithSpinner from '../../components/with-spinner/with-spinner.component';
import CategoryPage from './category.component'

const mapStateToProps = createStructuredSelector({
    isLoading:  (state) => !selectIsCollectionLoaded(state)
});

const CategoryPageContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CategoryPage);

export default CategoryPageContainer;
