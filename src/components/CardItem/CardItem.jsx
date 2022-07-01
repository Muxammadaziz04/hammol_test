import React from 'react';
import { Link } from 'react-router-dom'
import { Card, CardActionArea, CardMedia, CardContent, Typography } from '@mui/material'
import { PropTypes } from 'prop-types'
import style from './CardItem.module.scss'

const CardItem = ({ item }) => {
    return (
        <Card sx={{ maxWidth: 350, minWidth: 350 }}>
            <CardActionArea className={style.card__action} style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', height: "100%" }}>
                <CardMedia height='185px' component="img" image={item.thumbnail} alt={item.title} />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {item.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {item.description}
                    </Typography>
                </CardContent>
                <Link to={`/item/${item.id}`} className={style.card__link}>
                    See more
                </Link>
            </CardActionArea>
        </Card>
    );
}

CardItem.propTypes = {
    item: PropTypes.object
}

export default CardItem;
