/*
 * @Author: 
 * @Date: 2021-06-23 15:55:30
 * @LastEditors: Chaoyue
 * @LastEditTime: 2021-06-25 17:41:49
 * @FilePath: \yStarry\src\pages\caseDetail\index.js
 */
import React from 'react';
import './index.min.css';

class MainContent extends React.Component {
    constructor(props) {
        super()
        this.state = {

        }
    }

    render () {
        return (
            <div className="main">
                <div className="details-area">
                    <div className="area-title">title</div>
                    <div className="area-describe">tag</div>
                    <div className="area-showCard">
                        <img src="http://www.yfunny.cool/image/01.png" alt="" />
                        <div className="bottom-card"></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default function CaseDetail (props) {
    console.log('CaseDetail');
    console.log(props);
    return (
        <div id="CaseDetail" className="CaseDetail">
            <MainContent />
        </div>
    )
 
}