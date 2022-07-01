import React from 'react';
import { Pagination } from '@mui/material';
import Skeleton from '../Skeleton';
import CardItem from '../CardItem';
import style from './ProductsSection.module.scss'
import NotFoundProduct from '../NotFoundProduct';


const ProductsSection = ({res, setOffset, setLimit, limit}) => {
    const {data = [], isLoading} = res

    const arrForSkeleton = new Array(10).fill(10)
    const limits = [10,9,8,7,6,5,4,3,2,1]

    if(!isLoading && !data.count) return <NotFoundProduct />

    return (
        <section className={style.products__section}>
            <div className="container">
                <h2 className={style.products__section__title}>Products</h2>
                <div className={style.products__section__block}>
                    {
                        isLoading ? (
                            arrForSkeleton.map((_, index) => <Skeleton key={index} />)
                        ) : (
                            data.products?.map(product => <CardItem key={product.id} item={product}/>)
                        )
                    }
                </div>
                <div className={style.products__section__pagination}>
                    <Pagination count={Math.ceil(data.count/limit) || 1} color="primary" onChange={(_, currentPage) => setOffset(currentPage)} />
                    <label className={style.limits__label}>
                        <span>Limits:  </span>
                        <select className={style.products__section__select} onChange={(event) => setLimit(event.target.value)} aria-label=".form-select-lg example">
                            {
                                limits.map((item, index) => <option key={index} value={item}>{item}</option>)
                            }                              
                        </select>
                    </label>
                </div>

            </div>
        </section>
    );
}

export default ProductsSection;
