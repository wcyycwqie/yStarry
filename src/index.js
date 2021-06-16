/*
 * @Author: 
 * @Date: 2021-06-04 11:38:30
 * @LastEditors: Chaoyue
 * @LastEditTime: 2021-06-16 18:27:23
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
            dataList: [
                {
                    id: 1,
                    name: 'star I',
                    src: "./assets/images/background/2.png"
                },
                {
                    id: 2,
                    name: 'star II',
                    src: './assets/images/background/3.png'
                },
                {
                    id: 3,
                    name: 'star III',
                    src: "./assets/images/background/4.png"
                },
                {
                    id: 4,
                    name: 'star IV',
                    src: "./assets/images/background/5.png"
                },
                {
                    id: 5,
                    name: 'star V',
                    src: "./assets/images/background/6.png"
                }
            ],
            showImgSrc: '',
        }
        this.hotRef = React.createRef();
    }

    renderCard () {
        // let dataList = [1, 2, 3, 4, 5]

        return this.state.dataList.map((item, index) => {
            return (
                <div className="card-item" key={`card${index}`} onClick={(e) => this.itemClick(e, item, index)}>
                    {/* <div className="card-title">{item.name}</div> */}
                    {/* <div className="card-text">{item.id}</div> */}
                    <div className="card-img">
                        <img src={require(`${item.src || './assets/images/show/1.jpg'}`).default} alt="" />
                    </div>
                </div>
            )
        })
    }
    itemClick (e, item, index) {
        this.setState({ showFlag: true, showImgSrc: item.src })
        console.log('hohoho');
        console.log(this.state);
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
                <MainToast parent={this} showFlag={this.state.showFlag} showImgSrc={this.state.showImgSrc} />
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
            showToast: props.showFlag
        }
    }

    static defaultProps = {
        showImgSrc: './assets/images/show/1.jpg'
    }

    // 该生命周期在新版本已经废弃 
    // componentWillReceiveProps(props) {
    //     console.log('componentWillReceiveProps');n
    // }

    static getDerivedStateFromProps (props, state) {
        console.log('ffff');
        console.log(props);
        console.log(state);
        console.log('ggggg');
        if (state.showToast !== props.showFlag) {
            return {
                showToast: props.showFlag
            }
        }
        return null;
    }

    render () {
        console.log(this.state);
        if (!this.state.showToast) {
            return null
        }

        // if (!this.props.showFlag) {
        //     return null
        // }
        console.log(this.props);
        return (
            <div id="mainToast" className="pop-box">
                <div className="pop-cover" onClick={() => { this.props.parent.setState({ showFlag: false }) }}></div>
                <div className="pop-content">
                    <div className="pop-top">
                        <span className="pop-title">Title</span>
                    </div>
                    <div className="pop-main">
                        <div className="pop-main-img">
                            <img src={require(`${this.props.showImgSrc || './assets/images/show/1.jpg'}`).default} alt="" />
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