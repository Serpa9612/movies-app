import React from 'react';
import './App.css';

import MovieList from "./movie-list"
import { Provider } from 'react-redux';
import { createStore} from 'redux';
import SeriesList from './series-list';
import Navbar from './Navbar';
import Footer from './Footer';
import Acces from './Acces';

const initialState = {
  movieList:[],
  seriesList: []
}

function reducer(state, action){
  console.log(action);
  switch(action.type){
    case 'SET_MOVIE_LIST':{
      return {...state, movieList: action.payload}
    }    
    case 'SET_SERIES_LIST':{
      return {...state, seriesList: action.payload}
    } 
    default:{
      return state
    }

  }
  
};

const store = createStore(reducer, initialState)

function App() {
  return (
    
    <Provider store={store}>
          <div>
                 <Navbar/>
          </div>
         <div>
              <Acces/>
         </div>         
           
         <footer>
             <Footer/>
         </footer>
    </Provider>
       
  );
}

export default App;