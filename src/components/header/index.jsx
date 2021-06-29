/*
 * @Author: 
 * @Date: 2021-06-22 16:23:30
 * @LastEditors: Chaoyue
 * @LastEditTime: 2021-06-29 11:50:00
 * @FilePath: \yStarry\src\components\header\index.jsx
 */
import React from 'react';
import './index.min.css'

// window.onscroll = function () {
//     //为了保证兼容性，这里取两个值，哪个有值取哪一个
//     //scrollTop就是触发滚轮事件时滚轮的高度
//     scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
//     console.log("滚动距离" + scrollTop);
// }
class NavBar extends React.Component {
    constructor(props) {
        super()
        this.state = {
            scrollTop: 0,
            showNavFlag: false,
        }
    }
    //  组件生命周期 组件第一次渲染后调用 数据初始化
    componentDidMount (props) {
        window.addEventListener('scroll', this.bindScroll)
    }

    // 组件生命周期 组件从 DOM 中移除之前立刻被调用
    componentWillUnmount () {
        window.removeEventListener('scroll', this.bindScroll)
    }

    bindScroll = (event) => {
        const scrollTop = (event.srcElement ? event.srcElement.documentElement.scrollTop : false)
            || window.pageYOffset
            || (event.srcElement ? event.srcElement.body.scrollTop : 0);
        if (!this.state.showNavFlag && scrollTop >= 160) {
            console.log(event);
            this.setState({ showNavFlag: true })
        }
        if (this.state.showNavFlag && scrollTop < 160) {
            this.setState({ showNavFlag: false })
        }
    }

    render () {
        console.log('render header');
        let liList = []
        let navTitle = ['风', '花', '雪', '月']
        liList = navTitle.map((el, i) => {
            return <li key={`navLi${i}`}>{el}</li>
        })
        return (
            <div className={`yNavBar ${this.state.showNavFlag ? 'bgShow' : ''}`}>
                <div className="nav-icon" onClick={() => { window.location = "/" }}>
                </div>
                <ul>
                    {liList}
                </ul>
            </div>
        )
    }
}

class Banner extends React.Component {
    render () {
        return (
            <div className="yBanner">
                {/* <img src={require("../../assets/images/background/1.png").default} alt="" className="banner-img" /> */}
                <div className="banner-img"></div>
            </div>
        )
    }
}


export default function Header () {
    return (
        <div className="yHeader">
            <div className="yBox-navbar">
                <NavBar />
            </div>
            <div className="yBox-banner">
                <Banner />
            </div>
        </div>
    )
}
