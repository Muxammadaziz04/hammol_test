import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import host from '../constants';

export const productsApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({baseUrl: host}),
    endpoints: build => ({
        getProducts: build.query({
            query: (obj) => {
                let queryParams = Object.entries(obj).filter(params => Boolean(params[1]))
                queryParams = queryParams.map(params => params.join('=')).join('&')
                return`/api/product?${queryParams}`
            }
        }),
        getCategories: build.query({
            query: () => '/api/category'
        }),
        getSingleProduct: build.query({
            query: (productId) => `/api/product/${productId}`
        })
    })
})

export const { useGetProductsQuery, useGetCategoriesQuery, useGetSingleProductQuery } = productsApi