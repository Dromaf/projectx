// import React, { useState, useEffect } from 'react';
import { Pagination } from 'semantic-ui-react';
import PropTypes from 'prop-types';
// import axios from 'axios';
import styles from './content.module.scss'
import Sort from './sort';
import Card from './card';
import Sliders from '../slider';

function Content(props) {
	const { items, itemsAM, img_url, valueitem, onClickSort, activePage, onChangePage, curBtNColrSort} = props;
	let totalPage = Number(items.total_pages)
	return (
		
        <div>
                <Sliders items={items} img_url={img_url}/>

                <div className={styles.content_flex}>

                        <div className={styles.l_flex}>
							<Sort onClickSort={onClickSort} valueitem={valueitem} curBtNColrSort={curBtNColrSort}/>
							<Card
								items={items}
								itemsAM={itemsAM}
								img_url={img_url}
								onClickFilmCard={props.onClickFilmCard}
							/>
							<Pagination
								activePage={activePage}
								totalPages={totalPage}
								onPageChange={onChangePage}
								ellipsisItem={null}/>					
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
  