import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { createStore} from 'redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Access from './components/Access'
import Navbar from './components/Navbar'
import Midlevar from './components/Midlevar'
import Footer from './components/Footer'
import Login from './components/login'
import SingUp from './components/SingUp'
import MovieList from './components/movie-list'
import SeriesList from './components/series-list'




const initialState = {
  movieList:[],
  seriesList: []
  
}



function reducer(state, action){
  //console.log(action);
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
      <Provider store = {store}>
            <div>
              <Navbar/>
            </div>
            <div>
              <Midlevar/>
            </div>              
            <Routes>
              
              <Route path = "/" element={<Login/>}/>
              <Route path = "/Home" element={<Access/>}/>
              <Route path = "/Login" element={<Login/>}/>
              <Route path = "/SingUp" element={<SingUp/>}/>
              <Route path = "/Series" element={<SeriesList/>}/>
              <Route path = "/Movies" element={<MovieList/>}/>
            </Routes>                            
            <footer> 
              <Footer/>
            </footer>    
           
           
      </Provider>
    </BrowserRouter>
       
  );
}

export default App;