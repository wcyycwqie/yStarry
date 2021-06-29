/*
 * @Author: 
 * @Date: 2021-06-23 15:55:30
 * @LastEditors: Chaoyue
 * @LastEditTime: 2021-06-29 18:28:54
 * @FilePath: \yStarry\src\pages\caseDetail\index.js
 */
import React from 'react';
import {
    Link,
    withRouter,
    useParams,
    useLocation,
    useHistory
} from 'react-router-dom';
import './index.min.css';

function usePageViews () {
    console.log(useParams());
    console.log(useLocation());
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

        }

    }

    userLocal () {

    }

    render () {
        console.log('*****')
        console.log('render caseDetail')
        console.log(this.props);
        return (
            <div className="main">
                <div className="details-area">
                    <div className="area-title">title</div>
                    <div className="area-describe">tag</div>
                    <div className="area-showCard">
                        <img src="http://www.yfunny.cool/image/01.png" alt="" />
                        <div className="bottom-card"></div>
                    </div>
                    <div className="area-getMore">
                        <div className="yBtn">演示页面</div>
                        <div className="yBtn">查看文章</div>
                    </div>
                    <div className="area-details">

                    </div>

                </div>
            </div>
        )
    }
}

export default function CaseDetail (props) {
    console.log('CaseDetail');
    console.log(props);
    usePageViews()

    return (
        <div id="CaseDetail" className="CaseDetail">
            <MainContent {...props} />
        </div>
    )

}