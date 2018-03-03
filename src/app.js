import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const template = <li className="text-primary">Hello Webpack World</li>;
ReactDOM.render(template, document.getElementById("app"));
