import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './content.module.scss'
import Sort from './sort';
import Card from './card';
import Sliders from '../slider';
import Pagination from './pagination';

const api_key = 'api_key=ecfaaed89cfbc68f027db531f7486239';
const img_url = 'https://image.tmdb.org/t/p/w500/';
let method = 'popular';
let numberPage = 2;

function Content() {
        const [items, setItems] = useState([]);
        const [itemsAM, setItemsAM] = useState([]);
        const [valueitem, setValueitem] = useState(method);

        useEffect(() => {
                axios.get(`https://api.themoviedb.org/3/movie/${valueitem}?${api_key}&page=${numberPage}`).then((res) => {
                setItems(res.data);
                });
        }, [valueitem]);

        useEffect(() => {
                axios.get(`https://kitsu.io/api/edge/anime`).then((res) => {
                setItemsAM(res.data);
                });
        }, []);

        const onClickSort = e => {
          setValueitem(e.target.value);
        }

        return (
        <div>
                <Sliders itemsAM={itemsAM}/>

                <div className={styles.content_flex}>

                        <div className={styles.l_flex}>
                                <Sort onClickSort={onClickSort} valueitem={valueitem}/>
                                <Card items={items} itemsAM={itemsAM} img_url={img_url}/>         
                        </div>
                                
                        <div className={styles.r_flex}>
                                Right Column
                        </div>
                       
                </div>

                <Pagination />
                
        </div>
        );
        }
  
export default Content;
  