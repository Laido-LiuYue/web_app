import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import { HashRouter as Router} from "react-router-dom";
// import CustomLink from './containers/CustomLink';
//import AuthExample from './auth/AuthExample';
import {Provider} from 'react-redux';
import Counter from './Counter';
import TodoList from './TodoList';
import store from './store';
ReactDOM.render(
      <div style={{padding:'50px'}}>
        <Counter />
        <Provider store={store} >
          <TodoList  />
        </Provider>
      </div>,
    document.getElementById('root')
  );


// ReactDOM.render(
//     <Router>
//         <App />
//     </Router>,
//     document.getElementById('root')
// )

