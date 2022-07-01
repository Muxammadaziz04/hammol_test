import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetSingleProductQuery } from '../redux/ProductsApi';
import SingleProduct from '../components/SingleProduct';


const ProductItem = () => {
    const { productId } = useParams()
    const {data = {}} = useGetSingleProductQuery(productId)

    return (
        <>
            <SingleProduct item={data} />
        </>
    );
}

export default ProductItem;
