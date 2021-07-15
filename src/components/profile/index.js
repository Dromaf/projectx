import React from 'react'
import { Tab } from 'semantic-ui-react'
import styles from './profile.module.scss';



function Profile() {

    const panes = [
      {
        menuItem: 'Буду смотреть',
        render: () =>
          <Tab.Pane attached={false}>
            <div className={styles.tablist}  >
              <div>
                <img height={60} width={40} src={'../../img/notfound.JPG'} alt='Название' />
              </div>
              <div>
                <div><b>Моя реинкарнация в отомэ-игре в качестве главной злодейки 2</b></div>
              </div>
             </div>
          </Tab.Pane>,
      },
      {
        menuItem: 'Посмотрено',
        render: () => <Tab.Pane attached={false}>Посмотрено</Tab.Pane>,
      },
      {
        menuItem: 'Брошено',
        render: () => <Tab.Pane attached={false}>Брошено</Tab.Pane>,
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
  