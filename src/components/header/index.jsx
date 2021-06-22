import React from 'react';
import './index.min.css'

class NavBar extends React.Component {
    render () {
        let liList = []
        let navTitle = ['风', '花', '雪', '月']
        // for(let i = 0; i < 5; i++) {
        //     liList.push(<li key={`navLi${i}`}>hohoho</li>)
        // }
        liList = navTitle.map((el, i) => {
            return <li key={`navLi${i}`}>{el}</li>
        })

        console.log(liList);

        return (
            <div className="yNavBar">
                <div className="nav-icon">
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
