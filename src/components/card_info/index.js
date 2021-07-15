import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import styles from './card_info.module.scss';

const CardInfo = () => {
    const [filmData, setFilmData] = useState();
	const { id } = useParams();
    console.log(filmData);

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
				<div className={styles.d_flex}>
								{/* <div>release_date- {filmData.release_date}</div>
								<div>vote_count - {filmData.vote_count}</div>
								<div>popularity - {filmData.popularity}</div>
								<div>budget - {filmData.budget}</div>
								<div>{filmData.production_companies && filmData.production_companies.map((item) => (
											<div > <img height={50} width={150} src={ 'https://image.tmdb.org/t/p/w500' + item.logo_path} alt={item.name} />{item.name}</div>
											))}
								</div>
								<div>{filmData.production_countries && filmData.production_countries.map((item) => (
											<div > {item.name}</div>
											))}
								</div>
								<div>Сборы - {filmData.revenue}</div>
								<div>runtime - {filmData.runtime}</div>
								<div>status - {filmData.status}</div>
								<div>tagline - {filmData.tagline}</div>
								<div>homepage - {filmData.homepage}</div> */}
				</div>
			</div>
			)}
		</div>
	);
}

export default CardInfo;
