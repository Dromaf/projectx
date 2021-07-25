import React from 'react'
import { Tab, Button, Icon } from 'semantic-ui-react'
import styles from './profile.module.scss';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Profile() {

    const watchItemList = useSelector(state => state.cardinfo.watchItemList);
    const unWatchItemList = useSelector(state => state.cardinfo.unWatchItemList);
    const checkItemList = useSelector(state => state.cardinfo.checkItemList);
    const favoriteItemList = useSelector(state => state.cardinfo.favoriteItemList);
  
    console.log(watchItemList);

    const checkItem = () => {
      console.log('checkItem');
    }
  
    const watchItem = () => {
      console.log('watchItem');
    }
  
    const unWatchItem = () => {
      console.log('watchItem');
    }
  
    const deleteItem = (id) => {
      console.log(id);
    }
  
    const favoriteItem = () => {
      console.log('favoriteItem');
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
                      <Button icon onClick = {checkItem} data-tooltip="Посмотрено"><Icon name='checkmark' /></Button>
                      <Button icon onClick = {unWatchItem} data-tooltip="Брошено"><Icon name='low vision' /></Button>
                      <Button icon onClick = {() => deleteItem(item.id)} data-tooltip="Удалить из списка"><Icon name='delete' /></Button>
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
                      <Button icon onClick = {favoriteItem} data-tooltip="Любимое"><Icon name='heart' /></Button>
                      <Button icon onClick = {() => deleteItem(item.id)} data-tooltip="Удалить из списка"><Icon name='delete' /></Button>
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
                      <Button icon onClick = {watchItem} data-tooltip="Буду смотреть"><Icon name='eye' /></Button>
                      <Button icon onClick = {() => deleteItem(item.id)} data-tooltip="Удалить из списка"><Icon name='delete' /></Button>
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
                      <Button icon onClick = {() => deleteItem(item.id)} data-tooltip="Удалить из списка"><Icon name='delete' /></Button>
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
  