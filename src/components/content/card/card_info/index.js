import React from 'react';
import styles from './card_info.module.scss';

function CardInfo(props) {
    const items = props.items.results;
    const idFilms = Number(props.match.params.id);
    console.log(props)
    return (
        <div className={styles.d_flex}>
        {items && items.filter(a => a.id === idFilms).map((item) => (
          
            <div className={styles.d_flex} key={item.id}>
                <h2> Карточка {item.id} {item.title}</h2>
                    <div>{item.overview}</div>
                     <img height={255} width={170} src={ props.img_url + item.poster_path} alt={item.title} />
                    <div>{item.release_date}</div>
                    <div>{item.vote_average}</div>
                    <div>{item.vote_count}</div>
                    <div>{item.popularity}</div>
                </div>
    
        ))}

        </div>
    );
    }

export default CardInfo;