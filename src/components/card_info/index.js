import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { watchItem, unWatchItem, checkItem, favoriteItem, fetchCardInfo} from '../../store/cardinfoSlice';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { Button, Icon } from 'semantic-ui-react'
import styles from './card_info.module.scss';

const CardInfo = () => {
  // const [filmData, setFilmData] = useState();
  const { id } = useParams();
  let activeWatchToggle = false;
  let activeFavorToggle = false;
  let activeUnWatchToggle = false;
  let activeCheckToggle = false;

  const dispatch = useDispatch();
  
  const { watchItemList, unWatchItemList, checkItemList, favoriteItemList, filmData, status, error } = useSelector(state => state.cardinfo);

  const singleActiveItem = watchItemList.filter(el => el.id === Number(id));
  if(singleActiveItem.length > 0) activeWatchToggle = singleActiveItem[0].handleWatchItem

  const singleFavorItem = favoriteItemList.filter(el => el.id === Number(id));
  if (singleFavorItem.length > 0) activeFavorToggle = singleFavorItem[0].handleFavor
  
  const singleUnWatchItem = unWatchItemList.filter(el => el.id === Number(id));
  if (singleUnWatchItem.length > 0) activeUnWatchToggle = singleUnWatchItem[0].handleUnWatchItem
  
  const singleCheckItem = checkItemList.filter(el => el.id === Number(id));
  if(singleCheckItem.length > 0 ) activeCheckToggle = singleCheckItem[0].handleCheckItem


  const watchItems = () => {
    dispatch(watchItem({ filmData }));
  }
  const unWatchItems = () => {
    dispatch(unWatchItem({ filmData }));
  }
  const checkItems = () => {
    dispatch(checkItem({ filmData }));
  }
  const favoriteItems = () => {
    dispatch(favoriteItem({ filmData }));
  }

	// useEffect(() => {  
	// 	async function FetchDataCard() {
	// 		const request = await axios.get(
	// 			`https://api.themoviedb.org/3/movie/${id}?api_key=23a88dbca49ffd6e59ebc13cc2ab60b7&language=ru`
	// 		);
	// 		setFilmData(request.data);   
	// 		return request;
  //       }
  //     FetchDataCard();
  // }, [id]);

	useEffect(() => {  
    dispatch(fetchCardInfo(id));
  }, [dispatch, id]);


	return (
    <div className={styles.d_flex}>
      
      {status === 'Loading' && <h2>Loading...</h2>}
      {error && <h2>Error...{error}</h2>}


			{filmData && (
			<div className={styles.d_flex}>
				
				<div className={styles.title}><h1>{filmData.title}</h1> <h3>({filmData.release_date.split('-')[0]})</h3> <span>{filmData.tagline ? `Слоган: ${filmData.tagline}` : ''}</span></div>
				
				<div className={styles.d_flex_info}>
					<div className={styles.d_flex_imgbox}>
              <img height={255} width={170} src={filmData.poster_path ? 'https://image.tmdb.org/t/p/w500' + filmData.poster_path : '../../img/notfound.JPG'} alt={filmData.title} />
            <div className={styles.buttongroup}>
            <Button.Group floated='left'>
              <Button icon onClick={favoriteItems} data-tooltip="Любимое" toggle active={activeFavorToggle}><Icon name='heart' /></Button>  
              <Button icon onClick={checkItems} data-tooltip="Посмотрено" toggle active={activeCheckToggle}><Icon name='checkmark' /></Button>
              <Button icon onClick={watchItems} data-tooltip="Буду смотреть" toggle active={activeWatchToggle}><Icon name='eye' /></Button>
              <Button icon onClick={unWatchItems} data-tooltip="Брошено" toggle active={activeUnWatchToggle} ><Icon name='low vision' /></Button>
             </Button.Group>
            </div>
          </div>

					<div>
							<div><b>Рейтинги:</b> ⭐ {filmData.vote_average}</div>
							<div><b>Дата выхода:</b> {filmData.release_date}</div>
              <div><b>Страна:</b>
                {filmData.production_countries && filmData.production_countries.map((item, index) => (
								<span  key={index}> {item.iso_3166_1} </span>
								))}</div>
              <div><b>Жанр:</b>
                {filmData.genres && filmData.genres.map((item, index) => (
											<span key={index}> <Link to={`/`} >{item.name} </Link></span>
                ))}
              </div>
              <div><b>Время:</b> {filmData.runtime} мин.</div>
              <div><b>Бюджет:</b> {filmData.budget} $</div>
              <div><b>Сборы:</b> {filmData.revenue} $</div>
              <div>{filmData.homepage ? <span><b>Страница фильма:</b> {filmData.homepage}</span> : ''}</div>
              <div><b>Статус:</b> {filmData.status}</div>
					</div>
				</div>
				<div>
					<h2>Описание: «{filmData.title}»:</h2>
					{filmData.overview}
				</div>	
			</div>
			)}
		</div>
	);
}

export default CardInfo;
