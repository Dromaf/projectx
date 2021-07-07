import styles from './header.module.scss'

function Header() {
    return (
        <header className={styles.h_flex}>
          <div className={styles.d_flex}>
            <img width={40} height={40} src="img/logo.png" alt="Logotype" />
            <div>
              <h3 >AnimeFilmsHub</h3>
              <p className={styles.mini_title}>Смотри или умри</p>
            </div>
          </div>
        <ul className={styles.d_flex}>
          <li className="mr-30 cu-p">
            <img width={18} height={18} src="img/notice.svg" alt="Уведомление" />
          </li>
          <li className="mr-20 cu-p">
              <img width={18} height={18} src="img/favorite.svg" alt="Закладки" />
          </li>
          <li>
              <img width={18} height={18} src="img/user.svg" alt="Пользователь" />
           
          </li>
            </ul>
            
        </header>
    
    );
  }
  
  export default Header;
  