import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import { HashRouter as Router} from "react-router-dom";
// import CustomLink from './containers/CustomLink';
//import AuthExample from './auth/AuthExample';
import Counter from './Counter'
import TodoList from './TodoList'
ReactDOM.render(
    <div style={{padding:'30px'}}>
      <Counter />
      <TodoList />
    </div>,
    document.getElementById('root')
  );


// ReactDOM.render(
//     <Router>
//         <App />
//     </Router>,
//     document.getElementById('root')
// )

