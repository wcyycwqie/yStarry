/*
 * @Author: 
 * @Date: 2021-06-18 14:34:33
 * @LastEditors: Chaoyue
 * @LastEditTime: 2021-07-23 17:22:32
 * @FilePath: \yStarry\src\pages\home\index.js
 */
import React from 'react';
import './index.min.css';
import {
    Link,
    withRouter,
    useLocation
} from 'react-router-dom'
// import request from '@/src/api/request';


// export default class Container extends React.Component {
//     render () {
//         console.log('Container Start');
//         console.log(this);
//         return (
//             <div className="yContainer">
//                 <div className="yBox-mainContent">
//                     <MainContent {...this.props} />
//                 </div>
//             </div>
//         )
//     }
// }

export default function Container (props) {
    console.log('Container Start');
    console.log(props);
    return (
        <div className="yContainer">
            <div className="yBox-mainContent">
                <MainContent {...props} />
            </div>
        </div>
    )

}


class MainContent extends React.Component {
    constructor(props) {
        console.log('constructor!!');
        super()
        this.state = {
            name: 'main area',
            showFlag: false,
            dataList: [],
            showImgSrc: '',
        }
        this.hotRef = React.createRef();
    }

    // 组件生命周期 getDerivedStateFromProps 在render更新前触发
    static getDerivedStateFromProps (props, state) {
        console.log('组件生命周期 getDerivedStateFromProps');
        return null
    }

    // 该生命周期在新版本(16.3)已经废弃 
    // 组件生命周期 componentWillMount 组件在第一次渲染前调用 
    // componentWillMount () {
    //     console.log('组件生命周期 componentWillMount');
    //     console.log(this.props);
    // }

    // 组件生命周期 componentDidMount 组件第一次渲染后调用 数据初始化
    componentDidMount () {
        console.log('组件生命周期 componentDidMount');
    }

    // 组件生命周期 componentWillUnmount 组件从 DOM 中移除之前立刻被调用
    componentWillUnmount () {
        console.log('组件生命周期 componentWillUnmount');
        console.log(this.props);
    }

    // 该生命周期在新版本(16.3)已经废弃 
    // 组件生命周期 componentWillReceiveProps 组件接收到一个新的 prop (更新后)时被调用
    // componentWillReceiveProps (props) {
    //     console.log('组件生命周期 componentWillReceiveProps');
    // }


    // 组件生命周期 shouldComponentUpdate 用于判断组件是否有数据更新
    shouldComponentUpdate (p) {
        console.log('判断组件是否有数据更新');
        return p
    }

    // 该生命周期在新版本(16.3)已经废弃 
    // 组件生命周期 componentWillUpdate 组件接收到新的props或者state但还没有render时被调用
    // componentWillUpdate (prop) {
    //     console.log('组件生命周期 componentWillUpdate 在render更新之前');
    //     console.log(prop);
    // }

    // 组件生命周期 componentDidUpdate 组件完成更新(render)后立即调用
    componentDidUpdate (prop) {
        console.log('组件生命周期 componentDidUpdate 在render完成更新之后 ');
        console.log(prop);
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
                    <div className="card-title">{item.title}</div>
                    <div className="card-link" >
                        <img src={require(`../../assets/images/icon/arr-I.png`).default} alt="跳转详情" onClick={(e) => this.gotoDetail(e, item)} />
                    </div>

                </div>
            )
        })
    }
    itemClick (e, item, index) {
        this.setState({ showFlag: true, showImgSrc: item.src })
    }

    getHotData (data) {
        console.log(data)

    }

    gotoDetail (e, data) {
        e.stopPropagation()
        console.log(data);
        console.log(this.props);
        this.props.history.push(`/case-detail?id=1&name=${data.name}&imgUrl=${data.src}`)
        // this.props.history.push({ pathname: '/case-detail', query: { name: `123` } })

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

    // 组件生命周期 
    static getDerivedStateFromProps (props, state) {
        console.log('-----');
        console.log('getDerivedStateFromProps');
        console.log('-----');
        if (state.showToast !== props.showFlag) {
            return {
                showToast: props.showFlag
            }
        }
        return null;
    }

    render () {
        console.log('********');
        console.log('render');
        console.log(this.state);
        console.log('********');
        if (!this.state.showToast) {
            return null
        }
        // if (!this.props.showFlag) {
        //     return null
        // }
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
