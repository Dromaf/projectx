import styles from './slider.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';

function Slider(props) {

    return (
        <div className={styles.d_flex}>
            
                <Swiper
                    spaceBetween={60}
                    slidesPerView={4}
                //     onSlideChange={() => console.log('slide change')}
                //     onSwiper={(swiper) => console.log(swiper)}
            >
                 {props.itemsAM.data && props.itemsAM.data.map((item) => (
                    <SwiperSlide key={item.id}>
                    
                                    <div className={styles.slider_card} >
                                            <img width="100%" height={255} src={item.attributes.posterImage.large } alt="film" />
                                            <h4>{item.attributes.canonicalTitle}</h4>
                                            <div>
                                                    <span className={styles.raiting}>{Math.round(item.attributes.averageRating)/ 10}</span>
                                                    <span className={styles.raiting_vot}>👍{item.attributes.favoritesCount}</span>
                                            </div>
                                    </div>            
                    
                    </SwiperSlide>
                ))}
                
                
    </Swiper>
           
            
            
           
    </div>
    );
  }
  
  export default Slider;
  