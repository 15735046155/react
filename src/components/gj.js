/*
 * @Author: 黄佳佳
 * @Date: 2021-04-03 16:29:20
 * @LastEditors: 黄佳佳
 * @LastEditTime: 2021-04-03 19:17:30
 * @Description: 头部组件
 */
import React, { Component } from 'react'
function gj(Content){
    return class Header extends Component {
        render() {
            return (
                <div className="app_container">
                    <div className="app_header">
                        <div className="left">提示</div>
                        <div className="close">x</div>
                    </div>
                    <div>
                        <Content/>
                    </div>                    
                </div>
            )
        }
    }
}
export default gj


