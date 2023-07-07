import React from 'react';
import './App.css';
import MovieList from "./movie-list"
import { Provider } from 'react-redux';
import { createStore} from 'redux';

const initialState = {
  movieList:[]
}

function reducer(state, action){
  console.log(action);
  switch(action.type){
    case 'SET_MOVIE_LIST':{
      return {...state, movieList: action.payload}
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
      <div className="App">
      <MovieList/>     
    </div>
    </Provider>    
  );
}

export default App;
