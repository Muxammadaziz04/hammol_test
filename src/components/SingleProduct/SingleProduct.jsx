import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import { ArrowBackIosNew } from '@mui/icons-material';
import style from './SingleProduct.module.scss'

const SingleProduct = ({ item }) => {
    const navigate = useNavigate()
    const goBack = () => navigate(-1)

    return (
        <section className={style.singleProduct}>
            <div className="container">
                <div className={style.singleProduct__block}>
                    <div className={style.singleProduct__images}>
                        {
                            item.images?.map((img, index) => (
                                <div key={index}>
                                    <img src={img} alt={item.title} />
                                </div>
                            ))
                        }
                    </div>
                    <div className={style.singleProduct__info}>
                        <p className={style.singleProduct__id}><span>Id: </span> {item.id}</p>
                        <p className={style.singleProduct__text}><span>Title: </span>{item.title}</p>
                        <p className={style.singleProduct__text}><span>Description: </span>{item.description}</p>
                        <p className={style.singleProduct__text}><span>Price: </span>{item.price}</p>
                        <p className={style.singleProduct__text}><span>DiscountPercentage: </span>{item.discountPercentage}</p>
                        <p className={style.singleProduct__text}><span>Rating: </span>{item.rating}</p>
                        <p className={style.singleProduct__text}><span>Stock: </span>{item.stock}</p>
                        <p className={style.singleProduct__text}><span>Brand: </span>{item.brand}</p>
                        <p className={style.singleProduct__text}><span>Category: </span>{item.category}</p>
                    </div>
                </div>
                <div className={style.singleProduct__btn}>
                    <Button variant="contained" onClick={goBack} startIcon={<ArrowBackIosNew />}>Back</Button>
                </div>
            </div>
        </section>
    );
}

export default SingleProduct;
