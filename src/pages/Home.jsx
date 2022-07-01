import React, { useState } from 'react';
import { useGetProductsQuery } from '../redux/ProductsApi';
import SearchSection from '../components/SearchSection';
import ProductsSection from '../components/ProductsSection';

const Home = () => {
    const [category, setCategory] = useState('')
    const [name, setName] = useState('')
    const [offset, setOffset] = useState(0)
    const [limit, setLimit] = useState(10)

    const searchSectionDependencies = { setCategory, setName }

    const response = useGetProductsQuery({
        name,
        category,
        limit,
        offset
    })

    return (
        <>
            <SearchSection dependencies={searchSectionDependencies} />
            <ProductsSection res={response} setOffset={setOffset} setLimit={setLimit} limit={limit} />
        </>
    );
}

export default Home;
