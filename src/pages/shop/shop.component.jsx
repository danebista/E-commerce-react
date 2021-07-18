import React from 'react';
import './shop.scss';
import CollectionOverview from '../../components/collections-overview/collectionsoverview.components';
import {Route} from 'react-router-dom';
import CategoryPage from '../category/category.component';

const Shop = ({match}) => 

   

        ( <div className='shop-pages'>
           <Route exact path ={`${match.path}`} component={CollectionOverview} />
           <Route path = {`${match.path}/:categoryId`}  component={CategoryPage} />
       </div>)


export default Shop;
