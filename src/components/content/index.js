import React, { useState, useEffect } from 'react';
import { Pagination } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import axios from 'axios';
import styles from './content.module.scss'
import Sort from './sort';
import Card from './card';
import Sliders from '../slider';
import requests from '../../requests';

function Content() {
	const img_url = 'https://image.tmdb.org/t/p/w500/';
	const baseUrl = 'https://api.themoviedb.org/3';
	let language = 'ru';
	const [items, setItems] = useState([]);
	const [valueitem, setValueitem] = useState(requests[0].fetch);
	const [curBtNColrSort, setCurBtNColrSort] = useState(requests[0].type);
	const [activePage, setActivePage] = useState(1);
	
	useEffect(() => {  
		async function FetchData() {
		  const request = await axios.get(`${baseUrl}${valueitem}&page=${activePage}&language=${language}`);
			setItems(request.data);   
		  return request;
		  }
		  FetchData();
	  }, [valueitem, activePage, language]);

	const onClickSort = e => {
		let fetchType = requests.find(a => a.type === e.target.value)
		setValueitem(fetchType.fetch);
		setCurBtNColrSort(fetchType.type);
		setActivePage(1);
	  }
		
	  const onChangePage = (e, pageInfo) => {
		console.log(pageInfo.activePage)
		setActivePage(pageInfo.activePage);
	  };

	return (
		
        <div>
                <Sliders items={items} img_url={img_url}/>

                <div className={styles.content_flex}>

                        <div className={styles.l_flex}>
							<Sort onClickSort={onClickSort} valueitem={valueitem} curBtNColrSort={curBtNColrSort}/>
							<Card
								items={items}
								img_url={img_url}
							/>
							{items.total_pages 
							&& <Pagination
								activePage={activePage}
								totalPages={+items.total_pages}
								onPageChange={onChangePage}
								ellipsisItem={null}/>
							}					
                        </div>
                                
                        <div className={styles.r_flex}>
                                Right Column
                        </div>
                        
                </div>
                
                
        </div>
        );
        }

		Content.propTypes = {
			totalPage: PropTypes.number
		};
		Content.defaultProps = {
			totalPage: 500
		};
		
export default Content;
  