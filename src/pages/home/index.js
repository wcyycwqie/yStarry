/*
 * @Author: 
 * @Date: 2021-06-18 14:34:33
 * @LastEditors: Chaoyue
 * @LastEditTime: 2021-06-22 18:18:30
 * @FilePath: \yStarry\src\pages\home\index.js
 */
import React from 'react';
import './index.min.css';

export default class Container extends React.Component {
    render () {
        return (
            <div className="yContainer">
                <div className="yBox-mainContent">
                    <MainContent />
                </div>
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
                    src: "2.png"
                },
                {
                    id: 2,
                    name: 'star II',
                    src: '3.png'
                },
                {
                    id: 3,
                    name: 'star III',
                    src: "4.png"
                },
                {
                    id: 4,
                    name: 'star IV',
                    src: "5.png"
                },
                {
                    id: 5,
                    name: 'star V',
                    src: "6.png"
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
                        <img src={require(`../../assets/images/background/${item.src || '1.png'}`).default} alt="" />
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
        showImgSrc: '../../assets/images/show/1.jpg'
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
                            <img src={require(`../../assets/images/background/${this.props.showImgSrc || '1.png'}`).default} alt="" />
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
