import Header from './components/header';
import Search from './components/search';
import Content from './components/content';
import Card from './components/content/card';
import CardInfo from './components/content/card/card_info';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import requests from './requests';
import { Route, Switch } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

const api_key = '?api_key=23a88dbca49ffd6e59ebc13cc2ab60b7';
const img_url = 'https://image.tmdb.org/t/p/w500/';
const baseUrl = 'https://api.themoviedb.org/3';
let method = requests[0].fetch;
let curColrSort = requests[0].type;
let numberPage = 1;
let language = 'ru';

function App() {

      const [items, setItems] = useState([]);
      const [itemsCard, setItemsCard] = useState([]);
      // const [itemsAM, setItemsAM] = useState([]);
      const [valueitem, setValueitem] = useState(method);
      const [valueitemCard, setValueitemCard] = useState();
      const [curBtNColrSort, setCurBtNColrSort] = useState(curColrSort);
      const [activePage, setActivePage] = useState(numberPage);

        useEffect(() => {  
          async function FetchData() {
            const request = await axios.get(`${baseUrl}${valueitem}&page=${activePage}&language=${language}`);
              setItems(request.data);   
            return request;
            }
            FetchData();
        }, [valueitem, activePage]);
  
        useEffect(() => {  
          async function FetchDataCard() {
            const request = await axios.get(`${baseUrl}${valueitemCard}&language=${language}`);
              setItemsCard(request.data);   
            return request;
            }
            FetchDataCard();
        }, [valueitemCard]);

        // useEffect(() => {
        //     axios.get(`https://kitsu.io/api/edge/anime?page[limit]=10&page[offset]=${activePage}`).then((res) => {
        //       setItemsAM(res.data);
        //       });
        // }, [activePage]);

      const onClickSort = e => {
        let fetchType = requests.find(a => a.type === e.target.value)
        setValueitem(fetchType.fetch);
        setCurBtNColrSort(fetchType.type);
        setActivePage(numberPage);

      }
      const onClickFilmCard = (e) => {
          setValueitemCard(`/movie/${e.target.id}${api_key}`);
        }
        
      const onChangePage = (e, pageInfo) => {
        setActivePage(pageInfo.activePage);
      };
  return (
    <div className="wrapper">

      <BrowserRouter>  
          <Header />
          <Search />
          <Switch>
            <Route exact path='/'
                component={() => <Content
                items={items}
                // itemsAM={itemsAM}
                img_url={img_url}
                valueitem={valueitem}
                curBtNColrSort ={curBtNColrSort}  
                onChangePage={onChangePage}
                onClickFilmCard={onClickFilmCard}
                onClickSort={onClickSort}/>}
            />

            <Route exact path='/films' render={(props) =>
              <Card
                items={items}
                // itemsAM={itemsAM}
                img_url={img_url} {...props} />} />
            <Route exact path='/films/:id/:title' render={(props) => <CardInfo itemsCard={itemsCard} items={items} img_url={img_url} {...props} /> } />
            
          </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
