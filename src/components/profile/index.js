import React from 'react'
import { Tab, Button, Icon } from 'semantic-ui-react'
import styles from './profile.module.scss';
import { useDispatch } from 'react-redux';
import { watchItem, unWatchItem, checkItem, favoriteItem, deleteItem} from '../../store/cardinfoSlice';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Profile() {
  
    const { watchItemList, unWatchItemList, checkItemList, favoriteItemList} = useSelector(state => state.cardinfo);

    // const singleFavorItem = favoriteItemList.filter(el => el.id !== Number(favoriteItemList.id));
    // console.log(singleFavorItem)
    // let activeFavorToggle = null;
    // if (singleFavorItem.length > 0) {
    //   singleFavorItem.map((item, index) => (
    //     console.log( item.handleFavor, item.id)
    //   ))
    // }
  
    let activeFavorToggle = false;
    const singleFavorItem = favoriteItemList.filter(el => el.id === Number(favoriteItemList[0].id));
    if (singleFavorItem.length > 0) activeFavorToggle = singleFavorItem[0].handleFavor
  
    const dispatch = useDispatch();
  
    const watchItems = (filmData) => {
      dispatch(watchItem({ filmData }));
    }
    const unWatchItems = (filmData) => {
      dispatch(unWatchItem({ filmData }));
    }
    const checkItems = (filmData) => {
      dispatch(checkItem({filmData}));
    }
    const favoriteItems = (filmData) => {
      dispatch(favoriteItem({ filmData }));
    }
  
    const deleteItems = (filmData) => {
      dispatch(deleteItem({ filmData }));
    }

    const panes = [
      {
        menuItem: 'Буду смотреть',
        render: () =>
          <Tab.Pane attached={false}>
            {watchItemList && watchItemList.map((item, index) => (
              <div className={styles.tablist} key={index}  >
                  <div>
                  <img height={60} width={40}  src={item.poster_path ? 'https://image.tmdb.org/t/p/w500' +  item.poster_path : '../../img/notfound.JPG'} alt='Название' />
                  </div>
                  <div className={styles.tabitemdescr}>
                    <div className={styles.tabitemname}><Link to={`/film/${item.id}`}>{item.title} </Link></div>
                    <div>{item.vote_average} ⭐</div>
                    <div>
                      <Button icon onClick = {() => checkItems(item)} data-tooltip="Посмотрено"><Icon name='checkmark' /></Button>
                      <Button icon onClick = {() => unWatchItems(item)} data-tooltip="Брошено"><Icon name='low vision' /></Button>
                      <Button icon onClick = {() => deleteItems(item)} data-tooltip="Удалить из списка"><Icon name='delete' /></Button>
                    </div>
                  </div>
              </div>
						))} 
          </Tab.Pane>,
      },
      {
        menuItem: 'Посмотрено',
        render: () =>
          <Tab.Pane attached={false}>
            {checkItemList && checkItemList.map((item, index) => (
              <div className={styles.tablist} key={index}  >
                  <div>
                  <img height={60} width={40}  src={item.poster_path ? 'https://image.tmdb.org/t/p/w500' +  item.poster_path : '../../img/notfound.JPG'} alt='Название' />
                  </div>
                  <div className={styles.tabitemdescr}>
                    <div className={styles.tabitemname}><Link to={`/film/${item.id}`}>{item.title} </Link></div>
                    <div>{item.vote_average} ⭐</div>
                    <div>
                      <Button icon onClick = {() => favoriteItems(item)} toggle active={activeFavorToggle} data-tooltip="Любимое"><Icon name='heart' /></Button>
                      <Button icon onClick = {() => deleteItems(item)} data-tooltip="Удалить из списка"><Icon name='delete' /></Button>
                    </div>
                  </div>
              </div>
						))} 
          </Tab.Pane>,
      },
      {
        menuItem: 'Брошено',
        render: () =>
          <Tab.Pane attached={false}>
            {unWatchItemList && unWatchItemList.map((item, index) => (
              <div className={styles.tablist} key={index} >
                  <div>
                  <img height={60} width={40}  src={item.poster_path ? 'https://image.tmdb.org/t/p/w500' +  item.poster_path : '../../img/notfound.JPG'} alt='Название' />
                  </div>
                  <div className={styles.tabitemdescr}>
                    <div className={styles.tabitemname}><Link to={`/film/${item.id}`}>{item.title} </Link></div>
                    <div>{item.vote_average} ⭐</div>
                    <div>
                      <Button icon onClick = {() => watchItems(item)} data-tooltip="Буду смотреть"><Icon name='eye' /></Button>
                      <Button icon onClick = {() => deleteItems(item)} data-tooltip="Удалить из списка"><Icon name='delete' /></Button>
                    </div>
                  </div>
              </div>
						))} 
          </Tab.Pane>,
      },
      {
        menuItem: 'Любимые',
        render: () =>
          <Tab.Pane attached={false}>
            {favoriteItemList && favoriteItemList.map((item, index) => (
              <div className={styles.tablist}  key={index} >
                  <div>
                  <img height={60} width={40}  src={item.poster_path ? 'https://image.tmdb.org/t/p/w500' +  item.poster_path : '../../img/notfound.JPG'} alt='Название' />
                  </div>
                  <div className={styles.tabitemdescr}>
                    <div className={styles.tabitemname}><Link to={`/film/${item.id}`}>{item.title} </Link></div>
                    <div>{item.vote_average} ⭐</div>
                    <div>
                      <Button icon onClick = {() => deleteItems(item)} data-tooltip="Удалить из списка"><Icon name='delete' /></Button>
                    </div>
                  </div>
              </div>
						))} 
          </Tab.Pane>,
      },
    ]

    console.log()
    return (
    <div className={styles.d_flex}>
        <h1>Профиль</h1>
        <Tab menu={{ pointing: true }} panes={panes} />
    </div>
    );
  }
  
export default Profile;
  