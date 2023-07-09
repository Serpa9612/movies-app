import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { createStore} from 'redux';
import SeriesList from './series-list';
import Navbar from './Navbar';
import Footer from './Footer';
import Acces from './Acces';
import { BrowserRouter } from 'react-router-dom';
import Midlevar from './Midlevar';
import MovieList from './movie-list';

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
    <BrowserRouter>
      <Provider store={store}>
            <div>
                  <Navbar/>
            </div>
            <div>
            <Midlevar/>
            </div> 
            {/* <div>
                    <Acces/>
              </div>   */}
              <div><MovieList/></div>              
              <footer> 
              <Footer/>
              </footer>    
           
           
      </Provider>
    </BrowserRouter>
       
  );
}

export default App;