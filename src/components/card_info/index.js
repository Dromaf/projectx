import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { watchItem, unWatchItem, checkItem, favoriteItem} from '../../store/cardinfoSlice';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { Button, Icon } from 'semantic-ui-react'
import styles from './card_info.module.scss';

const CardInfo = () => {
  const [filmData, setFilmData] = useState();
  const { id } = useParams();
  let activeWatchItems = false;

  const dispatch = useDispatch();
  const handleWatchItems = useSelector(state => state.cardinfo.watchItemList);
  const handleUnWatchItem = useSelector(state => state.cardinfo.handleUnWatchItem);
  const handleCheckItem = useSelector(state => state.cardinfo.handleCheckItem);
  const handleFavor = useSelector(state => state.cardinfo.handleFavor);

  const singleActiveItem = handleWatchItems.filter(el => el.id === Number(id));
  console.log(singleActiveItem)
  if (singleActiveItem.length > 0) {
    activeWatchItems = singleActiveItem[0].handleWatchItem
    console.log(singleActiveItem[0].handleWatchItem)
  } else {
    activeWatchItems = false
  }

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

	useEffect(() => {  
		async function FetchDataCard() {
			const request = await axios.get(
				`https://api.themoviedb.org/3/movie/${id}?api_key=23a88dbca49ffd6e59ebc13cc2ab60b7&language=ru`
			);
			setFilmData(request.data);   
			return request;
        }
        FetchDataCard();
  }, [id]);
	return (
		<div className={styles.d_flex}>
			{filmData && (
			<div className={styles.d_flex}>
				
				<div className={styles.title}><h1>{filmData.title}</h1> <h3>({filmData.release_date.split('-')[0]})</h3> <span>{filmData.tagline ? `Слоган: ${filmData.tagline}` : ''}</span></div>
				
				<div className={styles.d_flex_info}>
					<div className={styles.d_flex_imgbox}>
              <img height={255} width={170} src={filmData.poster_path ? 'https://image.tmdb.org/t/p/w500' + filmData.poster_path : '../../img/notfound.JPG'} alt={filmData.title} />
            <div className={styles.buttongroup}>
            <Button.Group floated='left'>
              <Button icon onClick={favoriteItems} data-tooltip="Любимое" toggle active={handleFavor}><Icon name='heart' /></Button>  
              <Button icon onClick={checkItems} data-tooltip="Посмотрено" toggle active={handleCheckItem}><Icon name='checkmark' /></Button>
              <Button icon onClick={watchItems} data-tooltip="Буду смотреть" toggle active={activeWatchItems}><Icon name='eye' /></Button>
              <Button icon onClick={unWatchItems} data-tooltip="Брошено" toggle active={handleUnWatchItem} ><Icon name='low vision' /></Button>
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
