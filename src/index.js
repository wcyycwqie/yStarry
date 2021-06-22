/*
 * @Author: 
 * @Date: 2021-06-04 11:38:30
 * @LastEditors: Chaoyue
 * @LastEditTime: 2021-06-22 18:07:26
 * @FilePath: \yStarry\src\index.js
 */
import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './router';
import './assets/css/base.css'
import './assets/css/app.min.css'

ReactDOM.render(
    <AppRouter />,
    document.getElementById('root')

)