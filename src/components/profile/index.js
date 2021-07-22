import React from 'react'
import { Tab, Button, Icon } from 'semantic-ui-react'
import styles from './profile.module.scss';

function Profile() {

    const checkItem = () => {
      console.log('checkItem');
    }
  
    const watchItem = () => {
      console.log('watchItem');
    }
  
    const unWatchItem = () => {
      console.log('watchItem');
    }
  
    const deleteItem = () => {
      console.log('deleteItem');
    }
  
    const favoriteItem = () => {
      console.log('favoriteItem');
    }

    const panes = [
      {
        menuItem: 'Буду смотреть',
        render: () =>
          <Tab.Pane attached={false}>
            <div className={styles.tablist}  >
              <div>
                <img height={60} width={40} src={'../../img/notfound.JPG'} alt='Название' />
              </div>
              <div className={styles.tabitemdescr}>
                <div className={styles.tabitemname}>Моя реинкарнация в отомэ-игре в качестве главной злодейки 2</div>
                <div>8.5 ⭐</div>
                <div>
                  <Button icon onClick = {checkItem} data-tooltip="Посмотрено" ><Icon name='checkmark' /></Button>
                  <Button icon onClick = {watchItem} data-tooltip="Брошено"><Icon name='low vision' /></Button>
                  <Button icon onClick = {deleteItem} data-tooltip="Удалить из списка"><Icon name='delete' /></Button>
                </div>
              </div>
             </div>
          </Tab.Pane>,
      },
      {
        menuItem: 'Посмотрено',
        render: () =>
          <Tab.Pane attached={false}>
            <div className={styles.tablist}  >
              <div>
                <img height={60} width={40} src={'../../img/notfound.JPG'} alt='Название' />
              </div>
              <div className={styles.tabitemdescr}>
                <div className={styles.tabitemname}>Ди: Охотник на вампиров</div>
                <div>6.5 ⭐</div>
                <div>
                  <Button icon onClick = {favoriteItem} data-tooltip="Любимое"><Icon name='heart' /></Button>
                  <Button icon onClick = {deleteItem} data-tooltip="Удалить из списка"><Icon name='delete' /></Button>
                </div>
              </div>
              </div>
          </Tab.Pane>,
      },
      {
        menuItem: 'Брошено',
        render: () =>
          <Tab.Pane attached={false}>
            <div className={styles.tablist}  >
              <div>
                <img height={60} width={40} src={'../../img/notfound.JPG'} alt='Название' />
              </div>
              <div className={styles.tabitemdescr}>
                <div className={styles.tabitemname}>Телохранитель жены киллера</div>
                <div>7.1 ⭐</div>
                <div>
                  <Button icon onClick = {unWatchItem} data-tooltip="Буду смотреть" ><Icon name='eye' /></Button>
                  <Button icon onClick = {deleteItem} data-tooltip="Удалить из списка"><Icon name='delete' /></Button>
                </div>
              </div>
            </div>
          </Tab.Pane>,
      },
      {
        menuItem: 'Любимые',
        render: () =>
          <Tab.Pane attached={false}>
            <div className={styles.tablist}  >
              <div>
                <img height={60} width={40} src={'../../img/notfound.JPG'} alt='Название' />
              </div>
              <div className={styles.tabitemdescr}>
                <div className={styles.tabitemname}>Операция «Ы» и другие приключения Шурика</div>
                <div>7.9 ⭐</div>
                <div>
                  <Button icon onClick = {deleteItem} data-tooltip="Удалить из списка"><Icon name='delete' /></Button>
                </div>
              </div>
            </div>
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
  