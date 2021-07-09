import React from 'react';
import styles from './sort.module.scss'
// import { Link } from 'react-router-dom';

const sortButton = [
    { type: 'popular', name: 'Популярные' },
    { type: 'top_rated', name: 'Лучшие' },
    { type: 'upcoming', name: 'Скоро в прокате'}
]

const typeButton = [
    { type: 'all', name: 'Все' },
    { type: 'films', name: 'Фильмы' },
    { type: 'tvs', name: 'Сериалы' },
    { type: 'cartoons', name: 'Мультфильмы' },
    { type: 'anime', name: 'Аниме' },
    { type: 'manga', name: 'Манга'}
]

function Sort(props) {
    return (
        <div>
            <div className={styles.d_flex}>
                {sortButton && sortButton.map((item, index) => (
                    // <Link to={`/${item.type}`}>
                        <button
                            key={index}
                            onClick={props.onClickSort}
                            value={item.type}
                            className={ props.valueitem === item.type ? styles.sort_button_active  : styles.sort_button}>{item.name}
                        </button>
                    // </Link>
                ))}
            </div>

            <div className={styles.d_flex}>
                {typeButton && typeButton.map((item, index) => (
                    <button
                        key={index}
                        value={item.type}
                        className={styles.sort_button_m}>{item.name}
                    </button>
                ))}
            </div>
        </div>
    );
  }
  
  export default Sort;
  