import Header from './components/header';
import Search from './components/search';
import Content from './components/content';
import Card from './components/content/card';
import CardInfo from './components/content/card/card_info';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import requests from './requests';
import { Route, Switch } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

const api_key = 'api_key=ecfaaed89cfbc68f027db531f7486239';
const img_url = 'https://image.tmdb.org/t/p/w500/';
const baseUrl = 'https://api.themoviedb.org/3/movie/';
let method = 'popular';
let numberPage = 1;
let language = 'ru';


function App() {

      const [items, setItems] = useState([]);
      // const [itemsAM, setItemsAM] = useState([]);
      const [valueitem, setValueitem] = useState(method);
      const [activePage, setActivePage] = useState(numberPage);

        useEffect(() => {  
          async function FetchData() {
            const request = await axios.get(`${baseUrl}${valueitem}?${api_key}&page=${activePage}&language=${language}`);
              setItems(request.data);   
            return request;
            }
            FetchData();
        }, [valueitem, activePage]);

        // useEffect(() => {
        //     axios.get(`https://kitsu.io/api/edge/anime?page[limit]=10&page[offset]=${activePage}`).then((res) => {
        //       setItemsAM(res.data);
        //       });
        // }, [activePage]);

      const onClickSort = e => {
        setValueitem(e.target.value);
        setActivePage(numberPage);

      }
    // const onClickFilmCard = (e) => {
    //       setValueitem(e.target.id);
    //       console.log(valueitem)
    //     }
        
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
                onChangePage={onChangePage}
                // onClickFilmCard={onClickFilmCard}
                onClickSort={onClickSort}/>}
            />

            <Route exact path='/films' render={(props) =>
              <Card
                items={items}
                // itemsAM={itemsAM}
                img_url={img_url} {...props} />} />
            <Route path='/films/:id/:title' render={(props) => <CardInfo items={items} img_url={img_url} {...props} /> } />
            
          </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
