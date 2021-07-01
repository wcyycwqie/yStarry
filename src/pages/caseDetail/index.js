/*
 * @Author: 
 * @Date: 2021-06-23 15:55:30
 * @LastEditors: Chaoyue
 * @LastEditTime: 2021-07-01 16:19:40
 * @FilePath: \yStarry\src\pages\caseDetail\index.js
 */
import React from 'react';
import {
    useParams,
    useLocation,
    useHistory
} from 'react-router-dom';
import qs from 'querystring'
import './index.min.css';

// eslint-disable-next-line no-unused-vars
function usePageViews () {
    console.log(useParams());
    console.log(useLocation());
    console.log(useHistory());
    let location = useLocation();
    // 在此可以做一些统计
    // React.useEffect(() => {
    //     ga.send(["pageview", location.pathname]);
    // }, [location]);
    console.log('useLocation', location)
}

class MainContent extends React.Component {
    constructor(props) {
        super()
        this.state = {
            id: '',
            imgUrl: ''
        }

    }

    paramsHandle (param) {
        const { search } = param
        console.log(search);

        let res = {

        }
        return null
    }
    // 组件生命周期 getDerivedStateFromProps 在render更新前触发
    static getDerivedStateFromProps (props, state) {
        const { search } = props.location
        let param = qs.parse(search.slice(1))
        return param

    }

    render () {
        console.log('*****')
        console.log('render caseDetail')
        console.log(this.props);
        console.log(this.state);
        return (
            <div className="main">
                <div className="details-area">
                    <div className="area-title">title</div>
                    <div className="area-describe">tag</div>
                    <div className="area-showCard">
                        {/* <img src="http://www.yfunny.cool/image/01.png" alt="" /> */}
                        <img src={this.state.imgUrl ? require(`../../assets/images/background/${this.state.imgUrl}`).default : 'http://www.yfunny.cool/image/01.png'} alt="" />

                        <div className="bottom-card"></div>
                    </div>
                    <div className="area-getMore">
                        <div className="yBtn-default">演示页面</div>
                        <div className="yBtn-default">查看文章</div>
                    </div>
                    <div className="area-details">
                        <span>hohohoho</span>
                        <span>hohohoho</span>
                        <span>hohohoho</span>
                        <span>hohohoho</span>
                        <span>hohohoho</span>
                    </div>

                </div>
            </div>
        )
    }
}

export default function CaseDetail (props) {
    console.log('CaseDetail');
    console.log(props);
    // usePageViews()

    return (
        <div id="CaseDetail" className="CaseDetail">
            <MainContent {...props} />
        </div>
    )

}