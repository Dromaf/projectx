import React, { useState, useEffect, useRef } from 'react';
import { useIdle } from 'react-use';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styles from './search.module.scss'

function Search() {
    const [searchListFilms, setSearchListFilms] = useState([]);
    const [onSearchFilms, setOnSearchFilms] = useState('');
    const [searchPanel, setSearchPanel] = useState(false);
    const rootEl = useRef(null);
    const isIdle = useIdle(1200);
    
    useEffect(() => {
      const onClick = e => rootEl.current.contains(e.target) || setSearchPanel(false);
      document.addEventListener('click', onClick);
      return () => document.removeEventListener('click', onClick);
    }, []);
    
    useEffect(() => {
      const FetchDataCard = async () => {
        const request = await axios.get(
                `https://api.themoviedb.org/3/search/movie?api_key=5dcf7f28a88be0edc01bbbde06f024ab&language=ru-RU&query=${onSearchFilms}&page=1&include_adult=false`
              );
             setSearchListFilms(request.data)
      }
      FetchDataCard()
    }, [onSearchFilms])

    const onChangePage = (e) => {
      setOnSearchFilms(e.target.value);
      setSearchPanel(true);
      if (e.target.value === '') {
        setSearchListFilms([]);
        setSearchPanel(false);
      }
    };
    
    const clearSearchInput = () => {
      setOnSearchFilms('');
      setSearchPanel(false);
    };
  
    const openSearchInput = () => {
      if (onSearchFilms !== '') {
        setSearchPanel(true);
      }
    }

    return (
      <div className={styles.d_flex}>
          <div className={styles.search_block} ref={rootEl}>
          <img src="/img/search.svg" alt="Search" />
            {onSearchFilms && <img
              onClick ={clearSearchInput}
              className={styles.clear}
              src="/img/btn-remove.svg"
              alt="Clear"
            />}
          <input placeholder="Поиск..." value={onSearchFilms} onChange={onChangePage} onClick={openSearchInput}/>
          </div>
          {searchPanel &&
          <div className={styles.searchBoxList} >
          
          {searchListFilms.results && searchListFilms.results.length !== 0 ? <div>
                {searchListFilms.results && searchListFilms.results.map((item, index) => (
                  <Link to={`/film/${item.id}`}  onClick ={clearSearchInput} key= {index}>
                    <div className={styles.searchBoxItem}  >
                      <div>
                        <img height={60} width={40} src={item.poster_path ? 'https://image.tmdb.org/t/p/w500' + item.poster_path : '../../img/notfound.JPG'} alt={item.title} />
                      </div>
                      <div>
                        <div><b>Название:</b> {item.title} </div>
                        <div><b>Рейтинги:</b> ⭐ {item.vote_average} </div>
                        <div><b>Дата выхода:</b> {item.release_date && item.release_date.split('-')[0]}</div>
                      </div>
                    </div>
                  </Link>
                )) }
            </div>  : <div>По вашему запросу ничего не найдено!🤯</div>}
          </div>
          } 
      </div>
    );
  }
  
export default Search;
  