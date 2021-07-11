import React from 'react';
import styles from './sort.module.scss'
// import { Link } from 'react-router-dom';

const sortButton = [
    { type: 'popular', name: 'Популярные' },
    { type: 'top_rated', name: 'Лучшие' },
    { type: 'upcoming', name: 'Скоро в прокате'}
]

const typeButton = [
    { type: 'action', name: 'Боевик' },
    { type: 'adventure', name: 'Приключения' },
    { type: 'animation', name: 'Мультфильм' },
    { type: 'comedy', name: 'Комедия' },
    { type: 'crime', name: 'Криминал' },
    { type: 'documentary', name: 'Документальный' },
    { type: 'drama', name: 'Драма' },
    { type: 'family', name: 'Семейный' },
    { type: 'fantasy', name: 'Фентези' },
    { type: 'history', name: 'Исторический' },
    { type: 'horror', name: 'Ужасы' },
    { type: 'music', name: 'Музыкальные' },
    { type: 'mystery', name: 'Мистический' },
    { type: 'romance', name: 'Мелодрама' },
    { type: 'sciencefiction', name: 'Фантастика' },
    { type: 'tvmovie', name: 'Сериалы' },
    { type: 'thriller', name: 'Триллер' },
    { type: 'war', name: 'Военный' },
    { type: 'western', name: 'Вестерн'}
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
                            className={ props.curBtNColrSort === item.type ? styles.sort_button_active  : styles.sort_button}>{item.name}
                        </button>
                    // </Link>
                ))}
            </div>

            <div className={styles.d_flex}>
                {typeButton && typeButton.map((item, index) => (
                    <button
                        key={index}
                        onClick={props.onClickSort}
                        value={item.type}
                        className={ props.curBtNColrSort === item.type ? styles.sort_button_active  : styles.sort_button}>{item.name}
                    </button>
                ))}
            </div>
        </div>
    );
  }
  
  export default Sort;
  