import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Today from './Today';
import SerchBox from './serchBox';



const DATA = [
  { id: "todo-0", name: "ごはん", completed: true },
  { id: "todo-1", name: "課題", completed: false },
  { id: "todo-2", name: "買い物", completed: false }
];

ReactDOM.render(
  <React.StrictMode>
    <Today />
    <SerchBox />

    <App tasks={DATA} />
  </React.StrictMode>,
  document.getElementById('root')
);
