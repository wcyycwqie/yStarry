/*
 * @Author: 
 * @Date: 2021-06-23 15:55:30
 * @LastEditors: Chaoyue
 * @LastEditTime: 2021-06-23 18:18:58
 * @FilePath: \yStarry\src\pages\caseDetail\index.js
 */
import React from 'react';

class MainContent extends React.Component {
    constructor(props) {
        super()
        this.state = {

        }
    }

    render () {
        return (
            <div className="main">
                <div className="content">
                    hhohoho
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
            <MainContent/>
        </div>
    )

}