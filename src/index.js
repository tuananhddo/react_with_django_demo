import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TableOfUs from './row_table_demo'
import * as serviceWorker from './serviceWorker';
import Header from './familyTree/home_page.js'
import Footer from  './familyTree/home_page_footer'
import Body from  './familyTree/home_page_body'


// ReactDOM.render(<TableOfUs />, document.getElementById('root'));
// ReactDOM.render(<TableOfUs />, document.getElementById('top'));
ReactDOM.render(<Header />, document.getElementById('header'));
ReactDOM.render(<Body />, document.getElementById('body'));
ReactDOM.render(<Footer />, document.getElementById('footer'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
