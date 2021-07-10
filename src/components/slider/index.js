import styles from './slider.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import { Link } from 'react-router-dom';

function Slider(props) {
    console.log(props)
    return (
        <div className={styles.d_flex}>
            
                <Swiper
                    spaceBetween={60}
                    slidesPerView={4}
                //     onSlideChange={() => console.log('slide change')}
                //     onSwiper={(swiper) => console.log(swiper)}
            >
                 {props.items.results && props.items.results.map((item) => (
                    <SwiperSlide key={item.id}>
                     <Link to={`/films/${item.id}/${item.original_title}`} key={item.id}>
                        <div className={styles.slider_card} >
                                        <img width="100%" height={255} src={ props.img_url + item.poster_path} alt={item.title} id={item.id}/>
                                        <h4>{item.title}</h4>
                                        <div>
                                                <span className={styles.raiting}>{item.vote_average}</span>
                                                <span className={styles.raiting_vot}>👍{item.vote_count}</span>
                                        </div>
                        </div>            
                    </Link>
                    </SwiperSlide>
                ))}
                
                
    </Swiper>
           
            
            
           
    </div>
    );
  }
  
  export default Slider;
  