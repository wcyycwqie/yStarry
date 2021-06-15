/*
 * @Author: 
 * @Date: 2021-06-04 11:38:30
 * @LastEditors: Chaoyue
 * @LastEditTime: 2021-06-15 18:11:35
 * @FilePath: \yStarry\src\index.js
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/base.css'
import './index.min.css';


class Container extends React.Component {
    render () {
        return (
            <div className="yContainer">
                <div className="yBox-navbar">
                    <NavBar />
                </div>
                <div className="yBox-banner">
                    <Banner />
                </div>
                <div className="yBox-mainContent">
                    <MainContent />
                </div>

            </div>
        )
    }
}

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
                {/* <img src={require("./assets/images/background/1.png").default} alt="" className="banner-img" /> */}
                <div className="banner-img"></div>
            </div>
        )
    }
}

class MainContent extends React.Component {
    constructor(props) {
        super()
        this.state = {
            name: 'main area',
            showFlag: false,
        }
        this.hotRef = React.createRef();
    }

    renderCard () {
        let dataList = [1, 2, 3, 4, 5]
        return dataList.map((el, index) => {
            return (
                <div className="card-item" key={`card${index}`} onClick={(e) => this.itemClick(e, index)}>
                    <div className="card-title">hoho</div>
                    <div className="card-text">{el}</div>
                    <div className="card-text">{this.state.name}</div>
                </div>
            )
        })
    }
    itemClick (e, index) {
        console.log(e);
        this.setState({ showFlag: true })
    }

    getHotData (data) {
        console.log(data)
    }

    render () {
        return (
            <div id="yMainContent" className="yMainContent">
                <div className="yMain-dataList">
                    {this.renderCard()}
                </div>
                <ShowHot ref={this.hotRef} parent={this} nameValue={this.state.name} />
                <MainToast parent={this} showFlag={this.state.showFlag} />
            </div>
        )
    }
}

class ShowHot extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'show hot box',
            nameValue: 123,
        }
    }

    render () {
        return (
            <div>
                <h1>ahahahaha</h1>
                <h2>{this.props.nameValue}</h2>
                <h3>{this.state.nameValue}</h3>
                <h4 onClick={() => { console.log(this.props.parent.setState({ name: 'lalala' })) }}>parent hohoho</h4>
                <h2 onClick={() => { this.props.parent.getHotData(this.state.name) }}>diliver props to parent</h2>
            </div>
        )
    }
}

class MainToast extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showToast: false
        }
    }

    render () {
        if (!this.props.showFlag) {
            return null
        }
        return (
            <div id="mainToast" className="pop-box">
                <div className="pop-cover" onClick={() => { this.props.parent.setState({ showFlag: false }) }}></div>
                <div className="pop-content">
                    <div className="pop-top">
                        <span className="pop-title">Title</span>
                    </div>
                    <div className="pop-main">
                        <div className="pop-main-img">
                            <img src={require("./assets/images/show/1.jpg").default} alt="" />
                        </div>
                        <div className="pop-main-tips">
                            <span>text</span>
                        </div>

                    </div>
                </div>
            </div>
        )
    }

}



ReactDOM.render(
    <Container />,
    document.getElementById('root')

)