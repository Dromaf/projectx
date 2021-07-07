import React from 'react';
import styles from './card.module.scss'



function Card(props) {
    
    console.log(props)
    const items = props.items.results;
    const itemsAM = props.itemsAM.data;

    return (                      
        <div className={styles.d_flex}>
                    {items && items.map((item, index) => (
                            <div className={styles.slider_card} key={index}>
                                    <img width="100%" height={255} src={ props.img_url + item.poster_path} alt={item.title} />
                                    <h4>{item.title}</h4>
                                    <div>
                                            <span className={styles.raiting}>{item.vote_average}</span>
                                            <span className={styles.raiting_vot}>👍{item.vote_count}</span>
                                    </div>
                            </div>            
                    ))}
                                   
                    {itemsAM && itemsAM.map((item, index) => (
                            <div className={styles.slider_card} key={index}>
                                    <img width="100%" height={255} src={item.attributes.posterImage.large } alt="film" />
                                    <h4>{item.attributes.canonicalTitle}</h4>
                                    <div>
                                            <span className={styles.raiting}>{Math.round(item.attributes.averageRating)/ 10}</span>
                                            <span className={styles.raiting_vot}>👍{item.attributes.favoritesCount}</span>
                                    </div>
                            </div>            
                    ))}
        </div>

    );
    }

export default Card;