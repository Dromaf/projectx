import styles from './search.module.scss'

function Search() {
    return (
    <div className={styles.d_flex}>
        <div className={styles.search_block}>
        <img src="img/search.svg" alt="Search" />
          <img
            className={styles.clear}
            src="img/btn-remove.svg"
            alt="Clear"
          />
        <input placeholder="Поиск..." />
            </div>
    </div>
    );
  }
  
  export default Search;
  