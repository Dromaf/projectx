import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import styles from './card_info.module.scss';

const CardInfo = () => {
    const [filmData, setFilmData] = useState();
	const { id } = useParams();
    console.log(filmData);

	useEffect(() => {  
		async function FetchDataCard() {
			const request = await axios.get(
				`https://api.themoviedb.org/3/movie/${id}?api_key=23a88dbca49ffd6e59ebc13cc2ab60b7&language=$ru`
			);
			setFilmData(request.data);   
			return request;
        }
        FetchDataCard();
	}, [id]);

    return (
        <div className={styles.d_flex}>
            {filmData 
            && (
                <div className={styles.d_flex}>
                    <h2> Карточка {filmData.id} {filmData.title}</h2>
                    <div>{filmData.overview}</div>
                        <img height={255} width={170} src={ 'https://image.tmdb.org/t/p/w500' + filmData.poster_path} alt={filmData.title} />
                    <div>{filmData.release_date}</div>
                    <div>{filmData.vote_average}</div>
                    <div>{filmData.vote_count}</div>
                    <div>{filmData.popularity}</div>
                </div>
            )}
        </div>
    );
}

export default CardInfo;
